#!/usr/bin/env python3
"""Auto-contrôle d'un article MDX avant la preview.

Usage : python3 -I autocontrole.py chemin/vers/article.mdx [--blog content/blog/fr] [--publie]
Sortie : rapport texte. Code de sortie 1 si au moins un contrôle est en échec.
"""
import math
import re
import sys
from pathlib import Path


def split_frontmatter(text):
    m = re.match(r"^---\n(.*?)\n---\n?(.*)$", text, re.S)
    if not m:
        return {}, text
    fm = {}
    for line in m.group(1).splitlines():
        k, _, v = line.partition(":")
        if _:
            fm[k.strip()] = v.strip().strip('"')
    return fm, m.group(2)


def prose_lines(body):
    """Corps sans blocs de code, tableaux, séparateurs ni citations italiques de dialogue."""
    body = re.sub(r"```.*?```", "", body, flags=re.S)
    out = []
    for line in body.splitlines():
        s = line.strip()
        if not s or s == "---" or s.startswith("|") or s.startswith("#"):
            continue
        out.append(s)
    return out


def strip_md(s):
    s = re.sub(r"!\[[^\]]*\]\([^)]*\)", "", s)
    s = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", s)
    return re.sub(r"[*_`>]", "", s)


def main():
    args = sys.argv[1:]
    if not args:
        print(__doc__)
        return 2
    path = Path(args[0])
    blog = Path(args[args.index("--blog") + 1]) if "--blog" in args else None
    fm, body = split_frontmatter(path.read_text(encoding="utf-8"))
    lines = prose_lines(body)
    results = []  # (statut, libellé, détail)

    # Phrases longues
    long_sents = []
    for line in lines:
        for sent in re.split(r"(?<=[.!?…])\s+", strip_md(line)):
            n = len(sent.split())
            if n > 25:
                long_sents.append((n, sent[:70]))
    results.append(("OK" if not long_sents else "KO", "Phrases > 25 mots", f"{len(long_sents)}"))
    for n, s in long_sents:
        results.append(("  ", f"  {n} mots", f"« {s}… »"))

    # Tirets cadratins / demi-cadratins dans le corps
    dashes = [l[:70] for l in lines if "—" in l or "–" in l]
    results.append(("OK" if not dashes else "KO", "Tirets — / – dans le corps", f"{len(dashes)} ligne(s)"))
    for l in dashes:
        results.append(("  ", "  ligne", l))

    # Vouvoiement : tutoiement hors citations en italique
    tutoie = []
    for line in lines:
        hors_citation = re.sub(r"\*[^*]+\*", "", line)
        hors_citation = re.sub(r'"[^"]*"|«[^»]*»', "", hors_citation)
        if re.search(r"\b(tu|toi|ton|ta|tes|t')\b|\bt'", hors_citation, re.I):
            tutoie.append(line[:70])
    results.append(("OK" if not tutoie else "KO", "Tutoiement hors citation", f"{len(tutoie)} ligne(s)"))
    for l in tutoie:
        results.append(("  ", "  ligne", l))

    # Longueur et temps de lecture
    corps = re.sub(r"```.*?```", "", body, flags=re.S)
    corps = "\n".join(l for l in corps.splitlines() if l.strip() not in ("", "---") and not re.match(r"^\|[-: |]+\|?$", l.strip()))
    words = len(re.findall(r"\S+", strip_md(corps)))
    statut = "OK" if 400 <= words <= 1000 else "KO"
    note = "" if words <= 800 else " (au-dessus de 800, au-delà de 1000 : splitter)"
    results.append((statut if words <= 1000 else "KO", "Longueur", f"{words} mots, cible 500-800{note}"))
    attendu = math.ceil(words / 300)
    declare = fm.get("readingTime")
    ok_rt = declare is not None and declare.isdigit() and int(declare) == attendu
    results.append(("OK" if ok_rt else "KO", "readingTime", f"déclaré {declare}, calculé {attendu}"))

    # Métas
    mt = fm.get("metaTitle", "")
    results.append(("OK" if 0 < len(mt) <= 60 else "KO", "metaTitle ≤ 60", f"{len(mt)} car."))
    md = fm.get("metaDescription", "")
    results.append(("OK" if 150 <= len(md) <= 160 else "KO", "metaDescription 150-160", f"{len(md)} car."))
    if fm.get("excerpt", "") == md and md:
        results.append(("KO", "excerpt distinct de metaDescription", "identiques"))

    # Garde-fous frontmatter (nouvel article ; --publie pour auditer un article déjà en ligne)
    if "--publie" not in args:
        results.append(("OK" if fm.get("draft") == "true" else "KO", "draft: true", f"valeur {fm.get('draft')}"))
        results.append(("OK" if fm.get("send_newsletter") == "false" else "KO", "send_newsletter: false", f"valeur {fm.get('send_newsletter')}"))

    # Liens internes
    liens = re.findall(r"\]\((/blog/[^)#\s]+)\)", body)
    results.append(("OK" if len(liens) <= 3 else "KO", "Liens internes ≤ 3", f"{len(liens)}"))
    if blog:
        for lien in liens:
            slug = lien.split("/blog/")[1].strip("/")
            cible = blog / f"{slug}.mdx"
            if not cible.exists():
                results.append(("KO", "Lien vers slug inexistant", lien))
            elif re.search(r"^draft:\s*true", cible.read_text(encoding="utf-8"), re.M):
                results.append(("KO", "Lien vers un brouillon", lien))

    echecs = sum(1 for r in results if r[0] == "KO")
    print(f"AUTO-CONTRÔLE : {path.name}")
    for statut, label, detail in results:
        print(f"[{statut}] {label} : {detail}")
    print(f"\n{echecs} contrôle(s) en échec")
    return 1 if echecs else 0


if __name__ == "__main__":
    sys.exit(main())

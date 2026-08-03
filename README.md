# Generátor hesel

Jednoduchá webová aplikace pro generování náhodných hesel. Projekt jsem vytvořil v rámci procvičování základu JavaScriptu, práce s DOMem a HTML/CSS.

## Co aplikace umí
* Volba vlastností hesla (velká/malá písmena, speciální znaky, čísla).
* Nastavení délky hesla (1 až 30 znaků).
* **Garantovaný znak:** Pokud zaškrtneš např. čísla, heslo bude zaručeně obsahovat minimálně jedno číslo.
* **Kopírování do schránky:** Vygenerované heslo lze rovnou zkopírovat pomocí tlačítka.
* Kontrola délky hesla dle počtu zaškrtnutých možností.

## Použité technologie
* HTML5
* CSS3
* JavaScript (ES6+)

## Struktura souborů
* `index.html` – formulář a struktura stránky
* `style.css` – základní vzhled - nebylo prioritou
* `functions.js` – pomocné funkce (náhodný výběr, míchaní pole, výpis do HTML)
* `script.js` – hlavní logika, načítání dat z formuláře a event listenery

## Co jsem se na tom naučil
* Rozdělení kódu do více JS souborů pro lepší přehlednost.
* Práce s polem (metody jako `split`, `sort`, `join`, spread operátor).
* Dynamické vytváření prvků v HTML přes JS (`createElement`, `appendChild`).
* Odchytávání událostí formuláře (`submit`, `preventDefault`).

## Co bych chtěl do budoucna zlepšit
* Použít lepší způsob zamíchání pole (místo `Math.random()` vyzkoušet např. Fisher-Yates aloritmus).

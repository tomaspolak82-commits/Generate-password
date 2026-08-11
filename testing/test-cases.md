# Test Cases – Generate-password

Aplikace: https://tomaspolak82-commits.github.io/Generate-password/
Tester: Tomáš Polák

**Souhrn:** 25 test cases · 20 Pass · 4 Fail · 1 N/A

---

### TC-01 – Délka hesla = prázdné pole (0 checkboxů)

| | |
|---|---|
| **Kroky** | 1. Nezaškrtni žádný checkbox<br>2. Pole Délka hesla nech prázdné<br>3. Klikni Vytvořit heslo |
| **Očekávaný výsledek** | Po kliknutí na Vytvořit heslo vyskočí varování, že pole Délka hesla není vyplněno |
| **Skutečný výsledek** | Po kliknutí na Vytvořit heslo se aplikace chová, jako by heslo generovala – pouze nedojde k zobrazení hesla, ale vyskočí tlačítko Zkopírovat |
| **Status** | 🔴 Fail |
| **Poznámka** | Validace délky se u prázdného pole zcela obchází |

### TC-02 – Délka hesla = 0 (0 checkboxů)

| | |
|---|---|
| **Kroky** | 1. Nezaškrtni žádný checkbox<br>2. Délka = 0<br>3. Klikni Vytvořit heslo |
| **Očekávaný výsledek** | Varování: Hodnota musí být větší nebo rovna 1. |
| **Skutečný výsledek** | Zobrazeno varování "Hodnota musí být větší nebo rovna 1." |
| **Status** | 🟢 Pass |

### TC-03 – Délka hesla = 1 (0 checkboxů – min. platná)

| | |
|---|---|
| **Kroky** | 1. Nezaškrtni žádný checkbox<br>2. Délka = 1<br>3. Klikni Vytvořit heslo |
| **Očekávaný výsledek** | Vygeneruje se heslo o délce 1 |
| **Skutečný výsledek** | Vygenerováno 1 malé písmeno z abecedy |
| **Status** | 🟢 Pass |

### TC-04 – Délka hesla = 2, 1 checkbox (min. platná)

| | |
|---|---|
| **Kroky** | 1. Zaškrtni Čísla<br>2. Délka = 2<br>3. Klikni Vytvořit heslo |
| **Očekávaný výsledek** | Vygeneruje se heslo délky 2 obsahující alespoň 1 číslo |
| **Skutečný výsledek** | Vygenerováno 1 malé písmeno a číslo |
| **Status** | 🟢 Pass |

### TC-05 – Délka hesla = 1, 1 checkbox (pod min. hranicí)

| | |
|---|---|
| **Kroky** | 1. Zaškrtni Čísla<br>2. Délka = 1<br>3. Klikni Vytvořit heslo |
| **Očekávaný výsledek** | Po kliknutí na Vytvořit heslo vyskočí text, že délka hesla musí být počet zvolených checkboxů +1 |
| **Skutečný výsledek** | Dle očekávaného výsledku |
| **Status** | 🟢 Pass |

### TC-06 – Délka hesla = 4, 3 checkboxy (min. platná)

| | |
|---|---|
| **Kroky** | 1. Zaškrtni všechny 3 checkboxy<br>2. Délka = 4<br>3. Klikni Vytvořit heslo |
| **Očekávaný výsledek** | Vygeneruje se heslo délky 4 obsahující velké/malé písmeno, spec. znak i číslo |
| **Skutečný výsledek** | Při opakovaném generování nastala situace, kdy bylo vygenerováno heslo bez malého písmene – garance malého písmene tedy neplatí vždy |
| **Status** | 🔴 Fail |
| **Poznámka** | Generování malého písmene není garantované. Souvisí s TC-18 (stejný bug, jiná délka) |

### TC-07 – Délka hesla = 3, 3 checkboxy (pod hranicí)

| | |
|---|---|
| **Kroky** | 1. Zaškrtni všechny 3 checkboxy<br>2. Délka = 3<br>3. Klikni Vytvořit heslo |
| **Očekávaný výsledek** | Po kliknutí na Vytvořit heslo vyskočí text, že délka hesla musí být počet zvolených checkboxů +1 |
| **Skutečný výsledek** | Dle očekávaného výsledku |
| **Status** | 🟢 Pass |

### TC-08 – Délka hesla = 30 (horní hranice – platná)

| | |
|---|---|
| **Kroky** | 1. Libovolné checkboxy<br>2. Délka = 30<br>3. Klikni Vytvořit heslo |
| **Očekávaný výsledek** | Vygeneruje se heslo délky 30 složené pouze z malých písmen (bez zaškrtnutých checkboxů) |
| **Skutečný výsledek** | Vygenerováno heslo o délce 30 znaků, složené pouze z malých písmen |
| **Status** | 🟢 Pass |

### TC-09 – Délka hesla = 31 (nad horní hranicí)

| | |
|---|---|
| **Kroky** | 1. Žádný checkbox<br>2. Délka = 31<br>3. Klikni Vytvořit heslo |
| **Očekávaný výsledek** | Varování: Hodnota musí být menší nebo rovna 30. |
| **Skutečný výsledek** | Zobrazeno varování "Hodnota musí být menší nebo rovna 30." |
| **Status** | 🟢 Pass |

### TC-10 – Délka hesla = desetinné číslo (1.5)

| | |
|---|---|
| **Kroky** | 1. Zkus zadat 1.5 do pole Délka |
| **Očekávaný výsledek** | Varování: Zadejte platnou hodnotu. |
| **Skutečný výsledek** | Zobrazeno varování "Zadejte platnou hodnotu." s nápovědou, že dvě nejbližší platné hodnoty jsou 1 a 2 |
| **Status** | 🟢 Pass |

### TC-11 – Délka hesla = záporné číslo (-5)

| | |
|---|---|
| **Kroky** | 1. Zkus zadat -5 do pole Délka<br>2. Klikni Vytvořit heslo |
| **Očekávaný výsledek** | Varování: Hodnota musí být větší nebo rovna 1. |
| **Skutečný výsledek** | Zobrazeno varování "Hodnota musí být větší nebo rovna 1." |
| **Status** | 🟢 Pass |

### TC-12 – Zadání textu přes klávesnici

| | |
|---|---|
| **Kroky** | 1. Klikni do pole Délka<br>2. Zkus napsat abc |
| **Očekávaný výsledek** | Pole nepřijme text (type=number blokuje na úrovni prohlížeče) |
| **Skutečný výsledek** | Po pokusu napsat "abc" pole zůstalo prázdné, nešlo napsat žádné písmeno |
| **Status** | 🟢 Pass |

### TC-13 – Vložení textu přes paste (Ctrl+V)

| | |
|---|---|
| **Kroky** | 1. Zkopíruj text abc odjinud<br>2. Vlož (Ctrl+V) do pole Délka |
| **Očekávaný výsledek** | Pole nepřijme text (type=number blokuje na úrovni prohlížeče) |
| **Skutečný výsledek** | Po vložení textu zůstalo pole prázdné/nezměněné |
| **Status** | 🟢 Pass |

### TC-14 – Vložení speciálních znaků přes paste

| | |
|---|---|
| **Kroky** | 1. Zkopíruj !@#$<br>2. Vlož zkopírovaný text do pole Délka |
| **Očekávaný výsledek** | Pole nepřijme speciální znaky |
| **Skutečný výsledek** | Po vložení znaků zůstalo pole prázdné/nezměněné |
| **Status** | 🟢 Pass |

### TC-15 – Vložení script tagu přes paste (XSS pokus)

| | |
|---|---|
| **Kroky** | 1. Zkopíruj `<script>alert(1)</script>`<br>2. Vlož do pole Délka<br>3. Klikni Vytvořit heslo |
| **Očekávaný výsledek** | Skript se nespustí, žádný alert; pole hodnotu odmítne nebo ignoruje |
| **Skutečný výsledek** | Prohlížeč automaticky odfiltroval nepovolené znaky, v poli zůstalo "e1" (zachovány pouze validní znaky pro number input – "e" a "1"). Script se nespustil, žádný alert. Po kliknutí Vytvořit heslo prohlížeč zobrazil hlášku "Zadejte prosím číslo." |
| **Status** | 🟢 Pass |
| **Poznámka** | Po tomto test case byl vytvořen TC-25 (ověření platného exponenciálního zápisu) |

### TC-16 – Vložení platného čísla přes paste

| | |
|---|---|
| **Kroky** | 1. Zkopíruj 15<br>2. Vlož do pole Délka |
| **Očekávaný výsledek** | Pole přijme hodnotu 15 |
| **Skutečný výsledek** | V poli se zobrazilo 15, heslo šlo vytvořit |
| **Status** | 🟢 Pass |

### TC-17 – Délka hesla s velkým počtem desetinných míst (1,00000001)

| | |
|---|---|
| **Kroky** | 1. Nezaškrtni žádný checkbox<br>2. Postupně zadávej do pole Délka: 1,01 / 1,001 / 1,0001 / 1,00001 / 1,000001 / 1,0000001 / 1,00000001<br>3. Po každé hodnotě klikni Vytvořit heslo |
| **Očekávaný výsledek** | Všechny varianty by měly být odmítnuty stejně jako 1,1 (desetinné číslo = neplatný vstup, nezávisle na počtu desetinných míst) |
| **Skutečný výsledek** | Hodnoty s 2–6 desetinnými místy byly správně odmítnuty. Od 7 desetinných míst výše (1,0000001 a více) validace selhává a heslo se vygeneruje. |
| **Status** | 🔴 Fail |
| **Poznámka** | Hranice chyby je mezi 6. a 7. desetinným místem |

### TC-18 – Všechny 3 checkboxy zaškrtnuté

| | |
|---|---|
| **Kroky** | 1. Zaškrtni všechny<br>2. Délka = 10<br>3. Klikni Vytvořit heslo |
| **Očekávaný výsledek** | Heslo obsahuje velké/malé písmeno, spec. znak i číslo současně |
| **Skutečný výsledek** | Při opakovaném generování s délkou 10 a všemi 3 checkboxy nastala stejná situace jako u TC-06 – vygenerováno heslo bez malého písmene |
| **Status** | 🔴 Fail |
| **Poznámka** | Potvrzuje, že bug z TC-06 není omezen jen na minimální hranici (délka 4), ale objevuje se i při běžné délce hesla |

### TC-19 – Garantovaný znak – Čísla

| | |
|---|---|
| **Kroky** | 1. Zaškrtni jen Čísla<br>2. Vygeneruj heslo 10x za sebou |
| **Očekávaný výsledek** | Každé vygenerované heslo obsahuje alespoň 1 číslici |
| **Skutečný výsledek** | Otestováno 10x, ve všech 10 heslech byla přítomná alespoň 1 číslice |
| **Status** | 🟢 Pass |

### TC-20 – Garantovaný znak – Speciální znaky

| | |
|---|---|
| **Kroky** | 1. Zaškrtni jen Speciální znaky<br>2. Vygeneruj heslo 10x za sebou |
| **Očekávaný výsledek** | Každé heslo obsahuje alespoň 1 speciální znak |
| **Skutečný výsledek** | Otestováno 10x, ve všech 10 heslech byl přítomný alespoň 1 speciální znak |
| **Status** | 🟢 Pass |

### TC-21 – Kopírování hesla do schránky

| | |
|---|---|
| **Kroky** | 1. Vygeneruj heslo<br>2. Klikni tlačítko kopírovat<br>3. Vlož (Ctrl+V) do jiného pole/aplikace |
| **Očekávaný výsledek** | Zkopírované heslo přesně odpovídá vygenerovanému |
| **Skutečný výsledek** | Vložené heslo ze schránky bylo shodné s vygenerovaným heslem |
| **Status** | 🟢 Pass |

### TC-22 – Rychlé opakované kliknutí na Vytvořit heslo

| | |
|---|---|
| **Kroky** | 1. Klikni Vytvořit heslo 5x rychle za sebou |
| **Očekávaný výsledek** | Aplikace nespadne, žádné vizuální glitche, poslední zobrazené heslo je platné |
| **Skutečný výsledek** | Po prvním kliknutí se pole Délka automaticky vyprázdnilo (běžné chování appky), další rychlé kliky proto proběhly s prázdným polem a opakovaně spustily bug z TC-01. Aplikace přesto zůstala plynulá, bez pádu či zamrznutí. |
| **Status** | 🟢 Pass |
| **Poznámka** | Potvrzuje, že bug TC-01 je konzistentně reprodukovatelný i při rychlém opakovaném volání |

### TC-23 – Reload stránky po vygenerování hesla

| | |
|---|---|
| **Kroky** | 1. Vygeneruj heslo<br>2. Obnov stránku (F5) |
| **Očekávaný výsledek** | Po reloadu (F5) se formulář vrátí do výchozího prázdného stavu – žádné vygenerované heslo, žádné zaškrtnuté checkboxy, prázdné pole Délka (appka nemá localStorage/cookies) |
| **Skutečný výsledek** | Po F5 došlo k vymazání hesla, žádný checkbox nezůstal zaškrtnutý a zmizelo tlačítko Zkopírovat |
| **Status** | 🟢 Pass |

### TC-24 – Tlačítko zpět v prohlížeči po vygenerování

| | |
|---|---|
| **Kroky** | 1. Vygeneruj heslo<br>2. Klikni šipku zpět v prohlížeči<br>3. Klikni šipku vpřed |
| **Očekávaný výsledek** | Po kliknutí na tlačítko vpřed nebude na stránce poslední vygenerované heslo |
| **Skutečný výsledek** | – |
| **Status** | ⚪ N/A |
| **Poznámka** | Aplikace nemění URL ani nevytváří nové záznamy v historii prohlížeče – kliknutí na Vytvořit heslo nezakládá historický bod. Tlačítko zpět by opustilo appku úplně, netestuje tedy žádný interní stav aplikace. Test case v původní podobě není na tuto architekturu aplikovatelný. |

### TC-25 – Délka hesla zadaná v exponenciálním zápisu (1e1)

| | |
|---|---|
| **Kroky** | 1. Zadej do pole Délka hodnotu "1e1"<br>2. Klikni Vytvořit heslo |
| **Očekávaný výsledek** | Hodnota 1e1 je interpretována jako 10, vygeneruje se heslo o délce 10 znaků |
| **Skutečný výsledek** | Vygenerováno heslo o délce 10 znaků, 1e1 bylo správně interpretováno jako 10 |
| **Status** | 🟢 Pass |

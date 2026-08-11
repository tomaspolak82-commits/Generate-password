# Bug Reports – Generate-password

Aplikace: https://tomaspolak82-commits.github.io/Generate-password/
Reporter: Tomáš Polák

---

## BUG-01: Validace délky hesla se u prázdného pole zcela obchází

**Severity:** 🟡 Medium
**Priority:** Střední
**Status:** Open
**Nalezeno v:** TC-01, znovu potvrzeno v TC-22

### Kroky k reprodukci
1. Otevři aplikaci
2. Nezaškrtávej žádný checkbox
3. Pole "Délka hesla" nech prázdné
4. Klikni na tlačítko "Vytvořit heslo"

### Očekávaný výsledek
Aplikace zobrazí varování, že pole "Délka hesla" musí být vyplněno (podobně jako u hodnoty 0 nebo záporné hodnoty).

### Skutečný výsledek
Aplikace se chová, jako by heslo úspěšně generovala – nezobrazí žádnou chybovou hlášku, místo ní se rovnou objeví tlačítko "Zkopírovat". Prázdná hodnota v poli Délka tedy prochází validací, kterou správně blokuje např. hodnota 0.

### Prostředí
- Prohlížeč: Chrome 151.0.7922.77 (64bitový)
- OS: Windows

### Poznámka
Stejné chování se znovu projevilo při testu TC-22 (rychlé opakované klikání) – po prvním úspěšném vygenerování hesla se pole Délka automaticky vyprázdní, a každé další kliknutí tak znovu spustí tento bug. Nález je tedy snadno a konzistentně reprodukovatelný.

### Přiložené důkazy
Screenshoty nejsou přiloženy – bug je spolehlivě reprodukovatelný podle uvedených kroků.

---

## BUG-02: Generování malého písmene v heslu není garantované

**Severity:** 🟠 High
**Priority:** Vysoká
**Status:** Open
**Nalezeno v:** TC-06, potvrzeno v TC-18

### Kroky k reprodukci
1. Zaškrtni checkboxy "Velká/Malá písmena", "Speciální znaky" a "Čísla"
2. Nastav libovolnou platnou délku (ověřeno na délce 4 i 10)
3. Klikni opakovaně na "Vytvořit heslo" (víckrát za sebou)

### Očekávaný výsledek
Podle README aplikace ("Garantovaný znak: Pokud zaškrtneš např. čísla, heslo bude zaručeně obsahovat minimálně jedno číslo") by každý zaškrtnutý typ znaků měl být v heslu vždy zastoupen alespoň jednou – tedy i malé písmeno, pokud je zaškrtnutý checkbox "Velká/Malá písmena".

### Skutečný výsledek
Při opakovaném generování (ověřeno jak na minimální hranici – délka 4, tak při běžné délce 10) občas vznikne heslo, které obsahuje velké písmeno, speciální znak i číslo, ale **neobsahuje žádné malé písmeno**. Garance tedy neplatí konzistentně pro všechny typy znaků.

### Prostředí
- Prohlížeč: Chrome 151.0.7922.77 (64bitový)
- OS: Windows

### Poznámka
Bug se projevuje nezávisle na délce hesla (potvrzeno na dvou různých délkách), jde tedy pravděpodobně o chybu v samotném algoritmu skládání znaků, ne o okrajový jev vázaný jen na minimální boundary.

### Přiložené důkazy
Screenshoty nejsou přiloženy – bug je spolehlivě reprodukovatelný podle uvedených kroků.

---

## BUG-03: Nekonzistentní validace desetinných čísel v poli Délka hesla

**Severity:** 🟡 Medium
**Priority:** Střední
**Status:** Open
**Nalezeno v:** TC-17

### Kroky k reprodukci
1. Nezaškrtávej žádný checkbox
2. Do pole "Délka hesla" postupně zadávej hodnoty s rostoucím počtem desetinných míst: `1,01` / `1,001` / `1,0001` / `1,00001` / `1,000001` / `1,0000001` / `1,00000001`
3. Po každé hodnotě klikni na "Vytvořit heslo"

### Očekávaný výsledek
Všechny desetinné hodnoty by měly být validací odmítnuty stejně jako např. `1,1` (aplikace očekává celé číslo).

### Skutečný výsledek
Hodnoty s 2 až 6 desetinnými místy jsou správně odmítnuty (zobrazí se validační hláška). Od 7 desetinných míst výše (`1,0000001` a více) validace selže a heslo se přesto vygeneruje.

### Prostředí
- Prohlížeč: Chrome 151.0.7922.77 (64bitový)
- OS: Windows

### Poznámka
Přesná hranice chyby je mezi 6. a 7. desetinným místem. Nekonzistence napříč stejnou equivalence třídou (desetinná čísla) naznačuje chybu ve validační logice (pravděpodobně způsob zpracování/zaokrouhlení čísla), ne izolovaný jednorázový jev.

### Přiložené důkazy
Screenshoty nejsou přiloženy – bug je spolehlivě reprodukovatelný podle uvedených kroků.

---

## Souhrn

| ID | Bug | Severity | Status |
|---|---|---|---|
| BUG-01 | Validace délky se obchází u prázdného pole | 🟡 Medium | Open |
| BUG-02 | Malé písmeno není garantované | 🟠 High | Open |
| BUG-03 | Nekonzistentní validace desetinných čísel | 🟡 Medium | Open |

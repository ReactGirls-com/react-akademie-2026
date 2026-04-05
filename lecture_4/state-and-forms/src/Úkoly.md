# Úkoly na procvičení - LEKCE 4

Než začneš, vytvoř si úplně nový projekt od začátku - tzn. nová složka, nový projekt (npm create vite@latest) a můžeš se pustit do práce :)

## Úkol 1

1. vytvoř komponentu Counter
2. Counter bude vracet nadpis (h2) a 2 tlačítka
3. vytvoř stav s počáteční hodnotou 0 a zobraz ho v nadpisu
4. jedno tlačítko bude přidávat +1 k aktuálními stavu, druhé tlačítko bude odebírat -1 od aktálního stavu

## Úkol 2

Vytvoř komponentu Switcher, která přepíná text mezi „Zapnuto“ a „Vypnuto“ po kliknutí na tlačítko.

## Úkol 3

1. vytvoř komponentu ColorSwitcher
2. komponenta bude vracet div a 4 tlačítka
3. vytvoř stav s počáteční barvou „red“
4. nastav barvu pozadí divu podle stavu
5. podle toho na které tlačítko kliknu, barva divu se mi změní (např. red → blue → green → red)

Nápověda na stylování:

```jsx
export const ColorSwitcher = () => {
	return <div className={color}></div>;
};
```

```css
.red {
	background-color: red;
}
```

## Úkol 4

1. vytvoř komponentu ShowHide
2. komponenta bude vracet tlačítko a text (p)
3. vytvoř stav s počáteční hodnotou true (zobrazeno)
4. podle stavu zobraz nebo skryj text
5. tlačítko bude přepínat mezi zobrazením a skrytím textu

## Úkol 5

1. vytvoř komponentu NameInput
2. komponenta bude vracet input a odstavec
3. vytvoř stav pro jméno s počáteční hodnotou prázdný string
4. propoj input se stavem pomocí value a onChange
5. v odstavci zobraz text „Ahoj, [jméno]!“ podle aktuální hodnoty

## Úkol 6

1. vytvoř komponentu DoubleNumber
2. komponenta bude vracet input a odstavec
3. vytvoř stav pro číslo s počáteční hodnotou 0
4. propoj input se stavem pomocí value a onChange
5. v odstavci zobraz dvojnásobek zadané hodnoty
6. zkus ošetřit případ, kdy uživatel zadá jinou hodnotu než číslo

## Úkol 7

1. vytvoř komponentu Calculator
2. komponenta bude vracet 2 inputy, tlačítko a odstavec
3. vytvoř stavy pro oba inputy s počáteční hodnotou 0
4. vytvoř funkci, která sečte stavy z obou inputů a zobrazí výsledek do odstavce
5. zkus ošetřit případ, kdy uživatel zadá jinou hodnotu než číslo

## Úkol 8

1. vytvoř komponentu UserForm
2. komponenta bude vracet dva inputy (jméno a věk) a odstavec
3. vytvoř dva stavy – jeden pro jméno, druhý pro věk
4. v odstavci zobraz text „Jmenuješ se [jméno] a je ti [věk] let“

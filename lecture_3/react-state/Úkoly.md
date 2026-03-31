# Úkoly na procvičení

Než začneš, vytvoř si úplně nový projekt od začátku - tzn. nová složka, nový projekt (npm create vite@latest) a můžeš se pustit do práce :)

## Úkol 1

1. naimportuj organizacniJednotky z lide.js do App.jsx
2. ulož organizacniJednotky do proměnné units
3. vytvoř komponentu Units
4. předej units komponentě Units
5. vytvoř komponentu UnitDetail
6. pomocí .map vypiš seznam jednotlivých UnitDetail v komponentě Units
7. v UnitDetail vypiš id a název daného unitu
8. v komponentě Units přidej podmínku - vypiš jen organizační jednotky s lichým id

## Úkol 2

1. v komponentě Units vytvoř funkci onUnitClick
2. onUnitClick předej do UnitDetail jako prop
3. funkce onUnitClick bude vypisovat do konzole počet písmen názvu dané organizační jednotky
4. v UnitDetail přidej tlačítko <button>
5. při kliknutí na tlačítko zavolej funkci onUnitClick

## Úkol 3

1. vytvoř komponentu Card
2. zkus si Card nějak nastylovat - např. zelený okraj:

```js
export const Card = () => {
	return <div className="card"></div>;
};
```

```css
.card {
	border: 5px solid green;
}
```

3. v App.jsx si naimportuj lide z lide.js
4. ulož si lide do proměnné people
5. v App.jsx přidej nadpis (h1), text (p) a vypiš seznam (ul) lidí starších než 50 let
6. pošli nadpis, text a seznam jako children do komponenty Card

## Úkol 4

1. uprav komponentu Card, aby přijímala prop title
2. zobraz title uvnitř komponenty jako <h2>
3. zachovej children (obsah uvnitř Card)
4. použij komponentu Card vícekrát s různými title

## Úkol 5

1. vytvoř komponentu PeopleList
2. použij PeopleList místo klasického seznamu (ul) v App.jsx
3. předej proměnnou people do PeopleList přes props

## Úkol 5

1. v App.jsx vytvoř funkci handleDeletePerson
2. funkce přijme id
3. zatím jen vypiš id do konzole
4. předej funkci do PeopleList
5. v PeopleList přidej tlačítko "Smazat" každé položce v seznamu lidí
6. při kliknutí zavolej handleDeletePerson

## Úkol 6

1. vytvoř komponentu Button
2. bude přijímat props:
   - label
   - onButtonClick
3. použij ji místo klasického <button> všude kde nějaký button používáš

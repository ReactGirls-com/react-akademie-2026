import { useState } from "react";
import { Wrapper } from "./Wrapper";

// Příklad 1 - přímá změna proměnné nezpůsobí re-render komponenty -> nezobrazí se nový prvek v seznamu

export const WrongList = () => {
	const list = [1, 2, 3];

	return (
		<Wrapper>
			<ul>
				{list.map((number) => (
					<li key={number}>{number}</li>
				))}
			</ul>
			<button onClick={() => list.push(7)}>add number</button>
		</Wrapper>
	);
};

// Příklad 2 - změna stavu pomocí useState způsobí re-render komponenty -> nový prvek se zobrazí v seznamu
// používáme spread operátor, abychom vytvořili nový array, který obsahuje všechny prvky původního arraye + nový prvek

export const CorrectList = () => {
	const [listOfNumbers, setListOfNumbers] = useState([1, 2, 3]);

	return (
		<Wrapper>
			<ul>
				{listOfNumbers.map((number, index) => (
					<li key={index}>{number}</li>
				))}
			</ul>
			<button onClick={() => setListOfNumbers([...listOfNumbers, 7])}>add number</button>
		</Wrapper>
	);
};

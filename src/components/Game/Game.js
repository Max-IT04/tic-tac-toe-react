import React, { useState } from 'react';
import GameLayout from './GameLayout';

const WIN_PATTERNS = [
	[0, 1, 2], [3, 4, 5], [6, 7, 8], 
	[0, 3, 6], [1, 4, 7], [2, 5, 8], 
	[0, 4, 8], [2, 4, 6]             
]

const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));

	// Функция проверки победителя
	const checkWinner = (currentField) => {
		for (let pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern;
			if (
				currentField[a] &&
				currentField[a] === currentField[b] &&
				currentField[a] === currentField[c]
			) {
				return currentField[a];
			}
		}
		return null;
	};

	// обработчик клика по клетке
	const handleCellClick = (index) => {
		console.log('click', index);
		// 1. Если игра закончена или клетка занята - выходим
		if (isGameEnded || field[index]) {
			return;
		}

		// 2. Создаем копию поля
		const newField = [...field];
		newField[index] = currentPlayer;

		// 3. Проверяем победителя
		const winner = checkWinner(newField);

		// 4. Проверяем ничью 
		const isFieldFull = newField.every(cell => cell !== '');

		// 5. Обновляем состояние
		setField(newField);

		if (winner) {
			// Есть победитель
			setIsGameEnded(true);
		} else if (isFieldFull) {
			// Ничья
			setIsDraw(true);
		} else {
			// продолжаем игру меняем игрока
			setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
		}
	};

	// обработчик сброса
	const handleReset = () => {
		console.log('reset game');
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(''));
	};

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
			onCellClick={handleCellClick}
			onReset={handleReset}
		/>
	);
};

export default Game;

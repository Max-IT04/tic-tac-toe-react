import React from 'react';
import Information from '../Information/Information';
import Field from '../Field/Field';
import PropTypes from 'prop-types';
import styles from './Game.module.css';

const GameLayout = ({ currentPlayer, isGameEnded, isDraw, field, onCellClick, onReset }) => {
	return (
		<div className={styles.game}>
			<h1>Крестики-Нолики</h1>

			<Information
				currentPlayer={currentPlayer}
				isGameEnded={isGameEnded}
				isDraw={isDraw}
			/>

			<Field field={field} onCellClick={onCellClick}/>

			<button className={styles.resetButton} onClick={onReset}>
				Начать заново
			</button>
		</div>
	);
};

GameLayout.propTypes = {
	currentPlayer: PropTypes.oneOf(['X', '0']).isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired,
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
	onReset: PropTypes.func.isRequired,
}; 

export default GameLayout;

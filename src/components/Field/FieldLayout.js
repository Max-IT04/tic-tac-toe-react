import React from 'react';
import PropTypes from 'prop-types';
import styles from './Field.module.css';

const FieldLayout = ({ field, onCellClick }) => {
	return (
		<div className={styles.field}>
			
			<div className={styles.row}>
				<button className={styles.cell} onClick={() => onCellClick(0)}>
					{field[0]}
				</button>
				<button className={styles.cell} onClick={() => onCellClick(1)}>
					{field[1]}
				</button>
				<button className={styles.cell} onClick={() => onCellClick(2)}>
					{field[2]}
				</button>
			</div>

			<div className={styles.row}>
				<button className={styles.cell} onClick={() => onCellClick(3)}>
					{field[3]}
				</button>
				<button className={styles.cell} onClick={() => onCellClick(4)}>
					{field[4]}
				</button>
				<button className={styles.cell} onClick={() => onCellClick(5)}>
					{field[5]}
				</button>
			</div>

			<div className={styles.row}>
				<button className={styles.cell} onClick={() => onCellClick(6)}>
					{field[6]}
				</button>
				<button className={styles.cell} onClick={() => onCellClick(7)}>
					{field[7]}
				</button>
				<button className={styles.cell} onClick={() => onCellClick(8)}>
					{field[8]}
				</button>
			</div>
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired,
};

export default FieldLayout;

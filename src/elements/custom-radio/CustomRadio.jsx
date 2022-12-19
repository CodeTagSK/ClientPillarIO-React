import React from "react";
import styles from "./CustomRadio.module.css";

function CustomRadio({ label }) {
	return (
		<div className={styles.radioWrapper}>
			<input className={styles.input} type="radio" name="" id="" />
			<label className={styles.label}>{label}</label>
		</div>
	);
}

export default CustomRadio;

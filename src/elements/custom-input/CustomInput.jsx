import React from "react";
import styles from "./CustomInput.module.css";

function CustomInput({ placeholder }) {
	return (
		<input
			className={styles.input}
			type="text"
			name=""
			id=""
			placeholder={placeholder}
		/>
	);
}

export default CustomInput;

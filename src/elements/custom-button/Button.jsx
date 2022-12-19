import React from "react";
import styles from "./Button.module.css";

function Button({ btnText, className, beforeIcon, afterIcon, rounded }) {
	return (
		<button
			className={
				rounded
					? `${className} ${styles.customContainer} ${styles.rounded}`
					: `${className} ${styles.customContainer}`
			}>
			<div className={styles.btnChildren}>
				<span>{beforeIcon}</span>
				<p>{btnText}</p>
				<span>{afterIcon}</span>
			</div>
		</button>
	);
}

export default Button;

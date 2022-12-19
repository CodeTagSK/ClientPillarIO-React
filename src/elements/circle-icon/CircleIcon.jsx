import React from "react";
import styles from "./CircleIcon.module.css";

function CircleIcon({ Icon, fill }) {
	return (
		<div
			className={
				fill ? `${styles.circleIconFill}` : `${styles.circleIconNoFill}`
			}>
			<div className={styles.IconContainer}>{Icon}</div>
		</div>
	);
}

export default CircleIcon;

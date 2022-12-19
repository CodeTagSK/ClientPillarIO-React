import React from "react";
import Button from "../../elements/custom-button/Button";
import styles from "./CardPrimary.module.css";

function CardPrimary(props) {
	const {
		cardImage,
		cardTitle,
		cardText,
		btnBeforeIcon,
		btnText,
		btnAfterIcon,
	} = props;
	return (
		<div
			className={
				!cardTitle
					? `${styles.container} ${styles.containerOnlyBtn}`
					: `${styles.container}`
			}>
			<img src={cardImage} alt="" />
			<div className={styles.textContent}>
				<div className={styles.text}>
					<h4>{cardTitle}</h4>
					<p>{cardText}</p>
				</div>
				<Button
					beforeIcon={btnBeforeIcon}
					btnText={btnText}
					className={!cardTitle ? `${styles.onlyBtn}` : `${styles.button}`}
					afterIcon={btnAfterIcon}
				/>
			</div>
		</div>
	);
}

export default CardPrimary;

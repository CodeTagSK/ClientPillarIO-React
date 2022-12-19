import React from "react";
import Button from "../../elements/custom-button/Button";
import CustomInput from "../../elements/custom-input/CustomInput";
import CustomRadio from "../../elements/custom-radio/CustomRadio";
import styles from "./JoiningForm.module.css";

function JoiningForm() {
	return (
		<form className={styles.form}>
			<h4>Join the squad</h4>
			<p>knoe when i drop merch & speed vlogs</p>
			<CustomInput placeholder="Email" />
			<CustomInput placeholder="#Phone" />
			<div className={styles.radiosWrapper}>
				<CustomRadio label="I'm a Fan" />
				<CustomRadio label="I'm a Brand" />
				<CustomRadio label="I'm a Creator" />
			</div>
			<Button btnText="Submit" />
		</form>
	);
}

export default JoiningForm;

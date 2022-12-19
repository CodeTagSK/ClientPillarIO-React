import React from "react";
import CircleIcon from "../../elements/circle-icon/CircleIcon";
import Button from "../../elements/custom-button/Button";
import styles from "./header.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IosShareIcon from "@mui/icons-material/IosShare";

function Header() {
	return (
		<div className={styles.container}>
			<CircleIcon Icon={<IosShareIcon className={styles.circleIcon} />} fill />
			<Button
				className={styles.button}
				beforeIcon={<FavoriteIcon className={styles.beforeIcon} />}
				btnText="Subscribe"
				rounded
			/>
		</div>
	);
}

export default Header;

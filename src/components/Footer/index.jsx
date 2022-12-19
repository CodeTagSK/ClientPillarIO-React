import React from "react";
import { ReactComponent as FooterLogo } from "../../assets/pillarf.svg";
import styles from "./Footer.module.css";
function Footer() {
	return (
		<div className={styles.container}>
			<p>
				<span>Powered By</span> <FooterLogo />
			</p>
		</div>
	);
}

export default Footer;

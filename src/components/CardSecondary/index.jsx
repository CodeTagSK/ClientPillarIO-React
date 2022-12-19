import React, { useState } from "react";
import MusicPlay from "../MusicPlay";
import styles from "./CardSecondary.module.css";

function CardSecondary(props) {
	const [show, setShow] = useState(false);
	const [songDisplay, setSongDisplay] = useState(false);
	const [showIframe, setShowIframe] = useState(false);
	const {
		leftIcon,
		cardTitle,
		cardText,
		rightIcon,
		price,
		showSong = "false",
		displayIframe = "false",
		iframeUrl,
		iframeTitle,
	} = props;

	const showContentHandler = () => {
		setShow(!show);
		showSong === "true"
			? setSongDisplay(!songDisplay)
			: displayIframe === "true"
			? setShowIframe(!showIframe)
			: "";
	};
	return (
		<div
			className={!show ? `${styles.container}` : `${styles.onClickContainer}`}>
			<div className={styles.boxContainer}>
				<div>{leftIcon}</div>
				<div className={styles.textContainer}>
					<h4>{cardTitle}</h4>
					<p>{cardText}</p>
					{price && <p>{price}</p>}
				</div>
				<div onClick={showContentHandler}>{rightIcon}</div>
			</div>
			{show && songDisplay && <MusicPlay />}
			{show && showIframe && (
				<div className={styles.iframe}>
					<iframe
						width="620"
						height="360"
						src={iframeUrl}
						title={iframeTitle}
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen></iframe>
				</div>
			)}
		</div>
	);
}

export default CardSecondary;

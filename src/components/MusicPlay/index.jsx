import React from "react";
import styles from "./Music.module.css";
import songImage from "../../assets/music.jpeg";
import { ReactComponent as Spotify } from "../../assets/spotify.svg";
import { ReactComponent as Forward } from "../../assets/forwardPlay.svg";
import { ReactComponent as Backward } from "../../assets/previousPlay.svg";
import { ReactComponent as Play } from "../../assets/play.svg";
import { ReactComponent as ThreeDots } from "../../assets/threedots.svg";
import CircleIcon from "../../elements/circle-icon/CircleIcon";

function MusicPlay() {
	return (
		<div className={styles.container}>
			<img src={songImage} alt="music-cover-pic" />
			<div className={styles.text}>
				<h4>1 Wishing . King Han</h4>
				<p>Wishing . King Han</p>
				<div className={styles.preview}>PREVIEW</div>
			</div>
			<div className={styles.playIconsWrapper}>
				<Spotify />
				<div className={styles.playIconsBottom}>
					<Forward />
					<Backward />
					<ThreeDots />
					<CircleIcon Icon={<Play />} fill />
				</div>
			</div>
		</div>
	);
}

export default MusicPlay;

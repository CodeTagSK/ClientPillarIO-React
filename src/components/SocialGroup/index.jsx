import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { ReactComponent as Spotify } from "../../assets/spotify.svg";
import { ReactComponent as Discord } from "../../assets/discord.svg";
import { ReactComponent as Twitch } from "../../assets/twitch.svg";
import { ReactComponent as Tiktok } from "../../assets/tiktok.svg";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CircleIcon from "../../elements/circle-icon/CircleIcon";
import styles from "./Social.module.css";

function SocialGroup() {
	const SocialIcons = [
		<EmailIcon className={styles.icon} />,
		<InstagramIcon className={styles.icon} />,
		<Twitch className={styles.icon} />,
		<TwitterIcon className={styles.icon} />,
		<YouTubeIcon className={styles.icon} />,
		<Discord className={styles.icon} />,
		<Tiktok className={styles.icon} />,
		<LinkedInIcon className={styles.icon} />,
		<Spotify className={styles.icon} />,
	];

	const renderIcons = SocialIcons.map((icon, index) => {
		return (
			<div key={index}>
				<CircleIcon Icon={icon} />
			</div>
		);
	});

	return <div className={styles.socialContainer}>{renderIcons}</div>;
}

export default SocialGroup;

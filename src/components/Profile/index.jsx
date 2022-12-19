import React from "react";
import styles from "./Profile.module.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import VerifiedIcon from "@mui/icons-material/Verified";
import ProfilePic from "../../assets/profile.jpeg";

function Profile(props) {
	const { profileTitle, profileText, location } = props;
	return (
		<div className={styles.container}>
			<img src={ProfilePic} alt="Profile-Pic" />
			<h1>
				{profileTitle}
				<span>
					<VerifiedIcon className={styles.verifiedIcon} />
				</span>
			</h1>
			<p>{profileText}</p>
			<p>
				<LocationOnOutlinedIcon />
				<span>{location}</span>
			</p>
		</div>
	);
}

export default Profile;

import styles from "./Home.module.css";
import Header from "./components/Header/Header";
import data from "../data.json";
import SocialGroup from "./components/SocialGroup";
import CardPrimary from "./components/CardPrimary";
import CardSecondary from "./components/CardSecondary";
import Profile from "./components/Profile";
import JoiningForm from "./components/JoiningForm";
import Footer from "./components/Footer";
import Favorite from "@mui/icons-material/Favorite";
import YouTubeIcon from "@mui/icons-material/YouTube";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import comments from "./assets/comments.png";
import Button from "./elements/custom-button/Button";
import KeyIcon from "@mui/icons-material/Key";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import { ReactComponent as Spotify } from "./assets/spotify.svg";
import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import { ReactComponent as Etherium } from "./assets/etherium.svg";
import Listen from "./assets/listen.png";

function Home() {
	const TopSectionCards = data.card.slice(0, 3).map((card, index) => {
		return (
			<CardPrimary
				key={index}
				btnBeforeIcon={<Favorite className={styles.btnBeforeIcon} />}
				btnText="Subscribe to Unlock"
				cardTitle={card.title}
				cardText={card.text}
				cardImage={card.cardImage}
			/>
		);
	});
	const BusinessSectionCards = data.cardSecondary
		.slice(3, 8)
		.map((card, index) => {
			return (
				<CardSecondary
					key={index}
					leftIcon={
						index === 1 ? (
							<img src={Listen} className={styles.pngIcon} alt="Listen" />
						) : index === 3 ? (
							<KeyIcon className={`${styles.keyIcon} ${styles.icons}`} />
						) : index === 4 ? (
							<StarRoundedIcon className={`${styles.icons}`} />
						) : (
							""
						)
					}
					cardTitle={card.title}
					cardText={card.text}
					rightIcon={
						index === 1 ? (
							<Etherium className={styles.pngIcon} />
						) : index === 2 ? (
							<BoltRoundedIcon className={styles.icons} />
						) : (
							""
						)
					}
					price=""
				/>
			);
		});
	const MusicSectionCards = data.cardSecondary
		.slice(8, 11)
		.map((card, index) => {
			return (
				<CardSecondary
					key={index}
					leftIcon={
						index === 0 ? (
							<Spotify className={styles.icons} />
						) : index === 1 ? (
							<MusicNoteRoundedIcon className={styles.icons} />
						) : index === 2 ? (
							<YouTubeIcon className={styles.icons} />
						) : (
							""
						)
					}
					cardTitle={card.title}
					cardText={card.text}
					showSong={index === 0 && "true"}
					displayIframe={index === 2 && "true"}
					iframeUrl={index === 2 && card.videoUrl}
					iframeTitle={index === 2 && card.videoTitle}
					rightIcon={
						index === 0 ? (
							<KeyboardArrowDownIcon className={styles.icons} />
						) : index === 2 ? (
							<KeyboardArrowDownIcon className={styles.icons} />
						) : (
							""
						)
					}
					price=""
				/>
			);
		});

	const NFTSectionCards = data.card.slice(4, 7).map((card, index) => {
		return (
			<CardPrimary
				key={index}
				btnText="Buy for $777"
				cardTitle={card.title}
				cardText={card.text}
				cardImage={card.cardImage}
				btnAfterIcon={<LaunchRoundedIcon className={styles.launchIcon} />}
			/>
		);
	});

	const NFTSectionSecondaryCards = data.cardSecondary
		.slice(11, 16)
		.map((card, index) => {
			return (
				<CardSecondary
					key={index}
					leftIcon={
						index === 0 || index === 3 || index === 4 ? (
							<img
								className={styles.commentsIcon}
								src={comments}
								alt="comments"
							/>
						) : (
							<YouTubeIcon className={styles.icons} />
						)
					}
					displayIframe={(index === 1 || index === 2) && "true"}
					iframeUrl={(index === 1 || index === 2) && card.videoUrl}
					iframeTitle={(index === 1 || index === 2) && card.videoTitle}
					cardTitle={card.title}
					cardText={card.text}
					rightIcon={
						index === 0 || index === 3 || index === 4 ? (
							<Button btnText="Request Me" />
						) : (
							<KeyboardArrowDownIcon className={styles.icons} />
						)
					}
					price={
						index === 0
							? "$10"
							: index === 3
							? "$500"
							: index === 4
							? "$222"
							: ""
					}
				/>
			);
		});
	return (
		<>
			<header className={styles.containerHeader}>
				<Header />
			</header>
			<main className={styles.container}>
				<section className={`${styles.heroSection} ${styles.section}`}>
					<Profile
						profileTitle={data.name}
						profileText={data.designation}
						location={data.location}
					/>
					<SocialGroup />
				</section>
				<section
					className={`${styles.exclusiveContentSection} ${styles.section}`}>
					<h3>Exclusive Content</h3>
					<h4>Get access to all the following content⬇️</h4>
					<div className={styles.topCardWrapper}>{TopSectionCards}</div>
				</section>
				<section className={`${styles.formSection} ${styles.section}`}>
					<div className={styles.secondaryCardWrapper}>
						<CardPrimary
							cardImage={data.card[3].cardImage}
							btnText=" Buy for $4.99"
							className={styles.cardBtnSingle}
						/>
						<CardSecondary
							leftIcon={<YouTubeIcon className={styles.icons} />}
							cardTitle={data.cardSecondary[0].title}
							cardText={data.cardSecondary[0].text}
							price=""
						/>
						<CardSecondary
							leftIcon={<YouTubeIcon className={styles.icons} />}
							cardTitle={data.cardSecondary[1].title}
							cardText={data.cardSecondary[1].text}
							rightIcon={<KeyboardArrowDownIcon className={styles.icons} />}
							displayIframe="true"
							iframeUrl={data.cardSecondary[1].videoUrl}
							iframeTitle={data.cardSecondary[1].videoTitle}
							price=""
						/>
						<JoiningForm />
						<CardSecondary
							leftIcon={<YouTubeIcon className={styles.icons} />}
							cardTitle={data.cardSecondary[2].title}
							cardText={data.cardSecondary[2].text}
							rightIcon={<KeyboardArrowDownIcon className={styles.icons} />}
							displayIframe="true"
							iframeUrl={data.cardSecondary[2].videoUrl}
							iframeTitle={data.cardSecondary[2].videoTitle}
							price=""
						/>
					</div>
				</section>
				<section className={`${styles.bussinessSection} ${styles.section}`}>
					<h2>Business</h2>
					<div className={styles.secondaryCardWrapper}>
						{BusinessSectionCards}
					</div>
				</section>
				<section className={`${styles.musicSection} ${styles.section}`}>
					<h2>Music</h2>
					<div className={styles.secondaryCardWrapper}>{MusicSectionCards}</div>
				</section>
				<section className={`${styles.nftSection} ${styles.section}`}>
					<h2>NFT's</h2>
					<div className={styles.secondaryCardWrapper}>{NFTSectionCards}</div>
					<div className={styles.secondaryCardWrapper}>
						{NFTSectionSecondaryCards}
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}

export default Home;

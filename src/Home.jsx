import styles from "./Home.module.css";
import { ReactComponent as Logo } from "./assets/pillarf.svg";
import Header from "./components/Header/Header";
import CircleIcon from "./elements/circle-icon/CircleIcon";
import data from "../data.json";
import SocialGroup from "./components/SocialGroup";

function Home() {
	return (
		<div className={styles.container}>
			{/* <Header /> */}
			<SocialGroup />
		</div>
	);
}

export default Home;

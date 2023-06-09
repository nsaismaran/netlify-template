import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https:/edhelper.netlifyapp/?a=create-web3-dapp" target={"_blank"}>
				<img
					className={styles.alchemy_logo}
					src="/image.png"
				></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}

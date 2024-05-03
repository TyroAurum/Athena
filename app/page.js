"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { WebIrys } from "@irys/sdk";
import { ethers } from "ethers";
import TitleBar from "./component/titlebar";
import { Playfair_Display, Grandstander } from "next/font/google";
import { Steps } from "rsuite";
import ALLTIME_SVG from "../public/24by7.svg"
import CALENDAR_SVG from "../public/calendar.svg"
import SHARE_SVG from "../public/share.svg"
import RUPEE_SVG from "../public/rupee.svg"
import INSTA_SVG from "../public/instagram.svg"
import LINKEDIN_SVG from "../public/linkedin.svg"
import TWITTER_SVG from "../public/twitter.svg"
import FATHER_SVG from "../public/father.svg"

const playfair = Playfair_Display({
	weight: '400',
	subsets: ['latin'],
  })
const grandstander = Grandstander({
	weight: '400',
	subsets: ['latin'],
  })

const getWebIrys = async () => {
	// Ethers5 provider
	await window.ethereum.enable();
	const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const provider = new ethers.providers.InfuraProvider("mainnet", InfuraKey);
  
 
	const network = "mainnet";
	const token = "matic";
	// Devnet RPC URLs change often, use a recent one from https://chainlist.org
	const rpcUrl = "https://polygon-rpc.com/";
 
	// Create a wallet object
	const wallet = { rpcUrl: rpcUrl, name: "ethersv5", provider: provider };
	// Use the wallet object
	const webIrys = new WebIrys({ network, token, wallet });
	await webIrys.ready();
 
	return webIrys;
};

// const fundNode = async () => {
// 	const webIrys = await getWebIrys();
// 	try {
// 		const fundTx = await webIrys.fund(webIrys.utils.toAtomic(0.05));
// 		console.log(`Successfully funded ${webIrys.utils.fromAtomic(fundTx.quantity)} ${webIrys.token}`);
// 	} catch (e) {
// 		console.log("Error uploading data ", e);
// 	}
// };

// const uploadData = async () => {
// 	const webIrys = await getWebIrys();
// 	const dataToUpload = "GM world.";
// 	try {
// 		const receipt = await webIrys.upload(dataToUpload);
// 		console.log(`Data uploaded ==> https://gateway.irys.xyz/${receipt.id}`);
// 	} catch (e) {
// 		console.log("Error uploading data ", e);
// 	}
// };

// const uploadFile = async (event) => {
// 	const webIrys = await getWebIrys();
// 	const fileInput = await document.getElementById('fileUpload');
// 	const fileToUpload = await fileInput.files[0];

// 	console.log(fileInput.files[0]);
// 	// Your file
// 	const tags = [{ name: "application-id", value: "MyNFTDrop" }];
 
// 	try {
// 		const receipt = await webIrys.uploadFile(fileToUpload, { tags: tags });
// 		console.log(`File uploaded ==> https://gateway.irys.xyz/${receipt.id}`);
// 	} catch (e) {
// 		console.log("Error uploading file ", e);
// 	}
// };

const uploadFolder = async () => {
	const webIrys = await getWebIrys();
	const fileInput = await document.getElementById('fileUpload');
	const folderToUpload = await fileInput.files;

	console.log(folderToUpload);
 
	try {
		const receipt = await webIrys.uploadFolder(folderToUpload, 
			// { tags,}
		); //returns the manifest ID
 
		console.log(`Files uploaded. Manifest Id=${receipt.manifestId} `);
	} catch (e) {
		console.log("Error uploading file ", e);
	}
};


export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.description}>
		<TitleBar />
		<div className={styles.homepage}>
			<div className={styles.page}>
				<div className={styles.firstsection}>
					<div className={styles.text}>
						<h1 className={playfair.className}>ENDURE <br/>YOUR  <span className={styles.textspan}>MEMORIES</span> <br/>FOR  <span className={styles.textspan}>CENTURIES...</span></h1>
					</div>
					<div className={styles.homeanimation}>
						<Image src={FATHER_SVG} width={500} height={500} />
					</div>
				</div>
				<div className={styles.secondsection}>
					<div className={styles.properties}>
						<h2 className={grandstander.className}>WHY USE ATHENA ?</h2>
						<div className={styles.propsection}>
							<div className={styles.property}>
								<div className={styles.prop}>
									<Image src={ALLTIME_SVG} width={75} height={75} />
								</div>
								<h4>24/7 <br/>Uptime</h4>
							</div>
							<div className={styles.property}>
								<div className={styles.prop}>
									<Image src={CALENDAR_SVG} width={75} height={75} />
								</div>
								<h4>Lasts for <br/>200 Years</h4>
							</div>
							<div className={styles.property}>
								<div className={styles.prop}>
									<Image src={SHARE_SVG} width={70} height={70} />
								</div>
								<h4>Easy to<br/> Share</h4>
							</div>
							<div className={styles.property}>
								<div className={styles.prop}>
									<Image src={RUPEE_SVG} width={75} height={75} />
								</div>
								<h4>No<br/> Upcost</h4>
							</div>							
						</div>
					</div>
				</div>
				<div className={styles.thirdsection}>
					<h2 className={grandstander.className}>Save your docs in just 3 STEPS !</h2>
					<div className={styles.stepsegment}>
						<Steps current={1}>
							<Steps.Item title="Fund the node" />
							<Steps.Item title="Upload the Docs" />
							<Steps.Item title="Get the URL" />
							<Steps.Item title="Access from anywhere" />
						</Steps>
					</div>
				</div>
				<div className={styles.footersection}>
					<div className={styles.media}>
						<div className={styles.detail}>
							<h4>Athena</h4>
							<br/>
							<p>Save your memorable pics and important documents in a persistent storage with one time payment less than a cent per MB.</p>
						</div>
						<div className={styles.socialmedia}>
							<a href="https://www.linkedin.com/in/thanga-akilan/">
								<div className={styles.smicon}>
									<Image src={LINKEDIN_SVG} width={30} height={30} alt="LINKEDIN" />
									<p>@Thanga_Akilan</p>
								</div>
							</a>
							<a href="https://www.instagram.com/tyro_aurum/">
								<div className={styles.smicon}>
									<Image src={INSTA_SVG} width={30} height={30} alt="INSTA" />
									<p>@tyro_aurum</p>
								</div>
							</a>
							<a href="https://twitter.com/tyroaurum">
								<div className={styles.smicon}>
									<Image src={TWITTER_SVG} width={30} height={30} alt="TWITTER" />
									<p>@Thanga Akilan</p>
								</div>
							</a>
						</div>
					</div>
					<p>Copyright © 2024 All rights reserved  | Thanga Akilan</p>
				</div>
			</div>
		</div>
      </div>
    </main>
  );
}

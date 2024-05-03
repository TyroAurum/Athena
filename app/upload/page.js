"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { WebIrys } from "@irys/sdk";
import { ethers } from "ethers";
import TitleBar from "../component/titlebar";
import { Playfair } from "next/font/google";
import { useState } from "react";


const playfair = Playfair({
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

// const uploadFolder = async () => {
// 	const webIrys = await getWebIrys();
// 	const fileInput = await document.getElementById('fileUpload');
// 	const folderToUpload = await fileInput.files;

// 	console.log(folderToUpload);
 
// 	try {
// 		const receipt = await webIrys.uploadFolder(folderToUpload, 
// 			// { tags,}
// 		); //returns the manifest ID
// 		setUrl(`https://node1.irys.xyz/${receipt.manifestId}/[Filename with extension]`);
// 		console.log(`Files uploaded. Manifest Id=${receipt.manifestId} `);
// 	} catch (e) {
// 		console.log("Error uploading file ", e);
// 	}
// };


export default function Home() {
	const [url,setUrl] = useState("url will be displayed here");
	const uploadFolder = async () => {
		const webIrys = await getWebIrys();
		const fileInput = await document.getElementById('fileUpload');
		const folderToUpload = await fileInput.files;
	
		console.log(folderToUpload);
	 
		try {
			const receipt = await webIrys.uploadFolder(folderToUpload, 
				// { tags,}
			); //returns the manifest ID
			setUrl(`https://node1.irys.xyz/${receipt.manifestId}/[Filename_with_extension]`);
			console.log(`Files uploaded. Manifest Id=${receipt.manifestId} `);
		} catch (e) {
			console.log("Error uploading file ", e);
		}
	};

	const copy = async () => {
		await navigator.clipboard.writeText(url);
	  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
		<TitleBar />
		<div className={styles.uploadSection}>
			<div className={styles.mainSection}>
			<div className={styles.labelText}>
				<h2 className={playfair.className}>Select the Files to Upload</h2>
			</div>
			<div className={styles.fileSection}>
				
				<input type="file" name="file" id="fileUpload" multiple />
			</div>
			<div className={styles.controlSection}>
				<div>
					<button onClick={uploadFolder}>Upload</button>
				</div>
			</div>
			</div>
			<div className={styles.urlSection}>
				<h2 className={styles.url}>{url}</h2> 
				<button onClick={copy}>COPY</button>
			</div>
		</div>
      </div>
    </main>
  );
}

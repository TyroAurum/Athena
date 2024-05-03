"use client";

import styles from "./page.module.css";
import { WebIrys } from "@irys/sdk";
import { ethers } from "ethers";
import TitleBar from "../component/titlebar";
import { useState } from "react";



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






export default function Home() {
    const [amount,setAmount] = useState(0);


    const handleChange = (e)=>{
        setAmount(e.target.value);
    }

    const fundNode = async () => {
        const webIrys = await getWebIrys();
        try {
            const fundTx = await webIrys.fund(webIrys.utils.toAtomic(amount));
            console.log(`Successfully funded ${webIrys.utils.fromAtomic(fundTx.quantity)} ${webIrys.token}`);
        } catch (e) {
            console.log("Error uploading data ", e);
        }
    };

    return (
      <main className={styles.main}>
        <div className={styles.description}>
          <TitleBar />
          <div>
            <div className={styles.formInput}>
                <div>
                    <label className={styles.labelFund}>Fund Node</label>
                </div>
                <input type="number" name="fund" placeholder="Amount" onChange={handleChange} />
                <button onClick={fundNode}>Fund Node</button>
            <div className={styles.instructionSection}>
              <h2>Info</h2>
              <p>Funding the node acts like funding your wallet to be used anytime.</p>
              <p>The funds remain untill you use it.</p>
            </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  
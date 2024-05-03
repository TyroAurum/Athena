"use client";
import styles from './titlebar.module.css';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

const TitleBar = ()=> {

    return(
        <>
        <header className={styles.titleBar}>
            <div >
              <a href='/' className={styles.title}>
                
                ATHENA
              </a>
              <ul className={styles.menuOptions}>
                <li><a href='/upload'>UPLOAD</a></li>
                <li><a href='/fund'>FUND</a></li>
                <li><a href='/'>ABOUT</a></li>
                <li ><w3m-button /></li>
              </ul>
            </div>
          </header>
        </>
    )
}

export default TitleBar;
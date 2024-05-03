"use client";
import styles from './titlebar.module.css';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { Dropdown } from 'rsuite';




const TitleBar = ()=> {
  const [drop, setDrop] = useState();

  useEffect(()=>{
    if(window.innerWidth < 720)
      setDrop(true)
    else
      setDrop(false)
  })

    return(
        <>
        <header className={styles.titleBar}>
            <div >
              <a href='/' className={styles.title}>
                
                ATHENA
              </a>
              <ul className={styles.menuOptions}>
                {
                  drop ?
                  <Dropdown title="MENU">
                    <Dropdown.Item>UPLOAD</Dropdown.Item>
                    <Dropdown.Item>FUND</Dropdown.Item>
                    <Dropdown.Item>ABOUT</Dropdown.Item>
                  </Dropdown>
                  :
                  <>
                    <li><a href='/upload'>UPLOAD</a></li>
                    <li><a href='/fund'>FUND</a></li>
                    <li><a href='/'>ABOUT</a></li>
                  </>
                }
                <li className={styles.account}><w3m-button /></li>
              </ul>
            </div>
          </header>
        </>
    )
}

export default TitleBar;
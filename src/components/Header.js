'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.scss';

function Header() {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems((prev) => prev + 1);
  };
  return (
    <header className={styles.header}>
      <div className={styles.root_container}>
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={100}
            height={50}
          />
        </Link>
        <Link href="/">
          <Image
            src="/images/corb.png"
            alt="Logo"
            width={100}
            height={50}
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
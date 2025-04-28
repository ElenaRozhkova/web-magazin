'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.scss';
import { CardContext } from '../context/CardContext';
import { Modal } from './../components/Modal';
import Corb from './Corb';
import ModalIstGekauft from './ModalIstGekauft';

function Header() {
  const [cartItems, setCartItems] = useState(0);
  const [isModalOpenCorb, setIsModalOpenCorb] = useState(false);


  const addToCart = () => {
    setCartItems((prev) => prev + 1);
  };

  const handleInCorb = () => {
    setIsModalOpenCorb(true);
  };

  const handleKaufen = () => {
    setIsModalOpenCorb(false);
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
        <Link href="/" onClick={handleInCorb}>
          <Image
            src="/images/corb.svg"
            alt="Logo"
            width={100}
            height={50}
          />
        </Link>
      </div>
      {isModalOpenCorb && (
        <Modal onClose={() => setIsModalOpenCorb(false)}>
          <Corb onClose={() => setIsModalOpenCorb(false)} handleKaufen={handleKaufen} />
        </Modal>
      )}

    </header>
  );
}

export default Header;
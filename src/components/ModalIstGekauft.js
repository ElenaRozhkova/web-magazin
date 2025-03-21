import React from 'react';
import styles from '../styles/Card.module.scss';
import Image from 'next/image';

const ModalIstGekauft = ({ onClose }) => {
    return (
        <div className={styles.gekauft}>
            <Image
                src={'/images/ok.png'}
                width={256}
                height={256}
                alt={'Ok'}
            />

            <button className={styles.payButton} onClick={onClose}>Weiter einkaufen</button>

        </div>
    );
}

export default ModalIstGekauft;

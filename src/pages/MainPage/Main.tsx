import Image from 'next/image';
import styles from '@/styles/Home.module.css';

import Navbar from '@/components/MainComponents/Navbar/Navbar';
import Body from '@/components/MainComponents/Body/Body';

export default function Main() {
    return (
        <>
            <Navbar />
            <Body />
        </>
    )
}

import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/LoginComponents/Navbar/Navbar';
import Body from '@/components/LoginComponents/Body/Body';



export default function Login() {
    return (
        <>
            <Navbar />
            <Body />
        </>
    )
}
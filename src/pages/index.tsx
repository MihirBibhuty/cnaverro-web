import Image from 'next/image';
import Link from 'next/link';

import styles from '@/styles/Home.module.css';

const Home = () => {
  return (
    <>
      <p><Link href='/LoginPage/Login'>Login (Click here to go to the Login page)</Link></p>
      <p><Link href='/MainPage/Main'>Main (Click here to go to the Main page)</Link></p>
    </>
  )
}
export default Home;
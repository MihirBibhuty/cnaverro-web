import React, { useState } from 'react';
import styles from '@/styles/Home.module.css';

import Navbar from '@/components/MainComponents/Navbar/Navbar';
import Hero from '@/components/MainComponents/HeroSection/Hero';
import Body from '@/components/MainComponents/Body/Body';

export default function Main() {
    return (
        <>
            <Navbar />
            <Hero />
            <Body />
        </>
    )
}

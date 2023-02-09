import React, { useState } from 'react';
import styles from '@/styles/Home.module.css';

import Navbar from '@/components/MainComponents/Navbar/Navbar';
import HeroSeeMore from '@/components/MainComponents/HeroSection/HeroSeeMore';
import BodySeeMore from '@/components/MainComponents/Body/BodySeeMore';

export default function MainSeeMore() {
    return (
        <>
            <Navbar />
            <HeroSeeMore />
            <BodySeeMore />
        </>
    )
}

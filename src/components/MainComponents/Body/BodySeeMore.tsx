import React, { useState, useEffect } from "react";

import Image from 'next/image';
import Posts from '../Posts/Posts';

const arr = [0, 1];

export default function BodySeeMore() {
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    const handelInfiniteScroll = async () => {
        console.log("scrollHeight" + document.documentElement.scrollHeight);
        console.log("innerHeight" + window.innerHeight);
        console.log("scrollTop" + document.documentElement.scrollTop);
        try {
            if (
                window.innerHeight + document.documentElement.scrollTop + 2 >=
                document.documentElement.scrollHeight
            ) {
                setLoading(true);
                // setPage((prev) => prev + 1);
                arr.push(arr.length + 1);
                console.log(arr);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handelInfiniteScroll);
        return () => window.removeEventListener("scroll", handelInfiniteScroll);
    }, []);

    return (
        <div>
            {
                arr.map((e) => {
                    return <Posts />
                })
            }
        </div>
    )
}
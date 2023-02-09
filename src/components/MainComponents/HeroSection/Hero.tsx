import Image from 'next/image';
import styles from './Body.module.scss';

import { createStyles, Box, Input, Divider } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { Carousel, Embla } from '@mantine/carousel';

// import Curve from '/assets/Curve.png';


const useStyles = createStyles((theme) => ({
    container: {
        width: '100%',
        background: '#222222',
        paddingBottom: '2rem',
        borderBottom: '2px solid #222222',
        borderColor: '#222222',

        // borderBottomLeftRadius: '50%',
        // borderBottomRightRadius: '50%',
    },
    input: {
        width: '40%',
        margin: 'auto',
        marginBottom: '1.5rem',
    },
    divider: {
        marginTop: '1rem'
    },
    box: {
        width: '10rem',
    }
}));

export default function Hero() {
    const { classes, theme } = useStyles();

    return (
        <>
            <Box pt={80} className={classes.container}>
                <Input icon={<IconSearch />} className={classes.input} radius={'lg'} />
                <Carousel
                    height={200}
                    slideSize="17%"
                    slideGap="md"
                    breakpoints={[
                        { maxWidth: 'md', slideSize: '50%' },
                        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                    ]}
                    loop
                    align="start"
                >
                    <Carousel.Slide className={classes.box}><Image src='/assets/Rect.png' alt='img' width={200} height={200} /></Carousel.Slide>
                    <Carousel.Slide className={classes.box}><Image src='/assets/Rect.png' alt='img' width={200} height={200} /></Carousel.Slide>
                    <Carousel.Slide className={classes.box}><Image src='/assets/Rect.png' alt='img' width={200} height={200} /></Carousel.Slide>
                    <Carousel.Slide className={classes.box}><Image src='/assets/Rect.png' alt='img' width={200} height={200} /></Carousel.Slide>
                    <Carousel.Slide className={classes.box}><Image src='/assets/Rect.png' alt='img' width={200} height={200} /></Carousel.Slide>
                    <Carousel.Slide className={classes.box}><Image src='/assets/Rect.png' alt='img' width={200} height={200} /></Carousel.Slide>
                    <Carousel.Slide className={classes.box}><Image src='/assets/Rect.png' alt='img' width={200} height={200} /></Carousel.Slide>
                    <Carousel.Slide className={classes.box}><Image src='/assets/Rect.png' alt='img' width={200} height={200} /></Carousel.Slide>
                    <Carousel.Slide className={classes.box}><Image src='/assets/Rect.png' alt='img' width={200} height={200} /></Carousel.Slide>
                </Carousel>

                <Divider size="sm" className={classes.divider} />
            </Box>

            <img src='/assets/Curve.png' alt="curve" width='100%' />
        </>
    );
}
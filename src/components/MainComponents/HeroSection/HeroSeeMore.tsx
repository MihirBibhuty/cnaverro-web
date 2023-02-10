import Image from 'next/image';
import styles from './Body.module.scss';

import { createStyles, Box, Input, Divider, NativeSelect } from '@mantine/core';
import { IconSearch, IconChevronDown } from '@tabler/icons';
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

        [theme.fn.smallerThan('sm')]: {
            width: '80%',
        },
    },

    divider: {
        marginTop: '1rem'
    },

    img: {
        objectFit: 'contain',
        display: 'block',
        position: 'absolute',
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',

        [theme.fn.smallerThan('sm')]: {
            height: '100%',
            width: '90%',
            margin: 'auto',
        },
    },

    img2: {
        left: '1.2rem',
    },

    img3: {
        left: '2.4rem',
    },

    sortIcon: {
        width: '7rem',

        [theme.fn.smallerThan('sm')]: {
            width: '80%',
            margin: '1rem auto 0 auto'
        },
    },
}));

export default function HeroSeeMore() {
    const { classes, theme } = useStyles();

    return (
        <>
            <Box pt={80} className={classes.container}>
                <Input icon={<IconSearch />} className={classes.input} radius={'lg'} />
                <Carousel
                    height={200}
                    slideSize="18%"
                    slideGap="md"
                    breakpoints={[
                        { maxWidth: 'md', slideSize: '50%' },
                        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                    ]}
                    loop
                    align="start"
                >
                    <Carousel.Slide><img className={classes.img} src='/assets/CollectionImage2.png' /><img className={`${classes.img} ${classes.img2}`} src='/assets/CollectionImage3.png' /><img className={`${classes.img} ${classes.img3}`} src='/assets/CollectionImage1.png' /></Carousel.Slide>
                    <Carousel.Slide><img className={classes.img} src='/assets/CollectionImage2.png' /><img className={`${classes.img} ${classes.img2}`} src='/assets/CollectionImage3.png' /><img className={`${classes.img} ${classes.img3}`} src='/assets/CollectionImage1.png' /></Carousel.Slide>
                    <Carousel.Slide><img className={classes.img} src='/assets/CollectionImage2.png' /><img className={`${classes.img} ${classes.img2}`} src='/assets/CollectionImage3.png' /><img className={`${classes.img} ${classes.img3}`} src='/assets/CollectionImage1.png' /></Carousel.Slide>
                    <Carousel.Slide><img className={classes.img} src='/assets/CollectionImage2.png' /><img className={`${classes.img} ${classes.img2}`} src='/assets/CollectionImage3.png' /><img className={`${classes.img} ${classes.img3}`} src='/assets/CollectionImage1.png' /></Carousel.Slide>
                    <Carousel.Slide><img className={classes.img} src='/assets/CollectionImage2.png' /><img className={`${classes.img} ${classes.img2}`} src='/assets/CollectionImage3.png' /><img className={`${classes.img} ${classes.img3}`} src='/assets/CollectionImage1.png' /></Carousel.Slide>
                    <Carousel.Slide><img className={classes.img} src='/assets/CollectionImage2.png' /><img className={`${classes.img} ${classes.img2}`} src='/assets/CollectionImage3.png' /><img className={`${classes.img} ${classes.img3}`} src='/assets/CollectionImage1.png' /></Carousel.Slide>
                    <Carousel.Slide><img className={classes.img} src='/assets/CollectionImage2.png' /><img className={`${classes.img} ${classes.img2}`} src='/assets/CollectionImage3.png' /><img className={`${classes.img} ${classes.img3}`} src='/assets/CollectionImage1.png' /></Carousel.Slide>
                    <Carousel.Slide><img className={classes.img} src='/assets/CollectionImage2.png' /><img className={`${classes.img} ${classes.img2}`} src='/assets/CollectionImage3.png' /><img className={`${classes.img} ${classes.img3}`} src='/assets/CollectionImage1.png' /></Carousel.Slide>
                    <Carousel.Slide><img className={classes.img} src='/assets/CollectionImage2.png' /><img className={`${classes.img} ${classes.img2}`} src='/assets/CollectionImage3.png' /><img className={`${classes.img} ${classes.img3}`} src='/assets/CollectionImage1.png' /></Carousel.Slide>
                </Carousel>

                <Divider size="sm" className={classes.divider} />

                <NativeSelect
                    data={['Sort by', 'abx', 'xyz', '123']}
                    placeholder="Sort by"
                    className={classes.sortIcon}
                    mt={20}
                    ml={'4rem'}
                    variant='filled'
                    radius={'lg'}
                // rightSection={<IconChevronDown size={14} />}
                // rightSectionWidth={40}
                />
            </Box>

            <img src='/assets/Curve.png' alt="curve" width='100%' />
        </>
    );
}
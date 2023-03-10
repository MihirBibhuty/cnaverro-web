import { createStyles, Box, Input, Divider } from '@mantine/core';
import { IconSearch } from '@tabler/icons';
import { Carousel } from '@mantine/carousel';


const useStyles = createStyles((theme) => ({
    container: {
        width: '100%',
        background: '#222222',
        paddingBottom: '2rem',
        borderBottom: '2px solid #222222',
        borderColor: '#222222',
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

    imgWrap: {
        width: '100%',
        height: '100%',
        padding: '4px',
        background: 'linear-gradient(#2E9A39 0%, #00F0FF 96.88%, #029aa3 100%)',
        borderRadius: '15px',

        [theme.fn.smallerThan('sm')]: {
            width: '80%',
            margin: 'auto',
        },
    },

    box: {
        width: '100%',
        height: '100%',
        background: '#D9D9D9',
        borderRadius: '15px',
    },
}));

export default function Hero() {
    const { classes, theme } = useStyles();

    return (
        <div>
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
                    <Carousel.Slide><div className={classes.imgWrap}><div className={classes.box}></div></div></Carousel.Slide>
                    <Carousel.Slide><div className={classes.imgWrap}><div className={classes.box}></div></div></Carousel.Slide>
                    <Carousel.Slide><div className={classes.imgWrap}><div className={classes.box}></div></div></Carousel.Slide>
                    <Carousel.Slide><div className={classes.imgWrap}><div className={classes.box}></div></div></Carousel.Slide>
                    <Carousel.Slide><div className={classes.imgWrap}><div className={classes.box}></div></div></Carousel.Slide>
                    <Carousel.Slide><div className={classes.imgWrap}><div className={classes.box}></div></div></Carousel.Slide>
                    <Carousel.Slide><div className={classes.imgWrap}><div className={classes.box}></div></div></Carousel.Slide>
                    <Carousel.Slide><div className={classes.imgWrap}><div className={classes.box}></div></div></Carousel.Slide>
                </Carousel>

                <Divider size="sm" className={classes.divider} />
            </Box>

            <img src='/assets/Curve.png' alt="curve" width='100%' />
        </div>
    );
}
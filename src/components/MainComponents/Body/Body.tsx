import Image from 'next/image';
import Link from 'next/link';
import { createStyles, Button } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
    container: {
        margin: '-10% 4rem',
        marginBottom: '1rem',
    },

    wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1rem',
    },

    boxSq: {
        // width: '24%',
        width: '21vw',
        aspectRatio: '1/1',
        background: '#D9D9D9',
        borderRadius: '7px',
        marginBottom: '18px'
    },

    boxRect: {
        // width: '24%',
        width: '21vw',
        aspectRatio: '2/3',
        background: '#D9D9D9',
        borderRadius: '7px',
        marginBottom: '18px'
    },
}));


export default function Body() {
    const { classes, theme } = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className={classes.boxSq}></div>
                    <div className={classes.boxRect}></div>
                    <div className={classes.boxRect}></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className={classes.boxSq}></div>
                    <div className={classes.boxSq}></div>
                    <div className={classes.boxRect}></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className={classes.boxRect}></div>
                    <div className={classes.boxSq}></div>
                    <div className={classes.boxRect}></div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className={classes.boxSq}></div>
                    <div className={classes.boxSq}></div>
                    <div className={classes.boxRect}></div>
                </div>

            </div>

            <Link href='/MainPage/MainSeeMore' style={{ textDecoration: 'none' }}>
                <Button
                    variant="gradient" gradient={{ from: 'rgba(6, 6, 6, 0.32)', to: 'rgba(18, 15, 15, 0.6)' }}
                    rightIcon={<IconChevronRight size={18} />}
                    style={{ display: 'block', margin: '3rem auto' }}
                    sx={(theme) => ({
                        fontSize: '1.2rem',
                        borderRadius: '20px',
                        boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.25)'
                    })}
                >
                    See more
                </Button>
            </Link>
        </div>
    )
}
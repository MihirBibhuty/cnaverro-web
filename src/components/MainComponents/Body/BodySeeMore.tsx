import Image from 'next/image';
import { createStyles, Button, NativeSelect } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
    container: {
        margin: '-10% 4rem',
        marginBottom: '1rem',
    },

    sortIcon: {
        width: '8rem',
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


export default function BodySeeMore() {
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

            {/* <div className={classes.wrapper}>
                <div className={classes.boxRect}></div>
                <div className={classes.boxSq}></div>
                <div className={classes.boxSq}></div>
                <div className={classes.boxSq}></div>
            </div>

            <div className={classes.wrapper}>
                <div className={classes.boxRect}></div>
                <div className={classes.boxRect}></div>
                <div className={classes.boxRect}></div>
                <div className={classes.boxRect}></div>
            </div> */}
        </div>
    )
}
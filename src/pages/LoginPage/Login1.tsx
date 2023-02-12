import Image from 'next/image';
import Link from 'next/link';

import { Input, Button, PasswordInput, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan('lg')]: {
            display: 'none',
        },
    },
}));

export default function Login1() {
    const { classes, theme } = useStyles();

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <div style={{ backgroundImage: "linear-gradient(175.17deg, #0E0F11 -43.36%, rgba(29, 32, 50, 0) 156.23%), url('/assets/LoginBackground.png')", backgroundColor: "#222222", height: "100vh", width: "100vw", backgroundSize: "contain", filter: "blur(2px)", WebkitFilter: "blur(2px)" }}>
            </div>
            <div style={{ height: "100vh", width: "100vw", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: "10" }} >
                <div style={{ backgroundColor: '#222222', padding: "6rem 0", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderBottom: '4px solid #fff', textAlign: 'center' }}>
                    <Image className={classes.hiddenMobile} src="/assets/CanverroLogo.svg" alt="Canverro Logo" width={800} height={80} />
                    <img className={classes.hiddenDesktop} src="/assets/CanverroLogo.svg" alt="Canverro Logo" />
                </div>

                <Button.Group style={{ marginTop: "2rem", display: "flex", alignItems: "center", justifyContent: "center" }} orientation='vertical'>
                    {/* <div style={{ padding: "2rem ", background: "transparent", display: "flex", flexDirection: "column" }}> */}


                    <Input
                        radius='md'
                        sx={(theme) => ({
                            fontSize: '1rem',
                            width: '25%',
                            marginBottom: '0.8rem',
                            [theme.fn.smallerThan('sm')]: {
                                width: '80%',
                            },
                        })}
                        placeholder="Username" />

                    <Input
                        radius='md'
                        sx={(theme) => ({
                            fontSize: '1rem',
                            width: '25%',
                            marginBottom: '0.8rem',
                            [theme.fn.smallerThan('sm')]: {
                                width: '80%',
                            },
                        })}
                        placeholder="  Email ID" />

                    <PasswordInput
                        radius='md'
                        sx={(theme) => ({
                            fontSize: '1rem',
                            width: '25%',
                            marginBottom: '0.8rem',
                            [theme.fn.smallerThan('sm')]: {
                                width: '80%',
                            },
                        })}
                        placeholder="Password"
                    />

                    <PasswordInput
                        radius='md'
                        sx={(theme) => ({
                            fontSize: '1rem',
                            width: '25%',
                            marginBottom: '0.8rem',
                            [theme.fn.smallerThan('sm')]: {
                                width: '80%',
                            },
                        })}
                        placeholder="Confirmation Password" />

                    <Button
                        style={{ borderRadius: '10px' }}
                        sx={(theme) => ({
                            fontSize: '1rem',
                            width: "25%",
                            marginBottom: '0.8rem',
                            background: "linear-gradient(175.17deg, #0E0F11 -43.36%, rgba(29, 32, 50, 0) 156.23%)",
                            border: '1px solid #fff',
                            '&:hover': {
                                backgroundColor: '#000'
                            },
                            [theme.fn.smallerThan('sm')]: {
                                width: '80%',
                            },
                        })}
                    >
                        Sign Up
                    </Button>




                    {/* </div> */}
                </Button.Group>



            </div>

        </div>
    );
}
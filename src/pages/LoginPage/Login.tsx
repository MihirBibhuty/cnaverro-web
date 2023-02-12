import Image from 'next/image';

import Link from 'next/link';
import { Button, Text, createStyles } from '@mantine/core';
import { IconBrandGoogle } from '@tabler/icons';


const useStyles = createStyles((theme) => ({
    heading: {
        fontSize: '4rem',
        fontWeight: 700,
        color: 'white',

        [theme.fn.smallerThan('sm')]: {
            fontSize: "2.5rem",
        },
    },

    text: {
        fontSize: "1.5rem",
        fontWeight: 500,

        [theme.fn.smallerThan('sm')]: {
            fontSize: "1rem",
        },
    },

    prompt: {
        marginTop: '0.8rem',
        color: '#fff',
        fontSize: '10px',
        fontWeight: 600,
    },
}));

export default function Login() {
    const { classes, theme } = useStyles();

    return (
        <div>
            <div style={{ backgroundImage: "linear-gradient(175.17deg, #0E0F11 -43.36%, rgba(29, 32, 50, 0) 156.23%), url('/assets/LoginBackground.png')", backgroundColor: "#222222", height: "100vh", width: "100vw", backgroundSize: "contain", filter: "blur(2px)", WebkitFilter: "blur(2px)" }}>
            </div>
            <div style={{ height: "100vh", width: "100vw", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: "10" }} >
                <div style={{ backgroundColor: '#222222', padding: "1rem 0 4rem 0", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%", borderBottom: '4px solid #fff', textAlign: 'center' }}>
                    <Image src="/assets/CanverroLogo.svg" alt="Canverro Logo" width={200} height={60} style={{ marginBottom: '1rem' }} />
                    <Text className={classes.heading}>
                        Wear Your Style.<p className={classes.text}>The easiest way to<br />customize your merchandise.</p>
                    </Text>
                </div>


                <Button.Group style={{ marginTop: "3rem", textAlign: 'center' }} orientation='vertical'>

                    <Link href='/LoginPage/Login1' style={{ width: '100%' }}>
                        <Button
                            style={{ borderRadius: '10px' }}
                            sx={(theme) => ({
                                fontSize: '1rem',
                                width: "20%",
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
                    </Link>

                    <br />

                    <Link href='/LoginPage/Login2' style={{ width: '100%' }}>
                        <Button
                            style={{ borderRadius: '10px' }}
                            sx={(theme) => ({
                                fontSize: '1rem',
                                width: "20%",
                                background: "linear-gradient(175.17deg, #0E0F11 -43.36%, rgba(29, 32, 50, 0) 156.23%)",
                                backgroundColor: 'transparent',
                                border: '1px solid #fff',
                                '&:hover': {
                                    backgroundColor: '#000'
                                },
                                [theme.fn.smallerThan('sm')]: {
                                    width: '80%',
                                },
                            })}
                        >
                            Login
                        </Button>
                    </Link>

                    <br />

                    <Link href='/LoginPage/Login1' style={{ width: '100%' }}>
                        <Button
                            style={{ borderRadius: '10px' }}
                            rightIcon={<IconBrandGoogle size={20} style={{ border: '1px solid #fff', borderRadius: '50px' }} />}
                            sx={(theme) => ({
                                fontSize: '1rem',
                                width: "20%",
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
                            Login with Google
                        </Button>
                    </Link>

                </Button.Group>


            </div>

        </div >
    );
}
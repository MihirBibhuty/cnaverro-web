import Navbar from '@/components/LoginComponents/Navbar/Navbar';
import Link from 'next/link';
import { Input, Button, Text } from '@mantine/core';

export default function Login1() {
    return (
        <div>
            <Navbar />
            <div style={{ background: " #222222 ", height: "100vh", width: "100vw", backgroundSize: "cover" }} >
            </div>
            <div style={{ height: "100vh", width: "100vw", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: "10" }} >
                <div style={{ backgroundColor: 'white', padding: "4rem 0", borderBottomLeftRadius: "35%", borderBottomRightRadius: "35%" }}>
                    <Text style={{ fontSize: "4rem", color: "#000" }}>
                        <center> Wear Your Style.<p style={{ fontSize: "2rem" }}>The easiest way to customize<br /> your merchandise.</p></center>
                    </Text>
                </div>

                <Button.Group style={{ marginTop: "2rem", display: "flex", alignItems: "center", justifyContent: "center" }} orientation='vertical'>
                    <div style={{ padding: "2rem ", background: "linear-gradient(175.17deg, #0E0F11 -43.36%, rgba(29, 32, 50, 0) 156.23%)", display: "flex", flexDirection: "column" }}>


                        <Input
                            sx={(theme) => ({
                                fontSize: '1rem',
                                width: '100%',
                            })}
                            placeholder="Name" />
                        <br />
                        <Input
                            sx={(theme) => ({
                                fontSize: '1rem',
                                width: '100%',
                            })}
                            placeholder="  Email ID" />

                        <br />

                        <Link href='/LoginPage/Login2'>
                            <Button

                                sx={(theme) => ({
                                    fontSize: '1rem',
                                    width: '100%',
                                    backgroundColor: 'White',
                                    border: '1px solid #fff',
                                    borderRadius: '0px',
                                    '&:hover': {
                                        backgroundColor: '#808080'
                                    },
                                })}
                                variant="white" color="dark"
                            >
                                Next
                            </Button>
                        </Link>



                    </div>
                </Button.Group>



            </div>

        </div>
    );
}
import Navbar from '@/components/LoginComponents/Navbar/Navbar';
import Link from 'next/link';
import { Input, Button, Text } from '@mantine/core';

export default function Login2() {
    return (
        <div>
            <Navbar />
            <div style={{ background: " #222222 ", height: "100vh", width: "100vw", backgroundSize: "cover" }}>
            </div>
            <div style={{ height: "100vh", width: "100vw", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: "10" }} >
                <div style={{ backgroundColor: 'white', padding: "4rem 0", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%" }}>
                    <Text style={{ fontSize: "4rem", color: "#000" }}>
                        <center> Wear Your Style.<p style={{ fontSize: "2rem" }}>The easiest way to customize<br /> your merchandise.</p></center>
                    </Text>
                </div>

                <Button.Group style={{ marginTop: "2rem", display: "flex", alignItems: "center", justifyContent: "center" }} orientation='vertical'>
                    <div style={{ padding: "2rem ", background: "linear-gradient(175.17deg, #0E0F11 -43.36%, rgba(29, 32, 50, 0) 156.23%)", display: "flex", flexDirection: "column" }}>


                        <Input
                            sx={(theme) => ({
                                fontSize: '1rem',
                                border: '1px solid #fff',
                                width: '100%',
                                '&:hover': {
                                    backgroundColor: '#808080'
                                },
                            })}


                            placeholder="Password" />

                        <br />
                        <Input
                            sx={(theme) => ({
                                fontSize: '1rem',
                                border: '1px solid #fff',
                                width: '100%',
                                '&:hover': {
                                    backgroundColor: '#808080'
                                },
                            })}


                            placeholder="Password confirmation" />

                        <br />


                        <Button style={{ border: '1px solid #fff', borderRadius: '0px' }}

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




                    </div>
                </Button.Group>

            </div>

        </div>
    );
}
import Navbar from '@/components/LoginComponents/Navbar/Navbar';
import Link from 'next/link';
import { Input, Button, Text } from '@mantine/core';
import { IconBrandGoogle } from '@tabler/icons';


export default function Body() {
    return (
        <div>

            <div style={{ backgroundImage: "url('/assets/LoginBackground.png')", height: "100vh", width: "100vw", backgroundSize: "cover", filter: "blur(8px)", WebkitFilter: "blur(8px)" }} >
            </div>
            <div style={{ height: "100vh", width: "100vw", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: "10" }} >
                <div style={{ backgroundColor: 'white', padding: "5rem 0", borderBottomLeftRadius: "35%", borderBottomRightRadius: "35%" }}>
                    <Text style={{ fontSize: "4rem", color: "#000" }}>
                        <center> Wear Your Style.<p style={{ fontSize: "2rem" }}>The easiest way to customize<br /> your merchandise.</p></center>
                    </Text>
                </div>

                <Button.Group style={{ marginTop: "2rem", display: "flex", alignItems: "center", justifyContent: "center" }} orientation='vertical'>
                    <div style={{ padding: "2rem ", background: "linear-gradient(175.17deg, #0E0F11 -43.36%, rgba(29, 32, 50, 0) 156.23%)", display: "flex", flexDirection: "column" }}>


                        <Link href='/LoginPage/Login1' >
                            <Button
                                sx={(theme) => ({

                                    fontSize: '1rem',
                                    width: "100%",
                                    border: '1px solid #fff',
                                    '&:hover': {
                                        backgroundColor: '#808080'
                                    },
                                })}
                                variant="white" color="dark"
                            >
                                Sign up
                            </Button>
                        </Link>
                        <br />


                        <Button
                            rightIcon={<IconBrandGoogle size={20} style={{ border: '1px solid #fff', borderRadius: '50px' }} />}
                            sx={(theme) => ({
                                fontSize: '1rem',
                                backgroundColor: 'White',
                                border: '1px solid #fff',
                                borderRadius: '0px',
                                '&:hover': {
                                    backgroundColor: '#808080'
                                },
                            })}
                            variant="white" color="dark"
                        >
                            Login with google
                        </Button>




                    </div>
                </Button.Group>



            </div>

        </div>
    );
}
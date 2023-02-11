import Navbar from '@/components/LoginComponents/Navbar/Navbar';
import Link from 'next/link';
import { Input, Button, Text , PasswordInput} from '@mantine/core';

export default function Login2() {
    return (
        <div>
            <Navbar/>
            
            <div style={{ backgroundImage: "url('/assets/LoginBackground.png')", height: "100vh", width: "100vw", backgroundSize: "cover", filter: "blur(8px)", WebkitFilter: "blur(8px)" }} >
            </div>
            <div style={{ height: "100vh", width: "100vw", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: "10" }} >
                <div style={{ backgroundColor: '#222222', padding: "4rem 0", borderBottomLeftRadius: "35%", borderBottomRightRadius: "35%",border: '1px solid #fff' }}>
                    <Text style={{ fontSize: "4rem", color: "white" }}>
                        <center> Wear Your Style.<p style={{ fontSize: "2rem" }}>The easiest way to customize<br /> your merchandise.</p></center>
                    </Text>
                </div>

                <Button.Group style={{ marginTop: "2rem", display: "flex", alignItems: "center", justifyContent: "center" }} orientation='vertical'>
                    <div style={{ padding: "2rem ",  backgroundColor: 'transparent',display: "flex", flexDirection: "column" }}>

                    <Input
                            sx={(theme) => ({
                                fontSize: '1rem',
                                width: '100%',
                            })}
                            placeholder="Username" /><br/>

                        <PasswordInput
                            sx={(theme) => ({
                                fontSize: '1rem',
                                width: '100%',
                            })}


                            placeholder="Password"
                            
                             />

                        <br />
                       

                        <Button
                           
                            sx={(theme) => ({
                                fontSize: '1rem',
                                width:"100%",
                                background: "linear-gradient(175.17deg, #0E0F11 -43.36%, rgba(29, 32, 50, 0) 156.23%)",
                                border: '1px solid #fff',
                                
                                '&:hover': {
                                    backgroundColor: '#000'
                                },
                            })}
                        >
                            Login
                        </Button>




                    </div>
                </Button.Group>
                
            </div>

        </div>
    );
}
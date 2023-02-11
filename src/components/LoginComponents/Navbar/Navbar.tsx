import { Avatar, Indicator, createStyles, Header, HoverCard, Group, Button, UnstyledButton, Text, SimpleGrid, ThemeIcon, Anchor, Divider, Center, Box, Burger, Drawer, Collapse, ScrollArea, } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPlus, IconBell } from '@tabler/icons';
import Image from 'next/image';
const useStyles = createStyles((theme) => ({
                nav: {
                    position: 'fixed',
                    borderColor: '#222222',
                    boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.05)'
                },
            
                link: {
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%',
                    paddingLeft: theme.spacing.md,
                    paddingRight: theme.spacing.md,
                    textDecoration: 'none',
                    color: '#fff',
                    fontWeight: 500,
                    fontSize: theme.fontSizes.md,
            
                    [theme.fn.smallerThan('sm')]: {
                        height: 42,
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                    },
            
                    ...theme.fn.hover({
                        backgroundColor: theme.colors.dark[4],
                    }),
                },
            
            
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
            
                drawer: {
                    background: 'linear-gradient(91deg, #222222 37.92%, #2F2D2D 89.07%, #1E1E1E 99.47%)',
                }
            }));
            
            
export default function Navbar() {
                const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
                const { classes, theme } = useStyles();
            
                return (
                    <Box>
                        <Header className={classes.nav} height={60} px="md" bg={'linear-gradient(91deg, #222222 37.92%, #2F2D2D 89.07%, #1E1E1E 99.47%)' } >
                            <Group position="center" sx={{ height: '100%' }}>
                                
                                <Image src="/assets/CanverroLogo.svg" alt="Canverro Logo" width={400} height={45} />
            
                               
            
                                <Group className={classes.hiddenMobile}>
                                   
                                </Group>
            
                                <Burger color='#fff' opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
                            </Group>
                        </Header>
            
            
                        
                    </Box >
                );
            }
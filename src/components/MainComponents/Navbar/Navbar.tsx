import { Avatar, Indicator, createStyles, Header, HoverCard, Group, Button, UnstyledButton, Text, SimpleGrid, ThemeIcon, Anchor, Divider, Center, Box, Burger, Drawer, Collapse, ScrollArea, } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPlus, IconBell } from '@tabler/icons';

import Image from 'next/image';


const useStyles = createStyles((theme) => ({
    nav: {
        position: 'fixed',
        borderColor: '#222222',
        boxShadow: '0px 8px 8px rgba(0, 0, 0, 0.25)'
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
            <Header className={classes.nav} height={60} px="md" bg={'linear-gradient(91deg, #222222 37.92%, #2F2D2D 89.07%, #1E1E1E 99.47%)'}>
                <Group position="apart" sx={{ height: '100%' }}>

                    <Image src="/assets/CanverroLogo.svg" alt="Canverro Logo" width={200} height={45} />

                    <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                        <a href="#" className={classes.link}>
                            Home
                        </a>
                        <Divider size="sm" orientation="vertical" style={{ height: '40%', margin: 'auto 2rem' }} />
                        <a href="#" className={classes.link}>
                            Shop
                        </a>
                        <Divider size="sm" orientation="vertical" style={{ height: '40%', margin: 'auto 2rem' }} />
                        <a href="#" className={classes.link}>
                            Chat
                        </a>
                    </Group>

                    <Group className={classes.hiddenMobile}>
                        <Button
                            rightIcon={<IconPlus size={20} style={{ background: '#000', border: '1px solid #fff', borderRadius: '50px' }} />}
                            sx={(theme) => ({
                                fontSize: '1rem',
                                backgroundColor: 'transparent',
                                border: '1px solid #fff',
                                borderRadius: '50px',
                                '&:hover': {
                                    backgroundColor: '#000'
                                },
                            })}
                        >
                            Create
                        </Button>
                        <Indicator color={'#EB5757'} dot inline offset={4}><IconBell size={30} color={'#fff'} /></Indicator>
                        <Avatar src='/assets/ProfileIcon.svg' alt="it's me" />
                    </Group>

                    <Burger color='#fff' opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
                </Group>
            </Header>


            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title={<Image src="/assets/CanverroLogo.svg" alt="Canverro Logo" width={150} height={45} />}
                className={`${classes.hiddenDesktop} ${classes.drawer}`}
                zIndex={1000000}
            >
                <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <a href="#" className={classes.link}>
                        Home
                    </a>
                    <a href="#" className={classes.link}>
                        Shop
                    </a>
                    <a href="#" className={classes.link}>
                        Chat
                    </a>

                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                    <Group position="center" grow pb="xl" px="md">
                        <Button
                            rightIcon={<IconPlus size={20} style={{ background: '#000', border: '1px solid #fff', borderRadius: '50px' }} />}
                            sx={(theme) => ({
                                fontSize: '1rem',
                                backgroundColor: 'transparent',
                                border: '1px solid #fff',
                                borderRadius: '15px',
                                '&:hover': {
                                    backgroundColor: '#000'
                                },
                            })}
                        >
                            Create
                        </Button>
                    </Group>

                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Indicator color={'#EB5757'} dot inline offset={4}><IconBell size={35} color={'#fff'} /></Indicator>
                        <Avatar src='/assets/ProfileIcon.svg' alt="it's me" />
                    </div>
                </ScrollArea>
            </Drawer>
        </Box >
    );
}
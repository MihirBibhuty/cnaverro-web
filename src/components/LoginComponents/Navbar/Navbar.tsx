import { Avatar, Indicator, createStyles, Header, HoverCard, Group, Button, UnstyledButton, Text, SimpleGrid, ThemeIcon, Anchor, Divider, Center, Box, Burger, Drawer, Collapse, ScrollArea, } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPlus, IconBell, IconCode, IconBook, IconChartPie3, IconFingerprint, IconCoin, IconChevronDown } from '@tabler/icons';

import Image from 'next/image';


const useStyles = createStyles((theme) => ({
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

    subLink: {
        width: '100%',
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        borderRadius: theme.radius.md,

        ...theme.fn.hover({
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        }),

        '&:active': theme.activeStyles,
    },
    dropdownFooter: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        margin: -theme.spacing.md,
        marginTop: theme.spacing.sm,
        padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
        paddingBottom: theme.spacing.xl,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
            }`,
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
}));


export default function Navbar() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const { classes, theme } = useStyles();
    return (
        <Box pb={0}>
            <Header height={60} px="md" bg={'linear-gradient(91deg, #222222 37.92%, #423f3f 89.07%, #1E1E1E 99.47%)'}>
                <Group position="apart" sx={{ height: '100%' }}>

                    <Image src="/assets/CanverroLogo.svg" alt="Canverro Logo" width={140} height={60} />

                    <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                       
                    </Group>
                    <Group className={classes.hiddenMobile}>
                        <Button
                            
                            sx={(theme) => ({
                                fontSize: '1rem',
                                backgroundColor: 'transparent',
                                border: '1px solid #fff',
                                
                                '&:hover': {
                                    backgroundColor: '#000'
                                },
                            })}
                        >
                             Log in
                        </Button>
                        
                    </Group>

                    <Burger color='#fff' opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
                </Group>
            </Header>


           
        </Box >
    );
}

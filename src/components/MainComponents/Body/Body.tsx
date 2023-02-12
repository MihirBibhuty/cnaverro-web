import Link from 'next/link';
import { Button } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons';
import Posts from '../Posts/Posts';


export default function Body() {
    return (
        <div>
            <Posts />

            <Link href='/MainPage/MainSeeMore' style={{ textDecoration: 'none' }}>
                <Button
                    variant="gradient" gradient={{ from: 'rgba(6, 6, 6, 0.32)', to: 'rgba(18, 15, 15, 0.6)' }}
                    rightIcon={<IconChevronRight size={18} />}
                    style={{ display: 'block', margin: '4rem auto' }}
                    sx={(theme) => ({
                        fontSize: '1.2rem',
                        borderRadius: '20px',
                        boxShadow: '0px 4px 5px rgba(0, 0, 0, 0.25)'
                    })}
                >
                    See more
                </Button>
            </Link>
        </div>
    )
}
import Link from 'next/link';

export default function Navbar() {
    return (
        <header className='flex h-[4rem] w-full items-center justify-center bg-black p-2 px-28 text-white'>
            <p className='mr-auto text-2xl font-bold'>
                <Link href='/'>FutureBridge</Link>
            </p>
            <ul className='flex items-center justify-center font-semibold'>
                <li className='ml-4'>
                    <Link href='/about'>About</Link>
                </li>

                <li className='ml-4'>
                    <Link href='/about'>Services</Link>
                </li>
                <li className='ml-4'>
                    <Link href='/about'>Industries</Link>
                </li>
                <li className='ml-4'>
                    <Link href='/about'>Perspectives</Link>
                </li>
                <li className='ml-4'>
                    <Link href='/about'>Contact Us</Link>
                </li>
                <li className='group ml-4'>
                    <Link href='/about'>News & Events</Link>
                    <div className='absolute hidden w-full bg-black p-2 text-white group-hover:block'>
                        <Link href='/news' className='p-2 hover:text-red-700'>
                            News
                        </Link>
                        <br />
                        <Link href='/events' className='p-2 hover:text-red-700'>
                            Events
                        </Link>
                    </div>
                </li>
            </ul>
        </header>
    );
}

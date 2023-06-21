import Navbar from './navbar';
import Image from 'next/image';

export default function Layout({
    children,
}: {
    children: JSX.Element | JSX.Element[];
}) {
    return (
        <div>
            <Navbar />
            <div className='flex h-[20rem] w-full flex-col justify-center p-10 px-4 text-white lg:h-[35rem] lg:px-28'>
                <Image
                    src='/hero.jpg'
                    alt='Background Image'
                    width={600}
                    height={1200}
                    className='absolute left-0 right-0 -z-10 h-[20rem] w-full bg-slate-300 object-cover lg:h-[35rem]'
                />
                <h1 className='text-7xl font-bold text-black lg:text-8xl'>
                    We are FutureBridge
                </h1>
                <p className='mt-1 text-lg text-slate-800'>
                    The future is here. The opportunities are Limitless
                </p>
                <p className='mt-4 w-fit border border-red-700 p-2 text-red-700'>
                    READ MORE
                </p>
            </div>

            <main className='px-4 lg:px-28'>{children}</main>
        </div>
    );
}

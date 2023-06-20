import Navbar from './navbar';

export default function Layout({
    children,
}: {
    children: JSX.Element | JSX.Element[];
}) {
    return (
        <div>
            <Navbar />
            <div className='flex h-[35rem] w-full flex-col justify-center bg-slate-400 p-10 px-28 text-white'>
                <h1 className='text-8xl font-bold'>We are FutureBridge</h1>
                <p className='mt-1 text-lg'>
                    The future is here. The opportunities are Limitless
                </p>
                <p className='mt-4 w-fit border border-red-700 p-2 text-red-700'>
                    READ MORE
                </p>
            </div>

            <main className='px-28'>{children}</main>
        </div>
    );
}

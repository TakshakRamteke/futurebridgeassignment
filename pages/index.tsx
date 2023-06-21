import Layout from '@/components/layout';
import Link from 'next/link';

export default function Home() {
    return (
        <Layout>
            <div className='mt-5'>
                <div className='flex text-lg font-medium'>
                    <p className='border-b-2 border-red-500 text-red-500'>
                        Overview
                    </p>
                    <p className='border-b-2 border-slate-400 pl-4 text-slate-400 hover:border-red-400'>
                        <Link href='/news'>FutureBridge in News</Link>
                    </p>
                </div>
            </div>

            <div className='mt-5 flex'>
                <div className='w-fit'>
                    <div className='flex'>
                        <div>
                            <h2 className='text-xl'>Media Contact</h2>
                            <ul className='mt-4'>
                                <li className='flex items-center'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='currentColor'
                                        className='mr-3 h-6 w-6'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                                        />
                                    </svg>
                                    <p>Parakh Dogra</p>
                                </li>

                                <li className='mt-2 flex items-center'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='currentColor'
                                        className='mr-3 h-6 w-6'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
                                        />
                                    </svg>
                                    <p>parakh.dogra@futurebridge.com</p>
                                </li>

                                <li className='mt-2 flex items-center'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='currentColor'
                                        className='mr-3 h-6 w-6'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                                        />
                                    </svg>
                                    <p>+44 203 691 9079</p>
                                </li>
                            </ul>
                        </div>

                        <div className='ml-8'>
                            <h2 className='text-xl'>Media</h2>
                            <ul className='mt-4'>
                                <li className='flex items-center'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='currentColor'
                                        className='mr-3 h-6 w-6'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
                                        />
                                    </svg>
                                    <p>FutureBridge Introduction</p>

                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='red'
                                        className='ml-8 h-6 w-6'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25'
                                        />
                                    </svg>
                                </li>

                                <li className='mt-2 flex items-center'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='currentColor'
                                        className='mr-3 h-6 w-6'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12'
                                        />
                                    </svg>
                                    <p>FutureBridge Logo</p>

                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='red'
                                        className='ml-auto h-6 w-6'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25'
                                        />
                                    </svg>
                                </li>

                                <li className='mt-2 flex items-center'>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='currentColor'
                                        className='mr-3 h-6 w-6'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                                        />
                                    </svg>
                                    <p>Press Photos</p>

                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        strokeWidth='1.5'
                                        stroke='red'
                                        className='ml-auto h-6 w-6'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            d='M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25'
                                        />
                                    </svg>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <p className='text-lg text-slate-600'>
                            Subscribe to{' '}
                            <span className='font-semibold text-slate-800'>
                                FutureBridge
                            </span>{' '}
                            press release
                        </p>
                        <form className='mt-4'>
                            <input
                                type='email'
                                placeholder='Enter your e-mail ID'
                                className='border border-r-0 p-2 focus:outline-none'
                                required
                            />
                            <input
                                type='submit'
                                value='Subscribe'
                                className='border border-red-700 bg-red-600 p-2 text-white hover:bg-red-700'
                            />
                        </form>
                    </div>
                </div>

                <div className='ml-auto h-[28rem] w-1/3 overflow-scroll'>
                    <a
                        className='twitter-timeline'
                        href='https://twitter.com/TheFutureBridge?ref_src=twsrc%5Etfw'
                    >
                        Tweets by TheFutureBridge
                    </a>{' '}
                    <script
                        async
                        src='https://platform.twitter.com/widgets.js'
                    ></script>
                </div>
            </div>
        </Layout>
    );
}

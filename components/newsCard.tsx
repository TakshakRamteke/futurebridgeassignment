import { useEffect, useRef } from 'react';
import moment from 'moment';

export default function NewsCard({ news }: { news: Post }) {
    const htmlRef = useRef(null);
    useEffect(() => {
        //@ts-ignore
        htmlRef.current.innerHTML = news.excerpt;
    });

    return (
        <>
            <div className='mb-4 flex border shadow-md'>
                <div className='w-[13%]'>
                    <p className='clip-right w-36 bg-slate-700 p-1 px-4 text-left font-semibold text-white'>
                        Press Release
                    </p>
                    <p className='w-fit p-2 px-4 text-xl font-semibold text-gray-600'>
                        {moment(news.date).format('D MMMM YYYY')}
                    </p>
                    <p className='w-fit p-1 px-4 pb-2 text-2xl font-bold text-slate-800'>
                        F&N World <br />
                        Food & Nutrition
                    </p>
                </div>

                <div className='w-full py-4'>
                    <p className='text-3xl font-bold'>{news.title}</p>
                    <p className='mt-4' ref={htmlRef} />
                    <div className='flex items-center'>
                        <div className='ml-auto mr-4 border border-red-500 p-2'>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={2}
                                stroke='currentColor'
                                className='h-6 w-6'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
                                />
                            </svg>
                        </div>
                        <p className='mr-8 border border-red-500 p-2 font-medium'>
                            Read more
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

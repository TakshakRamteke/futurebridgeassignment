import { useEffect, useRef } from 'react';
import Image from 'next/image';
import moment from 'moment';

export default function EventCard({ event }: { event: Post }) {
    const htmlRef = useRef(null);

    useEffect(() => {
        //@ts-ignore
        htmlRef.current.innerHTML = event.excerpt;
    });

    return (
        <div key={event.slug} className='mt-5 flex w-full p-4'>
            <div className='w-1/6 rounded-l-md bg-gray-200 p-4 text-right text-8xl text-gray-500'>
                <p className='text-4xl'>Upcoming on</p>
                {moment(event.date).format('D MMMM YYYY')}
            </div>
            <div className='flex w-full rounded-md bg-white shadow-[0_4px_40px_8px_rgba(0,0,0,0.2)]'>
                <div className='w-full p-4'>
                    <p className='text-4xl font-bold'>{event.title}</p>

                    <div className='mt-4 flex items-center'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='mr-2 h-9 w-9'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z'
                            />
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                            />
                        </svg>
                        <p className='text-lg font-semibold'>
                            Webinar at your desk
                        </p>
                    </div>

                    <div
                        className='mt-4 pr-4 text-justify text-lg font-medium text-gray-600'
                        ref={htmlRef}
                    />
                </div>

                <div className='ml-auto rounded-r-md'>
                    <Image
                        src={event.featuredImage.node.mediaItemUrl}
                        height={400}
                        width={400}
                        alt={event.title}
                        className='h-full rounded-r-md object-cover'
                    />
                </div>
            </div>
        </div>
    );
}

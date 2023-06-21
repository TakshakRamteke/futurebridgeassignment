import EventCard from '@/components/eventcards';
import Layout from '@/components/layout';

export async function getStaticProps() {
    const query = `{
        posts(where: {categoryName: "Events"}) {
            nodes {
                title
                featuredImage {
                    node {
                        mediaItemUrl
                    }
                }
            content
            date
            slug
            excerpt
        }
    }
}`;

    const response = await fetch('https://takshakramteke.tech/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    }).then((res) => res.json());

    const events = response.data.posts.nodes;

    return {
        props: {
            events,
        },
        revalidate: 1,
    };
}

export default function EventsPage({ events }: { events: Post[] }) {
    const months = [
        'january',
        'feburary',
        'march',
        'april',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december',
    ];

    return (
        <Layout>
            <div className='mt-5'>
                <div className='flex text-lg font-medium'>
                    <h2 className='text-3xl font-semibold'>Events</h2>
                </div>

                <div className='mt-4 flex'>
                    <div>
                        <ul className='cursor-pointer'>
                            <details className='rounded border-0 p-2' open>
                                <summary className='flex pb-2 text-2xl text-black'>
                                    2020
                                </summary>
                                {months.map((month) => (
                                    <p
                                        className={`${
                                            month == 'june'
                                                ? 'border-l-red-500 text-red-500'
                                                : 'text-slate-500'
                                        } cursor-pointer border-l-2 p-1 pl-3 text-xs capitalize hover:border-l-red-500`}
                                        key={month}
                                    >
                                        {month}
                                    </p>
                                ))}
                            </details>

                            <details className='rounded border-0 p-2 pt-1'>
                                <summary className='flex text-2xl text-black'>
                                    2019
                                </summary>
                            </details>

                            <details className='rounded border-0 p-2 pt-1'>
                                <summary className='flex text-2xl text-black'>
                                    2018
                                </summary>
                            </details>

                            <details className='rounded border-0 p-2 pt-1'>
                                <summary className='flex text-2xl text-black'>
                                    2017
                                </summary>
                            </details>
                        </ul>
                    </div>

                    <div className='p-1'>
                        <div className='flex flex-wrap items-center justify-center lg:flex-nowrap'>
                            <p className='w-fit p-2 text-xl text-slate-500'>
                                Don&apos;t miss our events. Subscribe to{' '}
                                <span className='font-semibold text-black'>
                                    get alerts
                                </span>
                            </p>

                            <form className='ml-auto'>
                                <input
                                    type='email'
                                    placeholder='Enter your e-mail ID'
                                    className='border border-r-0 p-1 focus:outline-none'
                                    required
                                />
                                <input
                                    type='submit'
                                    value='Subscribe'
                                    className='border border-red-700 bg-red-600 p-1 text-white hover:bg-red-700'
                                />
                            </form>
                        </div>

                        {events.map((event) => (
                            <EventCard event={event} key={event.slug} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

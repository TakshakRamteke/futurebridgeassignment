import Layout from '@/components/layout';
import NewsCard from '@/components/newsCard';
import moment from 'moment';
import Link from 'next/link';

export async function getStaticProps() {
    const query = `{
        posts(where: {categoryName: "News"}) {
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

    const news = response.data.posts.nodes;

    return {
        props: {
            news,
        },
    };
}

export default function NewsPage({ news }: { news: Post[] }) {
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
                    <p className='border-b-2 border-slate-400 text-slate-400 hover:border-red-400'>
                        <Link href='/'>Overview</Link>
                    </p>
                    <p className='border-b-2 border-red-500 pl-4 text-red-500'>
                        FutureBridge in News
                    </p>
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

                    <div className='ml-4 w-full p-1'>
                        {news.map((news) => (
                            <NewsCard news={news} key={news.slug} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

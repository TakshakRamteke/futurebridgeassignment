import Layout from '@/components/layout';

export default function NewsPage() {
    return (
        <Layout>
            <div className='mt-5'>
                <div className='flex text-lg font-medium'>
                    <p className='border-b-2 border-slate-400 text-slate-400'>
                        Overview
                    </p>
                    <p className='border-b-2 border-red-500 pl-4 text-red-500'>
                        FutureBridge in News
                    </p>
                </div>
            </div>
        </Layout>
    );
}

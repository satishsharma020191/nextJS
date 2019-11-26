import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function Post() {
    const router = useRouter();
    console.log('printing routes::', router.query);
    return (<Layout>
        <h1>{router.query.id}</h1>
        <p>this is the blog post content</p>
    </Layout>);
}
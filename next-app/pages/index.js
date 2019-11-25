import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = (props)=>{
return (<li><Link href={`/post?title=${props.title}`}><a>{props.title}</a></Link></li>);
}

export default function Blog(){
  return (<Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js"/>
      <PostLink title="learn Next.js"/>
      <PostLink title="deploy Next.js"/>
    </ul>
  </Layout>);
}

import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => {
  // console.log('print props::', props);
  const PostLink = ({ sw }) => (
    <li key={sw.id}>
      <Link href="/p/[id]" as={`/p/${sw.id}`}>
        <a>{sw.name}</a>
      </Link>

      <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
    </li>
  );

  return (<Layout>
    <h1>Tv shows</h1>
    <ul>
      {props.shows.map((sw) => {
        return <PostLink sw={sw} />
      })}

    </ul>

    <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }
      `}</style>


  </Layout>)
}

Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    shows: data.map(entry => entry.show)
  };
}
export default Index;
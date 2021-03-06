import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { connect } from 'react-redux';
import { fetchBatmanStart } from '../lib/actions';

const Index = props => {
  const { store } = props;
  console.log('print props::', props);
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
      {props.showList && props.showList.batmanSeries && props.showList.batmanSeries.map((sw, i) => {
        return <PostLink key={i} sw={sw.show} />
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

Index.getInitialProps = async function ({ isServer, store }) {
  await store.execSagaTasks(isServer, dispatch => {
    dispatch(fetchBatmanStart());
  });
  // console.log('printing server state::', store.getState());
  return {};
}


const mapStateToProps = state => ({
  showList: state.batmanData,
});

const mapDispatchToProps = dispatch => ({
  // fetchApod: date => dispatch(fetchBatmanStart(date)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Index);
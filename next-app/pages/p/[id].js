import Layout from '../../components/Layout';
//import Markdown from 'react-markdown';
import { connect } from 'react-redux';
import fetch from 'isomorphic-unfetch';
import { fetchBatmanSeriesDescStart } from '../../lib/reducers/batman';

const Post = props => {
    // console.log('post props', props);
    return (<Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
        <img src={props.show.image.medium} />
    </Layout>);
}

// Post.getInitialProps = async function (context) {
//     const { id } = context.query;
//     const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//     const show = await res.json();

//     console.log('printing context id', show.name);
//     return { show };
// }

Post.getInitialProps = async function ({ isServer, store, query }) {
    await store.execSagaTasks(isServer, dispatch => {
        console.log('printing query id', query.id);
        dispatch(fetchBatmanSeriesDescStart(query.id));
    });
    // // console.log('printing server state::', store.getState());
    // return {};

    const { id } = query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log('printing context id', show.name);
    return { show };
}


const mapStateToProps = state => ({
    batmanSeries: state.batmanShows.data,
});

const mapDispatchToProps = dispatch => ({
    // fetchApod: date => dispatch(fetchBatmanStart(date)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Post);

// export default Post;
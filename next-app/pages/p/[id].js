import Layout from '../../components/Layout';
import { useEffect } from 'react';
//import Markdown from 'react-markdown';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { bindActionCreators } from "redux";
import { fetchBatmanSeriesDescStart } from '../../lib/actions';

const Post = props => {
    // const router = useRouter();

    // useEffect(() => {
    //     console.log('id::', router.query.id);
    //     props.fetchBatmanSeriesDescStart(router.query.id);
    // }, []);
    console.log('post props', props);
    return (<Layout>
        <h1>{props.show && props.show.name}</h1>
        <p>{props.show && props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
        <img src={props.show && props.show.image.medium} />
    </Layout>);
}

// Post.getInitialProps = async function (context) {
//     const { id } = context.query;
//     const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//     const show = await res.json();

//     console.log('printing context id', show);
//     return { show };
// }

Post.getInitialProps = async function ({ isServer, store, query }) {
    await store.execSagaTasks(isServer, dispatch => {
        console.log('printing query id', query.id);
        dispatch(fetchBatmanSeriesDescStart(query.id));
    });
    console.log('printing server state::', store.getState(), query.id);
    return { isServer };
}

//     // const { id } = query;
//     // const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//     // const show = await res.json();

//     // console.log('printing context id', show.name);
//     // return {};
// }

// Post.getInitialProps = async function ({ isServer, store, query }) {
//     await store.execSagaTasks(isServer, dispatch => {
//         dispatch(fetchBatmanSeriesDescStart());
//     });
//     // console.log('printing server state::', store.getState());
//     return {};
// }


const mapStateToProps = state => ({
    show: state.batmanData.showData,
});

const mapDispatchToProps = dispatch => ({
});

//const mapDispatchToProps = dispatch => bindActionCreators({ fetchBatmanSeriesDescStart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Post);

// export default Post;
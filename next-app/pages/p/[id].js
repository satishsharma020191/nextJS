import Layout from '../../components/Layout';
import { connect } from 'react-redux';
import { fetchBatmanSeriesDescStart } from '../../lib/actions';

const Post = props => {

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

const mapStateToProps = state => ({
    show: state.batmanData.showData,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);

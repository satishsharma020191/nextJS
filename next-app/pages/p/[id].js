import Layout from '../../components/Layout';
//import Markdown from 'react-markdown';
import fetch from 'isomorphic-unfetch';

const Post = props => {
    // console.log('post props', props);
    return (<Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
        <img src={props.show.image.medium} />
    </Layout>);
}

Post.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    console.log('printing context id', show.name);
    return { show };
}

export default Post;
import Header from '../components/header';

const HeadStyle = {
    margin:20,
    padding:20,
    border: `1px solid #DDD`
}

const Layout = (props) =>{
    return(<div style={HeadStyle}>
        <Header/>
        {props.children}
    </div>);
}

export default Layout;
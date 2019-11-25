import Link from 'next/link';
 const MarginHeader = {
     marginRight: 10
 }

const Header = ()=>{
    return (<div>
        <Link href="/"><a style={MarginHeader} title="Home page">Home</a></Link>
        <Link href="/about"><a style={MarginHeader} title="About page">About</a></Link>
    </div>);
}

export default Header;
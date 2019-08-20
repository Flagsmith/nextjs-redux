import Link from 'next/link';
import withAuth from '../common/providers/withAuth';

const linkStyle = {
    marginRight: 15,
};

function Header(props) {
    return (
        <div>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/about">
                <a style={linkStyle}>About</a>
            </Link>
            <Link href="/privacy">
                <a style={linkStyle}>Privacy</a>
            </Link>
            <Link href="/markup">
                <a style={linkStyle}>Markup</a>
            </Link>
            {props.user ? (
                <a onClick={props.logout} style={linkStyle}>Logout</a>
            ) : (
                <Link href="/login">
                    <a style={linkStyle}>Login</a>
                </Link>
            )}
        </div>
    );
}
export default withAuth(Header);

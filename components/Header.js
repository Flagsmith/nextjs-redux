import Link from 'next/link';
import withAuth from '../common/providers/withAuth';

function Header(props) {
    return (
        <nav className="navbar navbar-fixed-top navbar-light">
            <ul className="nav justify-content-start">
                <li className="nav-item">
                    <Link href="/" className="nav-link">
                        <a className="nav-link">Home</a>
                    </Link>
                </li>
                {/* Examples */}
                <React.Fragment>
                    <li className="nav-item">
                        <Link href="/about">
                            <a className="nav-link">About</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/privacy">
                            <a className="nav-link">About</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/privacy">
                            <a className="nav-link">Privacy</a>
                        </Link>
                    </li>
                </React.Fragment>
                {/* End of Examples */}
            </ul>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    {props.user ? (
                        <a className="nav-link" onClick={props.logout}>Logout</a>
                    ) : (
                        <Link href="/login">
                            <a className="nav-link">Login</a>
                        </Link>
                    )}
                </li>
            </ul>
        </nav>
    );
}
export default withAuth(Header);

import Link from 'next/link';
import withAuth from '../common/providers/withAuth';

function Header(props) {
    return (
        <nav className="navbar navbar-fixed-top navbar-light">
            <ul className="nav justify-content-start">
                <li className="nav-item">
                    <Link href="/">
                        <a className="nav-link">Home</a>
                    </Link>
                </li>
                {/* Examples */}
                <React.Fragment>
                    <li className="nav-item">
                        <Link href="/markup">
                            <a className="nav-link">Markup</a>
                        </Link>
                    </li>
                </React.Fragment>
                {/* End of Examples */}
            </ul>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    {props.user ? (
                        <a role="button" className="nav-link" onClick={props.logout}>Logout</a>
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
Header.propTypes = {
    user: propTypes.object,
    logout: propTypes.func.isRequired,
};
export default withAuth(Header);

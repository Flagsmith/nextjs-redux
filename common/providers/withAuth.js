import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../app-actions';

const withAuth = (WrappedComponent) => {
    return connect(
        mapStateToProps,
        mapDispatchToProps,
    )(WrappedComponent);
};

export default (withAuth);

const mapDispatchToProps = dispatch => bindActionCreators({
    login: AppActions.login,
    logout: AppActions.logout,
    register: AppActions.register,
}, dispatch);

function mapStateToProps(state) {
    const { user, userLoading, userSaving, userError } = state;
    return { user, userLoading, userSaving, userError };
}

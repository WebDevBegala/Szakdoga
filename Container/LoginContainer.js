import { connect } from 'react-redux';
import Login from '../Components/Login';
import { login} from "../Actions/UserActions"
import NavigationService from "../NavigationService";

function mapStateToProps(state, props) {
    return {
        logined: state.User.onLogined
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        login: (data) => dispatch(login(data)),
        teszt: (text) => dispatch(other(text)),
        goToPage: (page) => NavigationService.navigate(page)
    };
}

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default LoginContainer;
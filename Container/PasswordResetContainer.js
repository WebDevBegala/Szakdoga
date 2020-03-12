import { connect } from 'react-redux';
import PasswordReset from '../Components/PasswordReset';
import NavigationService from "../NavigationService";
import { passwordChange } from "../Actions/UserActions";


function mapStateToProps(state, props) {
    return {
        userData: state.User,
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
       goToPage:(page)=>NavigationService.navigate(page),
        passwordChange:(data) => dispatch(passwordChange(data))

    };
}

const PasswordResetContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PasswordReset);

export default PasswordResetContainer;
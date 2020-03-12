import { connect } from 'react-redux';
import Account from '../Components/Account';
import { reset } from "../Actions/UserActions"
import NavigationService from "../NavigationService";

function mapStateToProps(state, props) {
    return {

    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        goToPage: (page) => NavigationService.navigate(page),
        resetStore: () => dispatch(reset())
    };
}

const AccountContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Account);

export default AccountContainer;
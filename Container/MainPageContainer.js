import { connect } from 'react-redux';
import MainPage from '../Components/MainPage';
import { searchUser,friendRequest,getFriends } from "../Actions/UserActions"

function mapStateToProps(state, props) {
   // console.log("Main page:",state.User);

    return {
        userData: state.User,
       
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        searchUser: (text) => dispatch(searchUser(text)),
        friendRequest:(data) => dispatch(friendRequest(data)),
        getFriends:(data) => dispatch(getFriends(data))
    };
}

const MainPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);

export default MainPageContainer;
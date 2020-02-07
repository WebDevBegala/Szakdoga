import { connect } from 'react-redux';
import MainPage from '../Components/MainPage';
import { searchUser,friendRequest } from "../reducer"

function mapStateToProps(state, props) {
    console.log("Main page:",state.User);

    return {
        userData: state.User,
        newFriends: ["Sanyi","Pista"]
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        searchUser: (text) => dispatch(searchUser(text)),
        friendRequest:(data) => dispatch(friendRequest(data))
    };
}

const MainPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage);

export default MainPageContainer;
import { connect } from 'react-redux';
import FriendRow from '../Components/SubComponents/FriendRow';
import NavigationService from "../NavigationService";

function mapStateToProps(state, props) {
    console.log(state.Message);
    return {
        messages: state.Message.messages
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
   
    };
}

const FriendRowContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FriendRow);

export default FriendRowContainer;
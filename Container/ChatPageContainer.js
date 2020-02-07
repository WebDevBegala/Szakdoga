import { connect } from 'react-redux';
import ChatPage from '../Components/ChatPage';
import NavigationService from "../NavigationService";
import { sendMessage } from "../reducer";

function mapStateToProps(state, props) {
  console.log(state.Message.messages.length);
    
    return {
        messages: state.Message.messages
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        goToPage: (page) => NavigationService.navigate(page),
        sendMessage:(data) => dispatch(sendMessage(data))
    };
}

const ChatPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatPage);

export default ChatPageContainer;
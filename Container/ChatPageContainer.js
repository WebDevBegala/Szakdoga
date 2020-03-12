import { connect } from 'react-redux';
import ChatPage from '../Components/ChatPage';
import NavigationService from "../NavigationService";
import { sendMessage,getMessages } from "../Actions/MessageActions";

function mapStateToProps(state, props) {
  //console.log("Kibaszott props: ",state.Message.messages);
    
    return {
        userData: state.User,
        messages: state.Message.messages,
      
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        goToPage: (page) => NavigationService.navigate(page),
        sendMessage:(data) => dispatch(sendMessage(data)),
        getMessages:(data) => dispatch(getMessages(data))
    };
}

const ChatPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatPage);

export default ChatPageContainer;
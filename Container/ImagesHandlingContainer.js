import { connect } from 'react-redux';
import ImagesHandling from '../Components/ImagesHandling';
import NavigationService from "../NavigationService";
import { uploadImage } from "../Actions/UserActions";

function mapStateToProps(state, props) {
  //console.log("Kibaszott props: ",state.Message.messages);
    
    return {
        userData: state.User,
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        goToPage: (page) => NavigationService.navigate(page),
        sendPictures:(img) => dispatch(uploadImage(img))
    };
}

const ImagesHandlingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ImagesHandling);

export default ImagesHandlingContainer;
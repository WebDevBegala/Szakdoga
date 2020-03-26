import { connect } from 'react-redux';
import User from '../Components/User';
import NavigationService from "../NavigationService";
import { uploadImage,getImages } from "../Actions/UserActions";

function mapStateToProps(state, props) {
  
    
    return {
       
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        goToPage: (page) => NavigationService.navigate(page),
       
    };
}

const UserContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(User);

export default UserContainer;
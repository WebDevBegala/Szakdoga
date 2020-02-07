import { connect } from 'react-redux';
import Registration from '../Components/Registration';
import {registration} from "../reducer"
import NavigationService from "../NavigationService";

function mapStateToProps(state, props) {
    return {
      
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
      registration:(data)=>dispatch(registration(data)),
      goToPage: (page) => NavigationService.navigate(page)
    };
}

const RegistrationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Registration);

export default RegistrationContainer;
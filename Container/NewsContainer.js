import { connect } from 'react-redux';
import News from '../Components/News';
import { searchSchedule } from "../Actions/UserActions";

function mapStateToProps(state, props) {
   //console.log("State ", state.User)
    return {
        userData: state.User,
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
     searchSchedule:(data)=>dispatch(searchSchedule(data))
    };
}

const NewsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(News);

export default NewsContainer;
import { connect } from 'react-redux';
import News from '../Components/News';


function mapStateToProps(state, props) {
   
    return {
      
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
     
    };
}

const NewsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(News);

export default NewsContainer;
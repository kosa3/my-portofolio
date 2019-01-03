import {connect} from 'react-redux';
import Contact from '../../components/Main/Contact';
import {sendContactForm} from '../../actions/action';

// Component へ渡すパラメータ値
const mapStateToProps = (state) => {
    return {
        email: state.email,
        contact: state.contact,
        loadingFlag: state.loadingFlag
    }
}

// Component へ渡す Action
const mapDispatchToProps = (dispatch) => {
    return {
        sendContactForm: (...args) => dispatch(sendContactForm(...args))
    }
}

// Component へパラメータを渡す
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contact)

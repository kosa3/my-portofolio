import {connect} from 'react-redux';
import Nav from '../components/Nav';

// Component へ渡すパラメータ値
const mapStateToProps = (state) => {
    return {
        uri: state.uri,
    }
}

// Component へパラメータを渡す
export default connect(
    mapStateToProps
)(Nav)

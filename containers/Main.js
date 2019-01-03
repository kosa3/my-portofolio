import {connect} from 'react-redux';
import Main from '../components/Main';

// Component へ渡すパラメータ値
const mapStateToProps = (state) => {
    return {
        uri: state.uri,
    }
}

// Component へパラメータを渡す
export default connect(
    mapStateToProps
)(Main)

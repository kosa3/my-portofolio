import {connect} from 'react-redux';
import App from '../components/App';

// Component へ渡すパラメータ値
const mapStateToProps = (state) => {
    return {
        uri: state.uri,
    }
}

// Component へパラメータを渡す
export default connect(
    mapStateToProps
)(App)

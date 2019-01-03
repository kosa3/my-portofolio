import firebase from '../firebase';

const initialState = {
    uri: '/',
    email: '',
    contact: '',
    loadingFlag: false,
}

export default function reducer(state = initialState, action) {
    if (action.type !== "SEND_FORM") {
        state.uri = action.type;
        return {
            uri: state.uri,
            loadingFlag: state.loadingFlag
        }
    }

    if (action.type === "SEND_FORM") {
        firebase.post('/orders.json', action.payload)
            .then(response => {
                console.log(response, "成功");
                action.payload.loadingFlag = false;
            })
            .catch(error => console.log(error));
        return {
            ...state,
            value: action.payload
        }
    }

    return state;
}

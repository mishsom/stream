import _ from 'lodash';
export default (state = {}, action) => {
    switch(action.type) {
        case "CREATE_STREAMS":
            return {...state, [action.payload.id]: action.payload};

        case "FETCH_STREAMS":
            return {...state, ..._.mapKeys(action.payload, 'id')};

        case "FETCH_STREAM_DETAIL":
            return {...state, [action.payload.id]: action.payload};

        case "EDIT_STREAM":
            return {...state, [action.payload.id]: action.payload};

        case "DELETE_STREAMS":
            return _.omit(state, action.payload);

        default: return state;

    }
}
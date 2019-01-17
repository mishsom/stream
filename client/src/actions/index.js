import stream from '../apis/streams';
import history from '../history';

let signInAction = (userId) => {
    return {
        type: "SIGN_IN",
        payload: userId
    }
};

let sigOutAction = () => {
    return {
        type: "SIGN_OUT"
    }
};

let createStreams = formValues => async dispatch => {
   const response = await stream.post('/streams', formValues);
   dispatch({
       type: "CREATE_STREAMS",
       payload: response.data
    });
    history.push("/");
};

let fetchStreams = () => async dispatch => {
    const response = await stream.get('/streams');
    dispatch({
        type: "FETCH_STREAMS",
        payload: response.data
    })
};

let fetchStreamDetail = id => async dispatch => {
    console.log("I got called fetchStreamDetail");
    const resp = await stream.get(`/streams/${id}`);
    console.log("I got called fetchStreamDetail "  + JSON.stringify(resp));
    dispatch({
        type: "FETCH_STREAM_DETAIL",
        payload: resp.data
    })
};

let editStream = (id, data) => async dispatch => {
    const resp = await stream.put(`/streams/${id}`, data);
    dispatch({
        type: "EDIT_STREAM",
        payload: resp.data
    });
    history.push("/");
};

let deleteStream = id => async dispatch => {
    await stream.delete(`/streams/${id}`);
    dispatch({
        type: "DELETE_STREAMS",
        payload: id
    });
    history.push("/");
};

export {
    signInAction,
    sigOutAction,
    createStreams,
    fetchStreamDetail,
    fetchStreams,
    editStream,
    deleteStream
}
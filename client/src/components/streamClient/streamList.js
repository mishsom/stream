import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchStreams } from '../../actions';
import history from '../../history';

class StreamList extends React.Component {
    componentWillMount() {
        this.props.fetchStreams();
    }
    editPost = (stream) => {
        history.push(`/streams/edit/${stream.id}`)
    };
    deletePost = (stream) => {
        history.push(`/streams/delete/${stream.id}`)
    };
    getEditDeleteButton = (stream) => {
        if(this.props.userId === stream.userId) {
            return (
                <div>
                    <button onClick={() => {this.editPost(stream)}}>edit</button>
                    <button onClick={() => {this.deletePost(stream)}}>delete</button>
                </div>
            )
        }
        return null;
    };
    renderList = () => {
        if(this.props.streams){
            return this.props.streams.map(stream => {
                return (
                    <div key={stream.id}>
                        <Link to={`/streams/${stream.id}`}><p>{stream.title}</p></Link>
                        <p>{stream.description}</p>
                        <div>{this.getEditDeleteButton(stream)}</div>
                    </div>
                );
            })
        }
        return null;
    };
    createPostButton = () => {
        if(this.props.isSignedIn){
            return(
                <div>
                    <Link to={"/streams/new"}>Create Post</Link>
                </div>
            )
        }
        return null;
    };
    render() {
        return (
            <div>
                {this.renderList()}
                {this.createPostButton()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        streams: Object.keys(state.streams).map(key => state.streams[key]),
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
    }
};
export default connect(mapStateToProps, {
    fetchStreams
})(StreamList);
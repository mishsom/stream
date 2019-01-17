import React from 'react';
import { connect } from 'react-redux';
import { createStreams } from '../../actions'
import FormCompoent from './formComponent';


class StreamCreate extends React.Component {
    onSubmit = (formProps) => {
        if(this.props.isSignedIn){
            this.props.createStreams({...formProps, 'userId':this.props.userId})
        } else {
            this.props.createStreams(formProps);
        }
    };
    render() {
        return (
            <div>
                <h3>Create Streams</h3>
                <FormCompoent onSubmit={this.onSubmit} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
    };
};
export default connect(mapStateToProps, {
    createStreams
})(StreamCreate);
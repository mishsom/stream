import React from 'react';
import _ from 'lodash';
import FormComponent from "./formComponent";
import { editStream, fetchStreamDetail } from '../../actions';
import { connect } from 'react-redux';


class StreamEdit extends React.Component {
    componentDidMount() {
        console.log("I got called componentDidMount");
        this.props.fetchStreamDetail(this.props.id);
        console.log("I got called componentDidMount after");
    }

    onSubmit = (formProps) => {
        if(this.props.isSignedIn){
            this.props.editStream(this.props.id, {...formProps, 'userId':this.props.userId})
        } else {
            this.props.createStreams(formProps);
        }
    };
    render() {
        console.log(_.pick(this.props.stream, ['title', 'description']));
        return (
            <div>
                <h3>Edit Streams</h3>
                <FormComponent onSubmit={this.onSubmit} initialValues={_.pick(this.props.stream, ['title', 'description'])} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        stream: state.streams ? state.streams[ownProps.match.params.id] : {},
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId,
        id: ownProps.match.params.id
    };
};


export default connect(mapStateToProps, {editStream, fetchStreamDetail})(StreamEdit);
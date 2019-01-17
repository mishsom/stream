import React from 'react';
import Modal from '../modal';
import { deleteStream, fetchStreamDetail } from '../../actions';
import { connect } from 'react-redux';
import history from "../../history";

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStreamDetail(this.props.id);
    }

    cancelAction = () => {
        history.push('/')
    };
    render() {
        if(!this.props.stream) {
            return <div> Loading ...</div>;
        }
        let {title, description} = this.props.stream;
        return (
            <div>
                <h1>delete {title}</h1>
                <Modal
                    actionHandler={() => this.props.deleteStream(this.props.match.params.id)}
                    cancelAction={this.cancelAction}
                    title={title}
                    body={`are you sure you want to delete ${description}`}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return{
        id: ownProps.match.params.id,
        stream: state.streams ? state.streams[ownProps.match.params.id] : null
    };
};

export default connect(mapStateToProps, {deleteStream, fetchStreamDetail})(StreamDelete);
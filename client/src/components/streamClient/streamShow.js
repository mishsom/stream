import React from 'react';
import {connect} from 'react-redux';
import {fetchStreamDetail} from '../../actions';
import flv from 'flv.js';

class StreamShow extends React.Component {
    constructor(props) {
        super(props);
        this.vedioRef = React.createRef();
    }
    componentDidMount() {
        this.props.fetchStreamDetail(this.props.id);
        this.setupVideoPlayer();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.setupVideoPlayer();
    }

    setupVideoPlayer() {
        if(!this.vedioRef.current || !this.props.stream) {
            return;
        }
        const flvPlayer = flv.createPlayer({
            url: `http://192.168.0.2:8000/live/${this.props.id}.flv`,
            type: 'flv'
        });
        flvPlayer.attachMediaElement(this.vedioRef.current);
        flvPlayer.load();
    }
    render() {
        if(!this.props.stream) {
            return <div> Loading ... </div>;
        }
        const {title, description} = this.props.stream;
        return (
            <div>
                <h1>{title}</h1>
                <h5>{description}</h5>
                <video ref={this.vedioRef} style={{width:'100%'}} controls />
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return{
        stream: state.streams ? state.streams[ownProps.match.params.id] : null,
        id: ownProps.match.params.id
    }
};

export default connect(mapStateToProps, {fetchStreamDetail})(StreamShow);
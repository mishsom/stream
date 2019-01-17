import React from 'react';
import { connect } from 'react-redux';
import { sigOutAction, signInAction} from "../actions";


const clientId = "510777548861-jdbectjtps61bne9mp75kfvcebp25t6j.apps.googleusercontent.com";

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: `${clientId}`,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChanged(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChanged);
            });
        });
    }

    onAuthChanged = (isSignedIn) => {
        if(isSignedIn) {
            this.props.signInAction(this.auth.currentUser.get().getId());
        } else
        {
            this.props.sigOutAction();
        }
    };

    getLoginSignOutButton() {
        let button = null;
        if(this.props.isSignedIn === null) {
            button = <div>Loading ...</div>
        } else if (this.props.isSignedIn) {
            button = <div onClick={this.doSignOut}>log out </div>
        } else {
            button = <div onClick={this.doSignIn}>login</div>
        }
        return button;
    }

    doSignOut = () => {
        this.auth.signOut();
    };

    doSignIn = () => {
        this.auth.signIn();
    };

    render() {
        return (
          <div>{this.getLoginSignOutButton()}</div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
};

export default connect(mapStateToProps, {
    signInAction, sigOutAction
})(GoogleAuth);
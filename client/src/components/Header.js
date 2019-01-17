import React from 'react';
import GoogleAuth from "./GoogleAuth";

class Header extends React.Component {

    render() {
        return (
            <div>
                <GoogleAuth/>
            </div>
        );
    }
}

export default Header;
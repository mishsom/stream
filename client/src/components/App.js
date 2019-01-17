import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import Header from "./Header";
import StreamCreate from "./streamClient/streamCreate";
import StreamEdit from "./streamClient/streamEdit";
import StreamDelete from "./streamClient/streamDelete";
import StreamShow from "./streamClient/streamShow";
import StreamList from "./streamClient/streamList";
import history from '../history'

const App = () => {
    return (
        <Router history={history}>
            <>
                <Header/>
                <Switch>
                    <Route path={"/"} exact component={StreamList} />
                    <Route path={"/streams/new"} exact component={StreamCreate} />
                    <Route path={"/streams/edit/:id"} exact component={StreamEdit} />
                    <Route path={"/streams/delete/:id"} exact component={StreamDelete} />
                    <Route path={"/streams/:id"} exact component={StreamShow} />
                </Switch>
            </>
        </Router>
    )
};


export default App;
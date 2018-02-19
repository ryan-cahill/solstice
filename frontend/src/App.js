import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar'
import ToolBar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import RouteController from "./controllers/RouteController";

class App extends Component {
    render() {
        return (
            <div className="App" style={{paddingTop: 56, textAlign: 'center'}}>
                <AppBar className="AppBar-Bar" title="Solstice" style={{position: 'fixed', top: 0, backgroundColor: '#e7a340'}}>
                    <ToolBar>
                        <Typography variant="title" color="inherit">
                            Solstice
                        </Typography>
                    </ToolBar>
                </AppBar>
                <div style={{margin: '0 auto', width: '50%'}}>
                    <RouteController/>
                </div>
            </div>
        );
    }
}

export default App;

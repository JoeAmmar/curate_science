import React from 'react';
import PropTypes from 'prop-types';

// Routing & routes
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import TopBar from './components/TopBar.jsx';
import Footer from './components/Footer.jsx';

import Splash from './pages/Splash.jsx';
import About from './pages/About.jsx';
import FAQ from './pages/FAQ.jsx';
import Newsletter from './pages/Newsletter.jsx';
import Help from './pages/Help.jsx';
import Privacy from './pages/Privacy.jsx';
import Recent from './pages/Recent.jsx';
import Replications from './pages/Replications.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import AuthorPage from './pages/AuthorPage.jsx';
import AuthorPageCreator from './pages/AuthorPageCreator.jsx';
import AdminManage from './pages/AdminManage.jsx';
import AdminInvite from './pages/AdminInvite.jsx';
import SearchResults from './pages/SearchResults.jsx';

// UI components
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, IconButton, Button, Grid, Menu, MenuItem} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';

// Theme
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import 'typeface-roboto'

import C from './constants/constants';

// CS components
import ArticleLI from './components/ArticleLI.jsx';

import css from './App.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#793DF7' },
    secondary: { main: '#8F0DCC' },
    bg: '#FFF'
  },
  typography: {
    useNextVariants: true,
    fontSize: 12,
    h2: {
        marginTop: 10,
        marginBottom: 10
    },
    h3: {
        marginTop: 20,
    },
    h4: {
        textTransform: 'uppercase',
        fontSize: 18,
        color: 'gray'
    }
  },
  overrides: {
    MuiButton: {
        containedPrimary: {
            background: 'linear-gradient(45deg, #4F0FF8 30%, #793DF7 90%)',
        },
        sizeLarge: {
           padding: 20
        }
    },
    MuiTooltip: {
        tooltip: {
            fontSize: 13
        }
    }
  }
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { classes, user_session } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        return (
        	<Router forceRefresh={true} basename="/app">
                <div style={{backgroundColor: theme.palette.bg}}>
                    <MuiThemeProvider theme={theme}>
                        <TopBar user_session={user_session} />
                        <div className="AppContent">
                            <Switch>
                                <Route
                                    exact path="/"
                                    component={() => <Recent user_session={user_session} />}
                                />
                                <Route
                                    exact path="/recent"
                                    component={() => <Recent user_session={user_session} />}
                                />
                                <Route exact path="/replications" component={Replications} />
                                <Route path="/about" component={About} />
                                <Route path="/faq" component={FAQ} />
                                <Route path="/newsletter" component={Newsletter} />
                                <Route path="/help" component={Help} />
                                <Route path="/privacy" component={Privacy} />
                                <Route path="/author/:slug(.+)" component={() => <AuthorPage user_session={user_session} />} />
                                <Route path="/article/:id" component={() => <ArticlePage user_session={user_session} />} />
                                <Route path="/create_author" component={() => <AuthorPageCreator user_session={user_session} />} />
                                <Route path="/search" component={() => <SearchResults/>} />
                                <Route path="/admin/manage" component={AdminManage} />
                                <Route path="/admin/invite" component={AdminInvite} />
                            </Switch>
                        </div>
                        <Footer />
                    </MuiThemeProvider>
                </div>
            </Router>
        );
    }
}

App.defaultProps = {
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {ThemeContext, themes} from './theme-context';
import Header from './layout/header'
import Main from './layout/main'
import Banner from './layout/banner'
import Home from './Home'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.visible,
    };
  }
  toggleTheme = () => {
    this.setState({ theme: this.state.theme === themes.notVisible ? themes.visible : themes.notVisible });
  };
  render() {
    return (
      <Router>
          <ThemeContext.Provider value={this.state.theme}>
            <Header onClick={this.toggleTheme}/>
            <Main>
              <Banner />
              <Switch>
                  <Route exact path='/' component={Home} />
              </Switch>
            </Main>
          </ThemeContext.Provider>
      </Router>
    );
  }
}

export default App;
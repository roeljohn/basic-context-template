import React, { Component } from 'react';
import {ThemeContext, themes} from './theme-context';

class Home extends Component {
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
            <div>
                <ThemeContext.Provider value={this.state.theme}>
                </ThemeContext.Provider> 
            </div>
        );
    }
}

export default Home;
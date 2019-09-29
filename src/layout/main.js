import React, { Component } from 'react';

class componentName extends Component {
    render() {
        return (
            <main role="main">
                {this.props.children}
            </main>
        );
    }
}

export default componentName;
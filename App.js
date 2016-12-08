import React from 'react';
import Header from './common/Header';

class App extends React.Component {
    render() {
        return (
            <main className="container">
                <Header />
                {this.props.children}
            </main>);
    }    
}

export default App;
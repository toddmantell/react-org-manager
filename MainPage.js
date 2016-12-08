import React from 'react';

class MainPage extends React.Component{
    render() {
        return (
            <main>
                <div>
                    <h1>Welcome to the Main Page!</h1>
                </div>
                <div>                    
                    <p>
                        This is our example application for React, React-Router, and Redux.
                    </p>
                </div>
                <div className="col-md-6">
                    <a href="redux.js.org"><img src="./images/redux.png" /></a>
                </div>
                <div className="col-md-6">
                    <a href="https://facebook.github.io/react/"><img src="./images/reactAndLogo.png" /></a>
                </div>
            </main>
        );
    }
}

export default MainPage;
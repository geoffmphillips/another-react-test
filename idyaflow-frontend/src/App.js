import React, { Component } from 'react';
import TwitterLogin from 'react-twitter-auth';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.onFailed = this.onFailed.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }

  onSuccess(response) {
    response.json().then(body => {
      alert(JSON.stringify(body));
    });
  }

  onFailed(error) {
    alert(error);
  }

render() {
  const customHeader = {};
  customHeader['Test'] = 'test-header';
  return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className="g-signin2" dataOnsuccess="onSignIn"></div>
          <TwitterLogin
            loginUrl="http://localhost:4000/api/v1/auth/twitter"
            onFailure={this.onFailed}
            onSuccess={this.onSuccess}
            requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
            showIcon={true}
            customHeaders={customHeader}
            forceLogin={true}
          />
        </header>
      </div>
    );
  }
}

export default App;

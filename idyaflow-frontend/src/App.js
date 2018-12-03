import React, { Component } from 'react';
import TwitterLogin from 'react-twitter-auth';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
    }

    this.onFailed = this.onFailed.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  submitSearch(event) {
    axios.post('twitterapi')
      .then(response => {
        this.setState(() => {
          return {tweets: response.data};
        })
      })
      .catch(error => {
        do something;
      })
    }
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
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TwitterLogin from 'react-twitter-auth';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: [],
    }

    this.submitSearch = this.submitSearch.bind(this);
  }

  submitSearch(searchTerm) {
    axios.post(process.env.API_URL, {
      query: searchTerm,
    })
      .then(response => {
        this.setState(() => {
          return {tweets: response.data};
        })
      })
      .catch(error => {
        console.log(error);
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

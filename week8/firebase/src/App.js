import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import firebase from "firebase";
/*
* https://firebase.google.com/docs/web/setup?authuser=1
go to project settings for api key
go to Realtime Database for database URL,
update read write to true in database settings
 */
// Initialize Firebase
//npm install firebase

/*
Hosting
 yarn add firebase-tools
firebase login
firebase init
select hosting
follow prompts
-single page app? N
-overrwrite? N
- In firebase.json, change 'public' to 'build'
- yarn run build
- firebase deploy
*/
var config = {
  apiKey: "AIzaSyAI3NjaEKk_7Xo2lKAuGil1QkPtTwuO7dU",
  authDomain: "sourceexample-bbe18.firebaseapp.com",
  databaseURL: "https://sourceexample-bbe18.firebaseio.com/"
};
firebase.initializeApp(config);
var database = firebase.database();
class App extends Component {
  state = {
    input: null,
    grabbedData: null
  };
  submit = () => {
    /* set vs push? */
    firebase
      .database()
      .ref("/")
      .set({
        input: this.state.input
      });
  };
  componentDidMount() {
    var root = firebase.database().ref("/");
    root.on("value", snapshot => {
      console.log(snapshot);
      this.setState({ grabbedData: snapshot.val().input });
    });
  }
  render() {
    return (
      <div className="App">
        <input
          value={this.state.input}
          onChange={e => {
            this.setState({ input: e.target.value });
          }}
        />
        <button onClick={() => this.submit()}> submit </button>
        this data is from firebase: {this.state.grabbedData}
      </div>
    );
  }
}

export default App;

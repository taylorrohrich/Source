import { React } from "react";
import Navbar from "/navbar";
import Content from "/content";
import Footer from "/Footer";
class App extends React.component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar />
        <Content content={"I was passed from App.js!"} />
        <Footer />
      </div>
    );
  }
}

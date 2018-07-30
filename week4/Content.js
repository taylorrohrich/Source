import { React } from "react";
class Content extends React.component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        I'm content!<div>{this.props.content}</div>
      </div>
    );
  }
}

export default Content;

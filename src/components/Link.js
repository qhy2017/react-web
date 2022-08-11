import { Component } from "react";

class Link extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this)
    return <p style={{textAlign: "center",fontSize: "30px"}}>welcom to Link</p>;
  }
}
export default Link;

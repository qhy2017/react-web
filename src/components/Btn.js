import { Component } from "react";
import { Layout, Menu, Button, DatePicker, Space, Input, message } from "antd";
import HookLink from "./HookLink";
import Link from "./Li";
message.config({
  duration: 1,
  maxCount: 1,
});
class Btn extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { defaultValue: "你好呀！" };
  }

  render() {
    return (
      <div>
        <p style={{ textAlign: "center", fontSize: "30px" }}>welcom to Btn</p>
        <Button
          type="primary"
          onClick={() => {
            message.info("hello primary button");
            // alert("primary button");
          }}
        >
          primary button
        </Button>
        <Input
          allowClear={true}
          defaultValue={this.state.defaultValue}
          placeholder="请输入..."
          showCount={true}
          value={this.state.defaultValue}
          onChange={(e) => {
            console.log(e);
            this.setState({ defaultValue: e.target.value });
          }}
        />
        {this.state.defaultValue}
        {/* <Link text="链接"></Link> */}
        <br></br>
        {/* <HookLink link={'/link2'} text="link>>>"></HookLink> */}
      </div>
    );
  }
}
export default Btn;

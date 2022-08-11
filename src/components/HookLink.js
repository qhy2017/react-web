import { Outlet, NavLink, useNavigate, useLocation} from "react-router-dom";
import { Layout, Menu, Button, DatePicker, Space, Input } from "antd";
import { connect } from "react-redux";

function HookLink(props) {
  let { link, text ,onClick} = props;
  console.log('HookLink');
  console.log(props);
  const navigate = useNavigate();
  function linkSkip() {
    //权限判断
    onClick()
    navigate(link);
  }

  return <span onClick={linkSkip}>{text}</span>;
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: "active",
    children: "hello linkSkip",
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
        alert("123")
      // dispatch(setVisibilityFilter(ownProps.filter))
    },
  };
};
const HookLinkc = connect(
    mapStateToProps,
    mapDispatchToProps
  )(HookLink)

export default HookLinkc;


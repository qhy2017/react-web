import { Outlet } from "react-router-dom";
function ContentBody(props) {
  return (
    <div>
      <hr/>
      <Outlet />
    </div>
  );
}
export default ContentBody;

import { Outlet, useOutlet  } from "react-router-dom";
function ContentBody() {
 const outlet =  useOutlet()
  return (
    <div>
      {/* <outlet /> */}
      {outlet}
    </div>
  );
}
export default ContentBody;

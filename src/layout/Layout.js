import {Link} from "react-router-dom";
function Layout(props) {
  return (
    <div>
      <ul>
        {/* using Link will not refresh but if you use <a> then it will */}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {/* <li></li> */}
      </ul>
      {props.children}
      {/* props.children basically renders everything else after the links */}
    </div>
  );
}
export default Layout;

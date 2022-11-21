import { Outlet, Link } from "react-router-dom";
import "../App.css";

const Layout = () => {
    let styles = {
        textDecoration: "none",
        padding: 10,
        marginRight: 800,
        color: "white",
        fontSize : 20
      };
  return (
    <>
      <div className="Title">     
              <Link style={styles} to="/">Home</Link>           
             <Link style={{textDecoration : "none",color:"white",  fontSize : 20}} to="/about">About</Link>    
      </div>
      <Outlet />
    </>
  )
};

export default Layout;

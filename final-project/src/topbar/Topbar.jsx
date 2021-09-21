// import { Link } from "react-router-dom";
// import "./topbar.css";
// import { useContext } from "react";
// import { Context } from "../context/Context";

//  export default function TopBar(){
//      const {user ,dispatch} = useContext(Context);
//      const handleLogout = () =>{
//          dispatch({type:"LOGOUT"})
//      }
//      return(
//          <div className="top">
//              <div className="topLeft">
//              <i className="topIcon fab fa-facebook"></i>
//              <i className="topIcon fab fa-twitter"></i>
//              <i className="topIcon fab fa-pinterest"></i>
//              <i className="topIcon fab fa-instagram"></i>
//              </div>
//              <div className="topCenter">
//                  <ul className="topList">
//                      <li className="topListItem">
//                          <Link to="/" className="link">HOME</Link>
//                      </li>
//                      <li className="topListItem">
//                          <Link to="/" className="link">ABOUT</Link>
//                      </li>
//                      <li className="topListItem">
//                          <Link to="/" className="link">CONTACT</Link>
//                      </li>
//                      <li className="topListItem">
//                          <Link to="/write" className="link">WRITE</Link>
//                      </li>
//                      <li className="topListItem" onClick={handleLogout} >
//                          {user && "LOGOUT"}
//                      </li>
//                  </ul>
//              </div>
//              <div className="topRight">
//                  {
//                      user ? (
//                             // <Link to="/settings" className="link">
//                             <img 
//                             className="topImg" 
//                             src={user.} 
//                             alt="" 
//                             ></img>
//                             // </Link>
//                      ) : (
//                          <ul className="topList">
//                              <li className="topListItem">
//                              <Link className="link" to="/login">LOGIN</Link>
//                              </li>
//                              <li className="topListItem">
//                              <Link className="link" to="/register">REGISTER</Link>
//                              </li>
//                          </ul>
//                      )
//                  }
//                  {/* <i class="fas fa-user"></i> */}
//                  <i className="topSearchIcon fas fa-search"></i>
//              </div>

             
//          </div>
//      )
//  } 



import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext } from "react";
import { Context } from "../context/Context";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/api/users";
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook"></i>
        <i className="topIcon fab fa-twitter"></i>
        <i className="topIcon fab fa-pinterest"></i>
        <i className="topIcon fab fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            {/* <img className="topImg" src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="" />
            {PF + user.profilePic} */}
            {/* <img
               className="topImg"
               src="https://lirp.cdn-website.com/8a9a3aa5/dms3rep/multi/opt/8pRfiVrdRAKOFGxygI6m-1920w.jpg"
               alt=""
               >
            </img> */}
            <i className="topImg fas fa-user"></i>
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        
      </div>
    </div>
  );
}
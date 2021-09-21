// import "./singlePost.css";
// import { useLocation } from "react-router";
// import { useContext, useEffect,useState } from "react";
// import axios from "axios"
// import { Link } from "react-router-dom";
// import { Context } from "../context/Context";
// // import {image} from "../../../api/images/img1"

// export default function SinglePost(){
//     const location = useLocation();
//     const path = location.pathname.split("/")[2];
//     const [post, setPost] = useState({});
//     const PF = "http://localhost:5000/api/posts";
//     const { user } = useContext(Context);
//     const [title, setTitle] = useState("");
//     const [desc, setDesc] = useState("");
//     const [updateMode, setUpdateMode] = useState(false);
//   // const [photo,setPhoto]=useState("")
//     useEffect(() => {
//         const getPost = async () => {
//           const res = await axios.get("localhost:5000/api/posts");
//           setPost(res.data);
//           setTitle(res.data.title);
//           setDesc(res.data.desc);
//           setPhoto(res.data.photo)
//         };
//         getPost();
//       }, [path]);

//       // useEffect((res)=>{
//       //  axios.get("http://localhost:5000/post");
//       //     setPost(res.data);
          
//       // },[])

//       const handleDelete = async () => {
//         try {
//           await axios.delete(`/posts/${post._id}`, {
//             data: { username: user.username },
//           });
//           window.location.replace("/");
//         } catch (err) {}
//       };
    
//       const handleUpdate = async () => {
//         try {
//           await axios.put(`/posts/${post._id}`, {
//             username: user.username,
//             title,
//             desc,
//           });
//           setUpdateMode(false)
//         } catch (err) {}
//       };


//     return(
//         <div className="SinglePost">

 
//      <div className="singlePostWrapper">

//        <div>
     
//        </div>
//          {post.photo && (
//               <img
//               src={photo}
//               alt=""
//               className="singlePostImg"/>
     
//          )}{
//             updateMode ? (
//                 <input
//                   type="text"
//                   value={title}
//                   className="singlePostTitleInput"
//                   autoFocus
//                   onChange={(e) => setTitle(e.target.value)}
//                 />
//               ) : (
         
//          <h1 className="singlePostTitle">
//              {title}
//              {post.username === user?.username && (
//                 <div className="singlePostEdit">
//              <i className="SinglePostIconEdit fas fa-edit" 
//               onClick={() => setUpdateMode(true)}
//              ></i>
//              <i className="SinglePostIconDelete fas fa-trash-alt" 
//              onClick={handleDelete}></i>
//              </div>
//              )
//              }
//          </h1>
//          )}
//          <div className="singlePostInfo">
//              <span className="singlePostAuthor">
//                  Author: 
//              <Link to={`/?user=${post.username}`} className="link">
//               <b> {post.username}</b>
//             </Link>
//              </span>
//              <span className="singlePostDate">
//                   {new Date(post.createdAt).toDateString()}</span>
//          </div>
//          {updateMode ? (
//           <textarea
//             className="singlePostDescInput"
//             value={desc}
//             onChange={(e) => setDesc(e.target.value)}
//           />
//         ) : (
//           <p className="singlePostDesc">{desc}</p>
//         )}

//          {updateMode && (
//           <button className="singlePostButton" onClick={handleUpdate}>
//             Update
//           </button>
//         )}
//      </div>
            
//         </div>
//     )
// }





import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const photo ="http://localhost:5000/api/posts";
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);

    };
    getPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
        photo,
      });
      setUpdateMode(false)
    } catch (err) {}
  };

  return (
    <div className="SinglePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
                       {title}
                        {post.username === user?.username && (
                           <div className="singlePostEdit">
                      <i className="SinglePostIconEdit fas fa-edit" 
                         onClick={() => setUpdateMode(true)}
                        ></i>
                       <i className="SinglePostIconDelete fas fa-trash-alt" 
                        onClick={handleDelete}></i>
                        </div>
                        )
                        }
                    </h1>
                    )}
                    <div className="singlePostInfo">
                        <span className="singlePostAuthor">
                            Author: 
                        <Link to={`/?user=${post.username}`} className="link">
                         <b> {post.username}</b>
                       </Link>
                        </span>
                        <span className="singlePostDate">
                             {new Date(post.createdAt).toDateString()}</span>
                    </div>
                    {updateMode ? (
                     <textarea
                       className="singlePostDescInput"
                       value={desc}
                       onChange={(e) => setDesc(e.target.value)}
                     />
                   ) : (
                     <p className="singlePostDesc">{desc}</p>
                   )}
          
                    {updateMode && (
                     <button className="singlePostButton" onClick={handleUpdate}>
                       Update
                     </button>
                   )}
                </div>
                      
                   </div>
             )
           }
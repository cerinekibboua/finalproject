import Sidebar from "../../sidebar/Sidebar";
import SinglePost from "../../singlePost/SinglePost";

import "./single.css";


export default function Single(){
    return(
        <div className="Single">
         <SinglePost/>
      
      <Sidebar/>
            
        </div>
    )
}
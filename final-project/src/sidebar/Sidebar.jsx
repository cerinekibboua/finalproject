import { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar(){
    const [cats,setCats] = useState([]);

    useEffect(() =>{
        const getCats = async ()=>
        {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();
    },[])
    return(
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImage"
                src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                alt=""
                />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione mollitia totam rem nulla fuga. </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    {cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link">
                         <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-facebook"></i>
             <i className="sidebarIcon fab fa-twitter"></i>
             <i className="sidebarIcon fab fa-pinterest"></i>
             <i className="sidebarIcon fab fa-instagram"></i>
            </div>

            </div>
        </div>
    )
}
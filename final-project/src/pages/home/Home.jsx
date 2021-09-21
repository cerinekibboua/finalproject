import { useEffect, useState } from "react";
import "./home.css";
import Header from "../../header/header";
import Sidebar from "../../sidebar/Sidebar";
import Posts from "../../posts/Posts";
import axios from "axios";
import { useLocation } from "react-router";


export default function Home() {
  const [posts, setPost] = useState([]);
  const { search } = useLocation();

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get("/posts" + search);
  //     setPosts(res.data)
  //   };
  //   fetchPosts();
  // }, [search]);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts");
      setPost(res.data);
      // setTitle(res.data.title);
      // setDesc(res.data.desc);
      // setPhoto(res.data.photo)
    };
    getPost();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
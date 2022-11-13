import React from "react";
import "./home.css";
import { useSelector } from "react-redux";

function Home() {
  const auth = useSelector((state) => state.auth);

  const { user } = auth;
  return (
    <div className="home_page">
      <h2>Hello everyone!</h2>
      <p>
        {user.name}
        This site is about user authentication, so there won't be any other
        pages here. If people want to see more about how to create other
        websites. You can click on the link below, visit my youtube channel. And
        if you find it useful, please subscribe for us. Thank you very much!
      </p>

      <h3>Build a Full Authenticated MERN site.</h3>
    </div>
  );
}

export default Home;

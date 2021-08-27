import React from "react";
import axios from "axios";
import "./hstyles.css";
import image1 from "./images/up-sect.png";

function Section() {
  // const [post, setPost] = React.useState(null);
  // const baseURL = "http://localhost:4000/random/";

  // function fetchRandom() {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data);
  //   });
  // }

  // React.useEffect(() => {
  //   fetchRandom();
  // }, []);

  // if (!post) return null;

  return (
    <div className="section">
      <header>
        <h1>latest articles</h1>
      </header>
      <div className="art-id">
        <p id="active">01</p>
        <p>02</p>
        <p>03</p>
        <p>04</p>
      </div>
      {/* <a href={`/articles/${post._id}`}>
        <article>
          <div className="text">
            <h2>{post.title}</h2>
            <p className="byline">
              {post.author ? "by" + post.author : "by anonymous"}
            </p>
            <p className="content">{post.content.substring(0, 100)}.....</p>
          </div>
          <div className="image">
            <img src={post.image} />
          </div>
        </article>
      </a> */}
      <article>
        <div className="text">
          <h1>Lorem Ispum</h1>
          <p className="byline">by Lorem Ispum</p>
          <p className="content">abcd</p>
        </div>
        <div className="image">
          <img src={image1} />
        </div>
      </article>
    </div>
  );
}

export default Section;

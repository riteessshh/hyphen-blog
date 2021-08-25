import React from "react";
import "./hstyles.css";
import image1 from "./images/post-sample-1.png";
import image2 from "./images/post-sample-2.png";
import image3 from "./images/post-sample-3.png";

function Section() {
  return (
    <div className="lower-section">
      <header>
        <h1>trending post</h1>
      </header>
      <div className="posts">
        <div className="card">
          <div>
            <img src={image1} />
          </div>
          <div className="content">
            <h3>Lorem Ispum</h3>
            <p className="byline">by Lorem Ispum</p>
            <p>
              Nec ac laoreet sagittis, gravida sed. Hac elementum felis et
              faucibus et ipsum enim.
            </p>
          </div>
        </div>
        <div className="card">
          <div>
            <img src={image2} />
          </div>
          <div className="content">
            <h3>Lorem Ispum</h3>
            <p className="byline">by Lorem Ispum</p>
            <p>
              Nec ac laoreet sagittis, gravida sed. Hac elementum felis et
              faucibus et ipsum enim.
            </p>
          </div>
        </div>
        <div className="card">
          <div>
            <img src={image3} />
          </div>
          <div className="content">
            <h3>Lorem Ispum</h3>
            <p className="byline">by Lorem Ispum</p>
            <p>
              Nec ac laoreet sagittis, gravida sed. Hac elementum felis et
              faucibus et ipsum enim.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;

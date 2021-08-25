import React from "react";
import "./hstyles.css";
import image1 from "./images/top-art-1.png";

function Section() {
  return (
    <div className="section">
      <header>
        <h1>top pick articles</h1>
        <div className="art-id">
          <p id="active">01</p>
          <p>02</p>
          <p>03</p>
          <p>04</p>
        </div>
      </header>
      <article>
        <div className="text">
          <h2>Lorem Ispum</h2>
          <p className="byline">by Lorem Ispum</p>
          <p className="content">
            Vel, lacinia mauris a at. Lectus neque elit est faucibus dignissim
            molestie augue aliquet. Amet, risus tortor sit vitae sed. At orci
            leo faucibus laoreet eget hendrerit scelerisque faucibus lectus.
            Egestas donec accumsan, maecenas at sed tincidunt. Nibh ornare
            quisque ridiculus sagittis et donec morbi et nec.
          </p>
        </div>
        <div className="image">
          <img src={image1} />
        </div>
      </article>
    </div>
  );
}

export default Section;

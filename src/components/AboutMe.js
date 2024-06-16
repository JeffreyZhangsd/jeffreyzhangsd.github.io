import React from "react";

const AboutMe = () => {
  return (
    <>
      <span className="aboutContainer">
        <div className="aboutMe">
          <h1>Hi, I'm Jeffrey!</h1>
          <br />
          <p className="commentText" style={{ fontSize: "12px" }}>
            // quick background
          </p>
          {/* add some flavor to this */}
          <h4>
            I am a passionate full stack software engineer based in California. With a strong
            foundation in Applied Mathematics from UCLA, and advanced software engineering
            experience from Hack Reactor, I bring a unique blend of analytical skill and technical
            expertise to the table.
          </h4>
          <br />
          <p className="commentText" style={{ fontSize: "12px" }}>
            // experience
          </p>
          {/* some skills */}
          <p>
            I have hands-on experience in both front-end and back-end development, with a diverse
            skill set including JavaScript, TypeScript, React, Node, SQL, NoSQL, Python and more. I
            also have experience with testing, deployment and other developer tools.
          </p>
          <br />
          <p className="commentText" style={{ fontSize: "12px" }}>
            // hobbies
          </p>
          {/* other things */}
          <p>
            Outside of coding, I enjoy a variety of things, some of them being watching football,
            playing piano and guitar, video games, eating Jack in the Box, and rooting for the San
            Diego Padres.
          </p>
        </div>
        <div className="aboutImage">
          <img src="https://github.com/jeffreyzhangsd.png" alt="It's me!" loading="lazy"></img>
        </div>
      </span>
    </>
  );
};

export default AboutMe;

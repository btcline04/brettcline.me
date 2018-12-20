import React from 'react';

const Info = () => {
  return (
    <div className="hero hero-lg info container">
      <div className="hero-body">
        <p className="hi">Hi, my name is</p>
        <h1 className="name">Brett Cline.</h1>
        <h1 className="build">I build things for the web.</h1>
        <p className="about">I'm a software engineer based in <span className="city">Pittsburgh, PA</span> specializing <br/>
        in developing exceptional, high-quality applications for the web.</p>
      </div>

      <style jsx>
        {`
          .info {
            color: #64ffda;
            padding-left: 175px;
          }
          
          .hi {
            margin-bottom: 5px;
          }
          .name {
            color: white;
            font-size: 60px;
            margin-bottom: 5px;
            margin-top: 0px;
            font-weight: bold;
          }

          .build {
            color: #8892b0;
            font-size: 60px;
            font-weight: bold;
          }

          .about {
            color: #8892b0;
          }

          .city {
            color: #64ffda;
          }
        `}
      </style>
    </div>
  )
}

export default Info;


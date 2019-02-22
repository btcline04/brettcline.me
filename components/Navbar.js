import React from 'react';

const Navbar = () => {
  return (
    <div>
      <header className="navbar">
        <section className="navbar-section name-logo">
        <img src="static/logo2.jpg" alt=""/>
        </section>
        <section className="navbar-section">
        <a href="static/resume.pdf" target="_blank"><button className="btn btn-lg btn-primary">Resume</button></a>
        </section>
      </header>


      <style jsx>
      {
        `
        .name-logo {
          padding-left: 20px;
        }

        .btn {
          margin-right: 25px;
        }

        `
      }
      </style>


    </div>
  )
}

export default Navbar;

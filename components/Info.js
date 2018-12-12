import React from 'react';

const Info = () => {
  return (
    <div className="container text-center float-right">
      <h1 className="info">
        Brett Cline <br/>
        Full stack software developer in Pittsburgh, PA.
      </h1>

      <style jsx>
        {`
          .info {
            color: white;
          }
        `}
      </style>
    </div>
  )
}

export default Info;
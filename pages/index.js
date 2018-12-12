import React from 'react';
import Head from 'next/head';
import Info from '../components/Info';

const index = () => {
  return (
    <div>
      <Head>
        <title>Brett Cline - Software Developer</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="keywords" content="Brett Cline"/>

        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css" />

        <link href="https://fonts.googleapis.com/css?family=Cabin" rel="stylesheet" />


      </Head>

      <Info />

      <style global jsx> 
        {`

          html{
            min-height: 100%
          }

          body {
            background: #c31432;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to bottom, #c31432, #240b36);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to bottom, #c31432, #240b36); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            font-family: 'Cabin', sans-serif;
          }

        `}
      </style>
    </div>
  )
}

export default index;




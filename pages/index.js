import React from 'react';
import Head from 'next/head';
import Info from '../components/Info';

const index = () => {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="static/favicon.ico" />
        <title>Brett Cline | Software Developer</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="keywords" content="Brett Cline"/>

        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-exp.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/spectre.css/dist/spectre-icons.min.css" />

        <link href="https://fonts.googleapis.com/css?family=Work+Sans" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      </Head>

      <Info />

      <style global jsx> 
        {`

          html{
            min-height: 100%
          }

          body {
            background: #0a192f;
            font-family: 'Roboto', -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
          }

        `}
      </style>
    </div>
  )
}

export default index;




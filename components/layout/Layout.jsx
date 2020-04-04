import React from 'react';
import Header from './Header'
import { Global, css } from '@emotion/core'
import Head from 'next/head'

const Layout = (props) => {
    return (

        <>
            <Global
                styles={css` 
:root {
    --gris: #3d3d3d;
    --gris2: #6f6f6f;
    --gris3: #e1e1e1;
    --naranja: #da552f;
}
html{
    font-size: 62.5%;
    box-sizing: border-box;
}
*, *:before, *:after{
    box-sizing: inherit;
}
body {
    font-size: 1.6rem;
    line-height: 1.5;
    font-family: 'Baloo Thambi 2', sans-serif;

}
main{
    margin-bottom: 8rem;
}
h1, h2 ,h3{
    margin: 0 0 2rem 0;
    line-height: 1.5
}
h1, h2{
    font-family: 'Roboto', serif;
    font-weight: 700;
}
h3{
    font-family: 'Baloo Thambi 2', sans-serif;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
a{
    text-decoration: none;
}
img{
       max-width: 100%;
   }
`}
            />
            <Head>
                
                <title>Aplicación en React usando Firebase y Next.js</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css?family=Baloo+Thambi+2:400,700|Roboto:400,700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="/static/css/app.css" />
            </Head>


            <Header />

            <main>
                {props.children}
            </main>
        </>

    );
}

export default Layout;
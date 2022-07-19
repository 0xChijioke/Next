import "../styles/globals.css"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import ReactDOM from "react-dom";
import Head from 'next/head'
import 'antd/dist/antd.css';
import { ScaffoldProvider } from "../helpers/ScaffoldContext";

const subgraphUri = "http://localhost:8000/subgraphs/name/scaffold-eth/your-contract";

const client = new ApolloClient({
  uri: subgraphUri,
  cache: new InMemoryCache(),
});

function App({Component, PageProps})
{
  const [prevTheme, setPrevTheme] = useState();
  const themes = {
    dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
    light: `${process.env.PUBLIC_URL}/light-theme.css`,
  };
  
  useEffect(() => {
  setPrevTheme(window.localStorage.getItem("theme"));
  },[]);

  return(
    <>
      <Head>
          <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=0.6, maximum-scale=1.0, user-scalable=0" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Web site created using 🏗 scaffold-eth" />
          <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
          
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <title>Ethereum App</title>
        </Head>
        {/* <ScaffoldProvider> */}
          <ApolloProvider client={client}>
              <ThemeSwitcherProvider themeMap={themes} defaultTheme={prevTheme || "light"}>
                  <Component {...PageProps} subgraphUri={subgraphUri} />
              </ThemeSwitcherProvider>
          </ApolloProvider>
        {/* </ScaffoldProvider> */}
      </>
    )
}

export default App;

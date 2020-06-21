import React from "react";
import App from "next/app";

import "../css/antd.less";

// components
import TitleBar from "../components/TitleBar";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <TitleBar />
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;

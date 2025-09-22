import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import Navbar from "./navbar";
import Footer from "./footer";
const Layout = ({ children }) => {

    const Div = styled.div({
    padding: "0",
    marginTop: "73px"
  });

  const router = useRouter();
  // const isErrorPage = router.route === "/_error";

  return (
    <div
      style={{
        minHeight: "100vh",
      }}
      className="d-flex flex-column position-relative"
    >
      <Navbar />
      <Div
        className="flex-grow-1"
      >
        {children}
      </Div>
      <Footer />
    </div>
  );
};

export default Layout;

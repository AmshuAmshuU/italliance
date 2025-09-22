import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
const Layout = ({ children }) => {

    const Div = styled.div({
    padding: "0",
  });

  const router = useRouter();
  const [showProfile, setShowProfile] = useState(false);
  const isErrorPage = router.route === "/_error";

  return (
    <div
      style={{
        minHeight: "100vh",
      }}
      className="d-flex flex-column position-relative"
    >
      {/* <Navbar showProfile={showProfile} setShowProfile={setShowProfile} /> */}
      <Div
        className="flex-grow-1"
        showProfile={showProfile}
        setShowProfile={setShowProfile}
      >
        {children}
      </Div>
      {/* <Footer isErrorPage={isErrorPage} /> */}
    </div>
  );
};

export default Layout;

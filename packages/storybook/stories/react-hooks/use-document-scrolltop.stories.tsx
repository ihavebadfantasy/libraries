import "../../global-style.css";
import React from "react";
import { storiesOf } from "@storybook/react";
import README from "@wbe/use-document-scrolltop/README.md";
import useDocumentScrollTop from "@wbe/use-document-scrolltop";
// @ts-ignore
// import your module from src

// set story name
const storyName = "use-document-scrolltop";

/**
 * Demo
 */
const App = () => {
  // get dynamic document scrollTop value
  const documentScrollTop: number = useDocumentScrollTop();

  return (
    <div>
      <div style={{ height: "1000vh" }} />
      <div style={{ position: "fixed", top: "0" }}>
        Scroll & check document scrollTop change. <h1>{documentScrollTop}</h1>
      </div>
    </div>
  );
};

/**
 * Config
 */
storiesOf(`react-hooks/${storyName}`, module)
  .addParameters({
    readme: {
      sidebar: README
    }
  })
  .add("basic example", () => <App />);

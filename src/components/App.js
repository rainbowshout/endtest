import React from "react";
import MobileNav from "./mobileNav";
import DesktopNav from "./desktopNav";
import { navCategories } from "../data";

const App = () => {
  return (
    <div className="app">
      <DesktopNav data={navCategories} />
      <MobileNav data={navCategories} />
    </div>
  );
};

export default App;

// to-do - pull both navs into 1 global nav component, with one <header> wrapper.
// nice to haves:
//        typescript for passing through all of our props.
//        scoped css with styled jsx (or at least css modules)
//        more checks around data validity on conditional renders (i.e. are our links valid, correct file extensions for images, etc)

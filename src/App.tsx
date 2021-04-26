import React, { useState } from "react";
import "./App.css";
import ContentSwitcher from "./Components/ContentSwitcherComponent";
import AboutMe from './Pages/AboutMe/AboutMe';
import AccordionComponent from './Components/AccordionComponent';
import Education from './Pages/Education/Education'
function App() {
  const [selectedPage, setSelectedPage] = useState(1);
  return (
    <div>
      <div className="contentSwitcher">
        <ContentSwitcher passPage={setSelectedPage} />
      </div>
      {selectedPage === 1 ? (
        <div className="switcher">
          <AboutMe  />
        </div>
      ) : null}

      {selectedPage === 2 ? (
        <div className="AccordionComp">
          <AccordionComponent/>
        </div>
      ) : null}

      {selectedPage === 3 ? (
        <div className="switcher">
          <Education/>
        </div>
      ) : null}
    </div>
  );
}

export default App;

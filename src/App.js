import React, { useState } from "react";
import Editor from "./components/Editor/Editor";
import Previewer from "./components/Previewer/Previewer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { faUpRightAndDownLeftFromCenter } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [editorFullScreen, setEditorFullScreen] = useState(false);
  const [previewerFullScreen, setPreviewerFullScreen] = useState(false);
  const toggleEditorScreen = () => {
    setEditorFullScreen(!editorFullScreen);
  };
  const togglePreviewerScreen = () => {
    setPreviewerFullScreen(!previewerFullScreen);
  };
  return (
    <div className="app">
      {!previewerFullScreen && (
        <div className="center">
          <div className={`header-design header-editor`}>
            <FontAwesomeIcon icon={faFreeCodeCamp} />
            <p className="title">Editor</p>
            <div onClick={toggleEditorScreen} className="icon">
              {editorFullScreen ? (
                <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
              ) : (
                <FontAwesomeIcon icon={faMaximize} />
              )}
            </div>
          </div>
          <Editor design={`${editorFullScreen ? "full-screen" : "design"}`} />
        </div>
      )}
      {!editorFullScreen && (
        <div className="center">
          <div className={`header-design header-previewer `}>
            <FontAwesomeIcon icon={faFreeCodeCamp} />
            <p className="title">Previewer</p>
            <div onClick={togglePreviewerScreen} className="icon">
              {previewerFullScreen ? (
                <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
              ) : (
                <FontAwesomeIcon icon={faMaximize} />
              )}
            </div>
          </div>
          <Previewer
            design={`${
              previewerFullScreen ? "previewer-full" : "previewer-box"
            }`}
          />
        </div>
      )}
    </div>
  );
};

export default App;

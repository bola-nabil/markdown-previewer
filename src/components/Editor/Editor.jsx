import React, { useState, useEffect } from "react";
import "./Editor.css";

const Editor = ({ design }) => {
  const [input, setInput] = useState("");
  useEffect(() => {
    setInput(
      "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n## This is a sub-heading...\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\nfunction anotherExample(firstLine, lastLine) {\n\tif (firstLine == '```' && lastLine == '```') {\n\t\treturn multiLineCode;\n\t}\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\nThere's also [links](https://www.freecodecamp.org), and\n\nThere's also [links](https://www.freecodecamp.org), and\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n - And of course there are lists.\n  - With different indentation levels.\n   - That look like this.\n\n\n1. And there are numbered lists too.\n1. And there are numbered lists too.\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-\nfcc/images/fcc_secondary.svg)"
    );
  }, []);
  return (
    <textarea
      className={design}
      value={input}
      onChange={(e) => setInput(e.target.value)}
    ></textarea>
  );
};

export default Editor;

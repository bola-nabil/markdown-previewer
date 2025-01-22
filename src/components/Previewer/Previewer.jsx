/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./Previewer.css";
import { Link } from "react-router-dom";

const Previewer = ({ design }) => {
  return (
    <div className={design}>
      <h1>Welcome to my React Markdown Previewer!</h1>
      <hr className="hr-h1" />
      <h2>This is a sub-heading...</h2>
      <hr className="hr-h2" />
      <h2>And here's some other cool stuff:</h2>
      <div className="code-style-1">
        Heres some code, <code className="code-1 f-w">{"<div></div>"}</code>
        <span>, between 2 backticks.</span>
      </div>
      <pre className="code-style-2">
        <code className="code-2">
          <p className="comment">// this is multi-line code:</p>
          <span className="tag f-w">function </span>
          <span className="example f-w">anotherExample</span>
          <span>
            <span className="f-w">(firstLine</span>
            <span className="f-w">,lastLine)</span>
          </span>
          <span>{"{"}</span>
          <p>
            <span className="tag">if</span>
            <span>
              <span className="f-w">
                (firstLine <span style={{ color: "#9a6e3a" }}>==</span>{" "}
                <span style={{ color: "#690" }}>'```'</span>{" "}
                <span style={{ color: "#9a6e3a" }}> && </span>
              </span>
              <span className="f-w">lastLine</span>{" "}
              <span style={{ color: "#9a6e3a" }}>==</span>{" "}
              <span style={{ color: "#690" }}>'```'</span>
            </span>
            <span>{") {"}</span>
          </p>
          <p className="return">
            <span className="tag">return </span>
            <span className="f-w">multiLineCode;</span>
          </p>
          <p className="move">{"}"}</p>
          <p>{"}"}</p>
        </code>
      </pre>
      <div className="p-styles">
        <p>
          You can also make text <span className="f-w">bold...</span> whoa!
        </p>
        <p>
          Or <span className="italic">italic.</span>
        </p>
        <p>
          Or... wait for it... <span className="italic f-w">both!</span>
        </p>
        <p>
          And feel free to go crazy <del>crossing stuff out.</del>
        </p>
        <p>
          There's also{" "}
          <Link to="https://www.freecodecamp.org/" target="_blank">
            links
          </Link>
          , and
        </p>
        <p>
          <span className="quote"></span>Block Quotes!
        </p>
        <p>And if you want to get really crazy, even tables:</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Wild Header</th>
            <th>Crazy Header</th>
            <th>Another Header?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Your content can</td>
            <td>be here, and it</td>
            <td>can be here....</td>
          </tr>
          <tr>
            <td>And here.</td>
            <td>Okay.</td>
            <td>I think we get it.</td>
          </tr>
        </tbody>
      </table>
      <ol className="ol-styles">
        <li>And there are numbered lists too.</li>
        <li>Use just 1s if you want!</li>
        <li>And last but not least, let's not forget embedded images:</li>
      </ol>
      <div className="imgs">
        <img
          src="https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Previewer;

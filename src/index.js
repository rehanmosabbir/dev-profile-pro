import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="photo.jpg" alt="" />;
}

function Intro() {
  return (
    <div>
      <h1>Mosabbir Rehan</h1>
      <p>
        Front-end web developer and teacher. When not coding, I like to play
        Cricket, to cook (and eat), or to just enjoy watching Cricket match.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="HTML" emoji="💪" color="tomato" />
      <Skill name="CSS" emoji="👍" color="gray" />
      <Skill name="Javascript" emoji="💪" color="yellow" />
      <Skill name="React" emoji="👶" color="skyblue" />
      <Skill name="Node js" emoji="👶" color="olive" />
    </div>
  );
}

function Skill(props) {
  return (
    <div style={{ backgroundColor: props.color }} className="skill">
      {props.name}
      {props.emoji}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

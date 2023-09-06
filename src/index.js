import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

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
        Front End Web developer and teacher. When not coding, I like to play
        Cricket, to cook (and eat), or to just enjoy watching Cricket match.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
    </ul>
  );
}

function Skill({ skillObj }) {
  let emoji;
  switch (skillObj.level) {
    case "beginner":
      emoji = "👶";
      break;
    case "intermediate":
      emoji = "👍";
      break;
    case "advanced":
      emoji = "💪";
      break;
    default:
      emoji = null;
  }
  return (
    <li style={{ backgroundColor: skillObj.color }} className="skill">
      <span>{skillObj.skill}</span>
      <span>{emoji}</span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

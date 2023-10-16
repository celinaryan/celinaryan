import { h, Component } from "preact";
export default function Skill({ skill }) {
  return (
    <div className="skill">
      <h4 className="skill-category">{skill.skillCategory}</h4>
      <ul className="skills-list">
        {skill.skillsList.map((desc) => (
          <li>{desc}</li>
        ))}
      </ul>
    </div>
  );
}

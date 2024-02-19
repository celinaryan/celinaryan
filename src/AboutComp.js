import { h, Component } from "preact";
export default function AboutComp({ AboutComp }) {
  return (
    <div className="about">
      <h4 className="about-category">{about.aboutCategory}</h4>
      <ul className="about-list">
        {about.aboutList.map((desc) => (
          <li>{desc}</li>
        ))}
      </ul>
      <ul className="about-paragraph">
        {about.aboutParagraphs.map((desc) => (
          <li>{desc}</li>
        ))}
      </ul>
    </div>
  );
}

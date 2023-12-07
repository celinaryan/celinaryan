import { h, Component } from "preact";
export default function Project({ project }) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return (
    <div className="project">
      <div className="title-date-container">
        <h3 className="project-name">{project.projectName}</h3>
        <div className="date-location-container">
          <p className="project-date">{project.projectDates}</p>
          <p className="project-location">{project.projectLocation}</p>
        </div>
      </div>
      <h4 className="project-heading">{project.projectTitle}</h4>
      <ul className="project-description">
        {project.projectDescription.map((desc, index) => {
          const parts = desc.split(urlRegex);
          return (
            <li key={index}>
              {parts.map((part, i) => 
                urlRegex.test(part)
                ? <a href={part} target="_blank" rel="noopener noreferrer">{part}</a> 
                : <span>{part}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

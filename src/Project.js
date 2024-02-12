import { h } from "preact";
import { useState } from "preact/hooks";

export default function Project({ project }) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  const toggleDescription = () => setDescriptionVisible(!isDescriptionVisible);

  return (
    <div className="project">
      <div className="title-date-container">
        <h3 className="project-name">{project.projectName}</h3>
        {/* Moved date-location-container outside title-location-wrapper */}
        <div className="date-location-container">
          <p className="project-date">{project.projectDates}</p>
          <p className="project-location">{project.projectLocation}</p>
        </div>
      </div>
      <div className="job-title-container">
      <h4 className="project-heading">{project.projectTitle}</h4>
      <div className="toggle-container" onClick={toggleDescription}>
            <span className="description-toggle">{isDescriptionVisible ? '−' : '+'}</span>
          </div>
          </div>
      {/* Only show the project description if isDescriptionVisible is true */}
      {isDescriptionVisible && (
        <ul className="project-description">
          {project.projectDescription.map((desc, index) => {
            const parts = desc.split(urlRegex);
            return (
              <li key={index}>
                {parts.map((part, i) => 
                  urlRegex.test(part)
                  ? <a href={part} key={i} target="_blank" rel="noopener noreferrer">{part}</a> 
                  : <span key={i}>{part}</span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

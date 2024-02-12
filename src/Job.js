import { h } from "preact";
import { useState } from "preact/hooks";

export default function Job({ job }) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  // Function to toggle the description visibility
  const toggleDescription = () => setDescriptionVisible(!isDescriptionVisible);

  return (
    <div className="job-experience">
      <div className="title-date-container">
        <h3 className="company-title">{job.companyName}</h3>
        <div className="date-location-container">
          <p className="job-date">{job.jobDates}</p>
          <p className="job-location">{job.jobLocation}</p>
        </div>
      </div>
      <div className="job-title-container">
        <h4 className="job-heading">{job.jobTitle}</h4>
        {/* Add a container for the toggle symbol */}
        <div className="toggle-container" onClick={toggleDescription}>
          <span className="description-toggle">{isDescriptionVisible ? '-' : '+'}</span>
        </div>
      </div>
      {isDescriptionVisible && (
        <ul className="job-description">
          {job.jobDescription.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

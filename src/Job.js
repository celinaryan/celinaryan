import { h, Component } from "preact";
export default function Job({ job }) {
  return (
    <div className="job-experience">
      <div className="title-date-container">
        <h3 className="company-title">{job.companyName}</h3>
        <div className="date-location-container">
          <p className="job-date">{job.jobDates}</p>
          <p className="job-location">{job.jobLocation}</p>
        </div>
      </div>
      <h4 className="job-heading">{job.jobTitle}</h4>
      <ul className="job-description">
        {job.jobDescription.map((desc) => (
          <li>{desc}</li>
        ))}
      </ul>
    </div>
  );
}

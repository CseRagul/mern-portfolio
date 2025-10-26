import React from "react";

const projects = [
  { title: "Event Management App", desc: "Inbox, detailed view, admin approvals." },
  { title: "Coffee Billing System", desc: "User auth, Google OAuth, responsive UI." },
  { title: "School Donation Platform", desc: "Needs upload, donor tracking, admin dashboard." },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-container">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';

const Projects = () => (
  <section id="projects" className="py-5 bg-light">
    <div className="container">
      <h2 className="text-center">CARD</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="avatar1499450488 (10).jpg" className="card-img-top" alt="Project 1" />
            <div className="card-body">
              <h5 className="card-title">Nazrul Islam Sajib </h5>
              <p className="card-text">ID: C221074 </p> 
              <p className="card-text">A competitive programmer </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="avatar1319487728.jpg" className="card-img-top" alt="Project 2" />
            <div className="card-body">
              <h5 className="card-title">Faisal Haq Rifat</h5>
              <p className="card-text">ID: C221076 </p> 
              <p className="card-text"> High CGPA gainer </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="avatar1499450488 (10).jpg" className="card-img-top" alt="Project 3" />
            <div className="card-body">
              <h5 className="card-title">Nazrul Islam Sajib </h5>  
              <p className="card-text">ID: C221074 </p> 
              <p className="card-text"> He has no skill</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Cat = () => {
  const [catFact, setCatFact] = useState('');
  const fetchCatFact = () => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => {
        setCatFact(data.fact);
      })
      .catch((error) => {
        console.error("Error fetching cat fact:", error);
      });
  };

  return (
    <div className="container text-center mt-5">
      <h2>To Know more about biral</h2> 
      <p>Each of the time you will know new thing from this search bar</p>
      <button className="btn btn-primary mb-3" onClick={fetchCatFact}>
        Search
      </button>
      <p className="alert alert-info">{catFact}</p>
    </div>
  );
};
export default Cat;

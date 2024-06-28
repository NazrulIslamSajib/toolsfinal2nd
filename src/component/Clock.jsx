import React, { useEffect } from 'react';
const Clock = () => {
  useEffect(() => {
    const mytime = () => {
      const myDate = new Date();
      const min = (myDate.getMinutes() < 10) ? "0" + myDate.getMinutes() : myDate.getMinutes();
      const sec = (myDate.getSeconds() < 10) ? "0" + myDate.getSeconds() : myDate.getSeconds();
      let hr = myDate.getHours();
      const M = (myDate.getHours() >= 12) ? "PM" : "AM";

      if (myDate.getHours() === 0) {
        hr = 12;
      } else if (myDate.getHours() > 12) {
        hr = myDate.getHours() % 12;
      } else {
        hr = myDate.getHours();
      }

      const currentTime = hr + ":" + min + ":" + sec;
      document.getElementById("clock-time").innerHTML = currentTime;
      document.getElementById("clock-period").innerHTML = M;

      const myday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const mymonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const day = myDate.getDate();
      const currentDate = myday[myDate.getDay()] + ", " + mymonth[myDate.getMonth()] + " " + day;
      document.getElementById("clock-date").innerHTML = currentDate;
    };

    mytime();
    const interval = setInterval(mytime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center my-4 clock-container">
      <h3 className="clock-title">This is JavaScript feature</h3>
      <h2 id="clock-time" className="clock-time"></h2>
      <h4 id="clock-period" className="clock-period"></h4>
      <p id="clock-date" className="clock-date"></p>
    </div>
  );
};

export default Clock;

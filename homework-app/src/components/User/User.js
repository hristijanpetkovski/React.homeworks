import React from "react";


const  User = () => {
  return(
      <div className="student-cv">
        <div className='student-card'>
        <div className="img">
        <img  src="https://c6oxm85c.cloudimg.io/cdno/n/q85/https://az617363.vo.msecnd.net/imgmodels/models/MD30001256/andrey_headshot1dc067d29b92e768d610ab5051d113db_thumb.jpg" alt='slika' width='200px' />
        </div>

        <h2>Hristijan Petkovski</h2>
        <ul id='personal-information'>
          <li>25.04.2000</li>
          <li>From Skopje</li>
          <li>Studying at Semos Education (Java Script Academy)</li>
          <li>Working at Multisprint </li>
        </ul>
        </div>
      </div>
    
    );
}

export default User;
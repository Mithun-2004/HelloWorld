import React from 'react';


function StudentDetails({username, telephone}){
  return (
    <div>
        <h1>StudentDetails</h1>
        <p>Username: {username}</p>
        <p>Telephone: {telephone}</p>
    </div>

  )
}

export default StudentDetails;
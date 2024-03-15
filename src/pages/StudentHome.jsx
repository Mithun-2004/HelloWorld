import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import StudentDetails from './StudentDetails';

function StudentHome(){
    const [username, setUsername] = useState("MithunP");
    const [telephone, setTelephone] = useState("92374 82312");

    useEffect(() => {
        fetch("https://randomuser.me/api/")
        .then((response) => response.json()
        .then((data) => console.log(data.results[0].location)))
        .catch((err) => console.log(err));
    }, [])

  return (
    <>
         <div>StudentHome</div>
         <Link to="/studentDetails">View Details</Link>
        
        {/* <StudentDetails username={username} telephone={telephone} /> */}
    </>
  )
}

export default StudentHome;

import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import StudentHome  from './pages/StudentHome';
import StudentDetails from './pages/StudentDetails';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
            <Route path="/studentHome" exact element={<StudentHome />} />
            <Route path="/studentDetails" element={<StudentDetails />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

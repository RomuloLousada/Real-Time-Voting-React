import React, { useEffect, useState } from 'react';
import './App.css';
import Candidates from './components/candidates/Candidates';
import Header from './components/header/Header';

function App() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch("http://localhost:8080/votes");
      const json = await res.json();
  
      setCandidates(json.candidates);
    }, 100);
    return () => {
      clearInterval(interval);
    }
  }, [candidates])

  return (
    <div className="container">
      <Header title="Poll: Best Drummer"/>
      <Candidates candidates={candidates}/>
    </div>
  );
}

export default App;

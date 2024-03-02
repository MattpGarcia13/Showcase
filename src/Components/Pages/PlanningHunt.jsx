import React from 'react'
import Cards from '../Cards/Cards'
import {useEffect, useState} from 'react'

function PlanningHunt() {
    const [dinos, setDinos] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/dino')
      .then(response => response.json())
      .then(data => setDinos(data.dinos))
      .catch(error => console.log(error))



  }, [])
  console.log(dinos)
  return (
    <div>
      <Cards dinos = {dinos} />
    </div>
  );
}

export default PlanningHunt

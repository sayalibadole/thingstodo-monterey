import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Locations from './Locations'
import LocationData from './data';

function App() {
  const [loading, setLoading] = useState(true)
  const [locations, setLocations] = useState([])

  const removeLocation = (id) => {
    const newLocations = locations.filter((location) => location.id !== id)
    setLocations(newLocations)
  }

  useEffect(() => {
    setLoading(false);
    setLocations(LocationData); 
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (locations.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no locations left</h2>
          <button className='btn' onClick={() => setLocations(LocationData)}>
            refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Locations locations={locations} removeLocation={removeLocation} />
    </main>
  )
}

export default App

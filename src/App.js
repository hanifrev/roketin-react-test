import './App.scss';
import DashboardCards from './components/DashboardCards/DashboardCards.js'
import TableComponent from './components/TableComponent/TableComponent.js'

import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [people, setPeople] = useState([])

  const getPeopleData = async () => {
    let response = await axios.get(
      "https://randomuser.me/api/?page=1&results=25&seed=abc"
    );
    setPeople(response.data.results)
  }

  // console.log(people)

  useEffect(() => {
    getPeopleData()
  }, [])
  
  return (
    <div className="App">
    <div className="container">
      <div className="row">
        <div className="col-12">
        </div>
        <div className="col-12">
          <div className="main-container mt-5">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="main-container--title">
                    <h4 className="fw-bold">Member Dashboard</h4>
                  </div>
                </div>
              </div>
            </div>
            <DashboardCards />
            <TableComponent />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;

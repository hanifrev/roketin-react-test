/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */
import "./DashboardCards.scss";
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DashboardCards() {
  const [people, setPeople] = useState([])

  const getPeopleData = async () => {
    let response = await axios.get(
      "https://randomuser.me/api/?page=1&results=25&seed=abc"
    );
    setPeople(response.data.results)
  }

  // console.log(people)
  // age
  const avAge = people.reduce((ac, a) => a.dob.age + ac,0)/people.length

  // registered
  const avReg = people.reduce((ac, a) => a.registered.age + ac,0)/people.length

  // gender
  const mostGen = {}
  const gen = people.map(x =>
      x.gender
    )
  gen.forEach(function(x) { mostGen[x]= (mostGen[x] || 0) +1; })
  const male = mostGen.male
  const female = mostGen.female
  
  // national difference
  const nat = people.map(x =>
      x.nat
    )
  const natDif = [...new Set(nat)].length

  
  useEffect(() => {
    getPeopleData()
  }, [])
  return (
    <div className="r-cards">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="r-card">
              <div className="r-card__content">
                <span className="r-card__content--value">{natDif}</span>
                <span className="r-card__content--title">Different Nationality</span>
              </div>
              <div className="r-card__icon">
                <i className="fas fa-flag"></i>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="r-card">
              <div className="r-card__content">
                <span className="r-card__content--value">{male < female ? "Female" : "Male"}</span>
                <span className="r-card__content--title">Most Gender</span>
              </div>
              <div className="r-card__icon">
                <i className="fas fa-venus"></i>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="r-card">
              <div className="r-card__content">
                <span className="r-card__content--value">~{Math.round(avAge)}</span>
                <span className="r-card__content--title">Average Age</span>
              </div>
              <div className="r-card__icon">
                <i className="fas fa-walking"></i>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="r-card">
              <div className="r-card__content">
                <span className="r-card__content--value">~{Math.round(avReg)} year</span>
                <span className="r-card__content--title">
                  Average Membership
                </span>
              </div>
              <div className="r-card__icon">
                <i className="fas fa-users"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;

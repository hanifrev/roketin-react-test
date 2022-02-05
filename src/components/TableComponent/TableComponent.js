import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './TableComponent.scss'
function TableComponent () {
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
    <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="r-table">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Nationality</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
                {people.map((x, id) => {
                  return (
                  <tr key="index">
                    <>
                    <td>
                      <div className="r-profile-picture">
                        <img src={x.picture.thumbnail} alt="" />
                      </div>
                    </td>
                    <td>
                        <div className="r-table__column">
                          <span className="r-table__column--name">
                            {x.name.first}{" "}{x.name.last}
                          </span>
                          <span className="r-table__column--email">
                            {x.email}
                          </span>
                        </div>
                      </td><td>
                        <div className="r-table__column">
                          <span className="r-table__column--age">{x.dob.age}</span>
                        </div>
                      </td><td>
                        <div className="r-table__column">
                          <span className="r-table__column--gender male">{x.gender}</span>
                        </div>
                      </td><td>
                        <div className="r-table__column">
                          <span className="r-table__column--nationality">
                            <img src={`https://flagcdn.com/16x12/${x.nat.toLowerCase()}.png`} alt="" />
                          </span>
                        </div>
                      </td><td>
                        <div className="r-table__column">
                          <span className="r-table__column--location">
                            {x.location.city}, {x.location.state}, {x.location.country}
                          </span>
                        </div>
                      </td></>
                    </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TableComponent
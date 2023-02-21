import React from "react"
import {useHistory} from "react-router-dom"
import {previous, next, today} from "../utils/date-time"
import ErrorAlert from "../layout/ErrorAlert"
import TableRow from "./TableRow"
import ReservationRow from "./ReservationRow"

/**
 * Defines the dashboard page.
 */
function Dashboard({date, reservations, reservationsError, tables, tablesError}) {
  const history = useHistory()

  /** iterates each reservation and returns a 'ReservationRow' */
  const reservationsJSX = () => {
    return reservations.map((reservation) => <ReservationRow key={reservation.reservation_id} reservation={reservation} />)
  }

  /** iterates each table and returns a 'TableRow' */
  const tablesJSX = () => {
    return tables.map((table) => <TableRow key={table.table_id} table={table} />)
  }

  /** uses:
   * previous() to set the reservations' list date to be the previous day
   * next() to set the reservations' list date to be the following day
   * today() to set reservation's list date to current day
   */
  function handleClick({target}) {
    let newDate
    let useDate

    if (!date) {
      useDate = today()
    } else {
      useDate = date
    }

    if (target.name === "previous") {
      newDate = previous(useDate)
    } else if (target.name === "next") {
      newDate = next(useDate)
    } else {
      newDate = today()
    }

    history.push(`/dashboard?date=${newDate}`)
  }

  return (
    <main>
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <div className="" style={{fontFamily: "Courier", height: "100vh"}}>

      <div>
        <h2 className="font-weight-bold d-flex justify-content-center mb-4">Home</h2>
        
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-xs btn-dark btn-outline-light mx-3 px-3"
            type="button"
            name="previous"
            onClick={handleClick}
          >
            Previous
          </button>
          <button className="btn btn-xs btn-dark btn-outline-light mx-3 px-3" type="button" name="today" onClick={handleClick}>
            Today
          </button>
          <button className="btn btn-xs btn-dark btn-outline-light mx-3 px-3" type="button" name="next" onClick={handleClick}>
            Next
          </button>
        </div>

        <h4 className="mt-4 font-weight-bold d-flex justify-content-center mb-2">{date}</h4>

        <h4 className="mb-4 font-weight-bold">Reservations</h4>

        <ErrorAlert error={reservationsError} />

        <table className="table text-wrap text-center table-hover" style={{margin: "0 auto"}}>
          <thead className="thead-dark">
            <tr className="text-center">
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">People</th>
              <th scope="col">Status</th>
              <th scope="col">Edit</th>
              <th scope="col">Cancel</th>
              <th scope="col">Seat</th>
            </tr>
          </thead>
          <tbody>{reservationsJSX()}</tbody>
        </table>

        <br />
        <br />

        <h4 className="mb-4 font-weight-bold">Tables</h4>

        <ErrorAlert error={tablesError} />

        <table className="table table-hover m-1 text-nowrap mb-4" style={{margin: "0 auto"}}>
          <thead className="thead-dark">
            <tr className="text-center">
              <th scope="col">Table ID</th>
              <th scope="col">Table Name</th>
              <th scope="col">Capacity</th>
              <th scope="col">Status</th>
              <th scope="col">Reservation ID</th>
              <th scope="col">Finish</th>
            </tr>
          </thead>
          <tbody>{tablesJSX()}</tbody>
        </table>

          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard

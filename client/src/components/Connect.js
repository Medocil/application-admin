import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import md5 from "crypto-js/md5";

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  withCredentials: true,
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
    'cache-control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  },
})

export default function Connect() {
  const [submit, setsubmit] = useState(false)

  
  return (
    <>
      <div className="container">
        <div className="row rounded border">

          <div className="col-sm-6 bg-white ">
            <div className="mt-5">
              <button className=" btn btn-secondary ">  Go Back </button>
              <span className=""> Have an account? <a className="pt-5" href=""> Sign In  </a></span>
            </div>

            <h1>Sign Up to Medocil </h1>
            <div className="form-group">
              <br></br>
              <label for="">FirstName</label>
              <br></br>
              <input type="text" className="form-control " name="" id="txt" aria-describedby="helpId" placeholder="Firstname" />
            </div>

            <div className="form-group">
              <label for="">LastName</label>
              <br></br>
              <input type="text" className="form-control" name="" id="txt" aria-describedby="helpId" placeholder="LastName" />
            </div>

            <div className="form-group">
              <label for="">Email</label>
              <br></br>
              <input type="text" className="form-control" name="" id="txt" aria-describedby="helpId" placeholder="Email" />
            </div>

            <div className="form-group">
              <label for="">Password</label>
              <br></br>
              <input type="password" className="form-control" name="" id="txt" placeholder="Password" />
            </div>
            <div>
              <button type="button" className="btn btn-primary mb-5">Sign Up Now</button>
            </div>


          </div>
          <div class="col-sm-6 bg-warning">

          </div>
        </div>
      </div>

    </>
  )
}

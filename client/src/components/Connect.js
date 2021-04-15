import React, {useState, useEffect} from 'react'
import axios from 'axios'
// import md5 from "crypto-js/md5";

export default function Connect() {
  const [submit, setsubmit] = useState(false)
  
  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      if (submit === true) {
        
        // var USERNAME = document.getElementById('username').value
        // var PASSWORD_TMP = document.getElementById('password').value
        
        // var PASSWORD = md5(PASSWORD_TMP).toString()
                
        axios.post(``)
        .then(res => {
          sessionStorage.setItem('token', res.data.token)
          window.location.href = "/"
        })
        .catch(error => {
          console.log(error.response.data.errors[0].text)
          alert(error.response.data.errors[0].text)
          setsubmit(false)
        });
      }
    }
    else {
      window.location.href = "/"
    }
    
  }, [submit])

  function handleSubmit(e) {
    e.preventDefault()
    setsubmit(true);
  }

   return (
<>

       <form>
       <h2> LOGIN</h2>
        <div className="field-group">
         
          <label>Username</label>
      <input type="text" name="username" id="username"></input>
      </div>
      <div className="field-group">
          <label>Password</label>
      <input type="password" name="password" id="password"></input>
      </div>
      <input type="submit" value='Se connecter' onClick={handleSubmit}></input> 
 
    </form>
  </> 
    )
}
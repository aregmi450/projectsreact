import React, {useState} from 'react';
import './App.css';
import axios from 'axios'


function App() {   

  const [username, setusername] = useState('')
  const[password, setpassword] = useState('')
  function login(event){
    event.preventDefault()
    var user={
      username:username,
      password:password
    }

    axios.post('/login', user)
    .then(res=>{alert(res.data)})
    .catch(err=>{console.log(err)})
  }
  return (
    <div className="App">
      <h1>Connecting React App to Node</h1>

      <form action="">

        <input type="text" placeholder="username" value={username}
        onChange={(e)=>{setusername(e.target.value)}}/>
<br></br>
        <input type="text" placeholder="password"
        value={password} 
        onChange={(e) => { setpassword(e.target.value) }}/>

<br></br>
        <button onClick={login}>LOGIN</button>
      </form>
      
    </div>
  );
}

export default App;

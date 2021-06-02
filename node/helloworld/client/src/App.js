import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  function getdatafromnode(){

    //fetch data from axios 
    axios.get('/players')
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
  }
  return (
    <div className="App">
      <h1>Connecting React App to Node</h1>

      <button onClick={getdatafromnode}>Get Data from backend</button>
    </div>
  );
}

export default App;

//API-key:4b5831d4-1092-4e16-ad54-794a8981ffc6
import './App.css';
import axios from 'axios';

function App() {
  axios.defaults.headers['Authorization']='Bearer 4b5831d4-1092-4e16-ad54-794a8981ffc6'
  axios.get("https://api.coincap.io/v2/assets").then(a=>{console.log(a.data)}).catch(e=>{console.log(e)})
  return (
    <div className="App">
    
    </div>
  );
}

export default App;

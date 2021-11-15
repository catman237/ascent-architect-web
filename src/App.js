import "./App.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import TrainingForm from "./Components/TrainingForm";
import TrainingCardContainer from './Components/TrainingCardContainer'

function App() {
  const baseURL = 'http://localhost:3000/dummyData.json'
  const [data, setData] = useState([]);

  useEffect(() => {
   axios.get(baseURL)
   .then(res => setData(res.data))
  },[])

  return (
    <div className="App">
      <Header />
      <TrainingForm />
       {!data && <TrainingCardContainer data={data}/>}
    </div>
  );
}

export default App;

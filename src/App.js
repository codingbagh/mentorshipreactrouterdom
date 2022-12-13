
import { BrowserRouter as Kelvin,Route,Routes,Link } from "react-router-dom";
import About from "./Routes/About";
import Home from "./Routes/Home";

const App = ()=>{
return(
<Kelvin>
<div>
    <ul style={{display:"flex",gap:"10px"}}>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
    </ul>
</div>

<Routes>
<Route  path="/" element={<Home/>}/>
<Route path="/About" element={<About/>}/>

</Routes>
</Kelvin>

)

}

export default App;
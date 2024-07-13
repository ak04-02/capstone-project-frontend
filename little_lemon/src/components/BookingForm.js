import { useState } from "react";
//import Result from "./Resulting.js";
import {Link,Outlet} from "react-router-dom";
function Booking()
{
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
}
const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
}
return (
    <form onSubmit={handleSubmit}>
    <div class="container">  
    <center>  <h1>Reservation Form</h1> </center>  
    <label> Name </label>   
    <input type="text" name="name" placeholder= "Name" size="15"value={inputs.name || ""} onChange={handleChange} required />
    <label> No. of persons:</label>   
    <input type="number" name="number" placeholder= "1" size="15" required value={inputs.number || ""} 
          onChange={handleChange}/>    
    <div>  
    <label>   
    Time:  
    </label>   
    <select>  
    <option >9:00a.m.</option>  
    <option>10:00a.m.</option>  
    <option>11:00a.m.</option>  
    <option >12:00p.m.</option>  
    <option >1:00p.m.</option>  
    <option >2:00p.m.</option>  
    <option>3:00p.m.</option>
    <option >4:00p.m.</option>
    <option >5:00p.m.</option>
    <option >6:00p.m.</option> 
    <option >7:00p.m.</option>
    </select>  
    </div>  
    <div>  
    <label>   
    Gender :  
    </label>  
    <input type="radio" value="Male" name="gender" checked /><label> Male  </label>  
    <input type="radio" value="Female" name="gender"/><label> Female   </label> 
    <input type="radio" value="Other" name="gender"/> <label>Other  </label> 
    </div>  
    <label>   
    Phone :  
    </label>     
    <input type="text" name="phone" placeholder="phone no." size="10" required value={inputs.phone || ""} 
          onChange={handleChange}/>  
          <label>
    Current Address :  </label> 
    <textarea cols="80" rows="5" placeholder="Current Address"  required >  
    </textarea>  
    <label for="email">Email</label>  
    <input type="text" placeholder="Enter Email" name="email" required value={inputs.email || ""} 
          onChange={handleChange}/>  
    
    <button type="submit"><Link to="/Resulting"><div class="button">Reserve</div></Link><Outlet/>  </button> 
    </div> 
    
    
    </form>
    )
}
export default Booking;

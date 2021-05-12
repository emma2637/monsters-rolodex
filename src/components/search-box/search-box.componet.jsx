import {React  } from "react";
import './search-box.style.css';


//functional component, dont have access to state , or lifecycle methods, smaller 

export const SearchBox = ({placeholder,handleChange}) =>(
<input  className='search'
        type='search' 
        placeholder={placeholder}
        onChange={handleChange}>
        </input>
)
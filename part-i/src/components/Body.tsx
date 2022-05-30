import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "./Card";

function Body() {
  const [data,setData]=useState([])
  const get=()=> {
    axios.get("http://localhost:8080/products").then(({data})=>{
    //  console.log("fetch",data)
      setData(data)
    })
    
  }
  useEffect(()=> {
    // console.log("prev",data)
    get()
    // console.log("post",data)
  },[])
  return (
    <div className="container">
      {/* Iterate over data and show `Card` here */}
     {
        data.map((e,i)=>{
          return(
            <Card  key={i} {...e}/>
          )
        })
     }
    </div>
  );
}

export { Body };

import { useState, useEffect } from "react";

const useFetch = (url)=>{
   const [isPending,setisPending] = useState(true);
   const [error,seterror] = useState(false);
   const [data, setdata] = useState([]);
   useEffect(()=>{
        check()
},[url])
const check =  async () => {
    const res = await  fetch(url)
       .then(res =>{
        
           if(!res.ok){
               throw Error("No record");  
           }
           return res.json();
       })
       .then(data =>{
           setdata(data.products);
           setisPending(null);
           seterror(null);
       })  
       .catch(err =>{
           if(err.name === "AbortError"){
               console.log('Cleaned');
           }
           else{
               setisPending(null);
               seterror(err.message);
           }
           
       })}
   return { data ,isPending, error};
   }

   export default useFetch;
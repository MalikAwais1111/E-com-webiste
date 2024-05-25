import { useState, useEffect } from "react";

const useFetch = (url) => {
   const [isPending, setIsPending] = useState(true);
   const [error, setError] = useState(false);
   const [data, setData] = useState([]);

   useEffect(() => {
       const check = async () => {
           try {
               const response = await fetch(url);
               if (!response.ok) {
                   throw new Error("No record");
               }
               const result = await response.json();
               setData(result.products);
               setIsPending(false);
               setError(null);
           } catch (err) {
               if (err.name === "AbortError") {
                   console.log('Cleaned');
               } else {
                   setIsPending(false);
                   setError(err.message);
               }
           }
       };

       check();
   }, [url]); // Dependency array includes 'url' only

   return { data, isPending, error };
};

export default useFetch;

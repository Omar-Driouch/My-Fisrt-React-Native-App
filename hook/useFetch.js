import { useState,useEffect } from "react";
import axios from "axios";
//import {RAPID_API_KEY} from "@env"

//const RapidAPIkey = RAPID_API_KEY;

const useFetch =(endpoint,query) =>{ 
    const [data,setData] = useState([]);
    const    [isLoading,setIsLoading] = useState(false);
    const   [error,setError] = useState(null);
     

    //const axios = require("axios");

    const options = {
      method: 'GET',
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      params: {...query},
      headers: {
        'X-RapidAPI-Key': 'da93afcebbmsh3684c2a7fb5761fp121046jsn8c31019a3703',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

 const fetchData = async () => {
    isLoading=true;

    try {
        const response = await axios.request(options); 
        setData (response .data.data );
        setIsLoading(false)


    }catch(error){
        setError(error);
        alert('There is an error while loading data ')
    }finally{setIsLoading(false);}
 }

useEffect(()=> {
     fetchData();
}, [ ]);

const refetch=()=>{setIsLoading(true);fetchData();  }

return{data,isLoading,error,refetch};


}
export default useFetch;
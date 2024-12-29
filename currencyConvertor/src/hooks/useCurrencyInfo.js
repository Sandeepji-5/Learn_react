import { useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() =>{
        fetch(`https://v6.exchangerate-api.com/v6/939eb32d43a08d300023f9e4/latest/${currency}.json`)
        .then((res) => res.json())
        .then((res)=> setData(res[currency]))
        console.log(data)
        
    }, [currency])
   
    return data;
}
export default  useCurrencyInfo;
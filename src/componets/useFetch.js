import { useEffect, useState } from "react"

function useFetch(url,numOfImgs){
    const [data, setData] = useState(false);
    const [error, setError] = useState(false);
    const pexelsApiKey = "563492ad6f917000010000013d01ed7832694433a2a1d53547543e30"
    useEffect(()=>{
        fetch(url, {
            method: "GET",
            headers: { accept: "application/json", authorization: pexelsApiKey }
        })
        .then((res)=>{
            if(!res.ok) throw Error;
            return res.json()
        })
        .then((data)=>{
            if(data.photos.length){
                setData(data.photos);
                setError(false)
            }
            else{
                setData(false)
                setError(true)
            }
        })
        .catch(()=>{
            setData(false)
            setError(true)
        } )
       
    },[url,numOfImgs])

    return {data, error}

}
export default useFetch

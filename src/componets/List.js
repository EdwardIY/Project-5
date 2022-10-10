import { useState } from "react"
import MakeList from "./MakeList"
import Search from "./Search"

function List(){
    const [url, setUrl] = useState('https://api.pexels.com/v1/curated?per_page=12');
    let [numOfImgs, setNumOfImgs] = useState(12);
    const [img, setImg] = useState('')


    function searchUrl(img){
        setImg(img)
        setNumOfImgs(12)
        setUrl(`https://api.pexels.com/v1/search?query=${img}&per_page=${numOfImgs}`)
    }

    return (
        <div className="container">
            <div className="top">
            <h1 className="logo">Photo Gallery</h1>
            <Search searchUrl={searchUrl}  />
            </div>
            <MakeList img = {img} numOfImgs = {numOfImgs} url = {url} setNumOfImgs = {setNumOfImgs}  setUrl = {setUrl} />
        </div>
    )

}
export default List
import useFetch from "./useFetch"

function MakeList({url, numOfImgs, setUrl, setNumOfImgs, img}){
    console.log(url)
const {data, error} = useFetch(url,numOfImgs);

function loadMore(){
    setNumOfImgs(numOfImgs+=12)
    if(img)setUrl(`https://api.pexels.com/v1/search?query=${img}&per_page=${numOfImgs}`);
    else setUrl(`https://api.pexels.com/v1/curated?per_page=${numOfImgs}`)
}
return (
    
    <>
     {data && ( <div>
        <div className="gallery">
            {
                 data.map((photo) => ( 
                    <div key={Math.floor(Math.random()* 100000)} className="item">
                        <img src={photo.src.medium}/>
                        <h3>{photo.photographer}</h3>
                    </div>
            ))
            }
           
     </div>
            <button  onClick={()=> loadMore()} className="load-more">Load More</button>
     </div> 
    )}

    {error &&  <div style={{opacity: "1" }} className="noR">No images found..</div>}
    </>
   
    
)

}

export default MakeList
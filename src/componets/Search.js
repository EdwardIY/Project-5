import { useState } from "react"

function Search({searchUrl}){
  const [value, setValue] = useState('')
  function submit(e){
    e.preventDefault()
    searchUrl(value)
  }

    return (
        <form onSubmit={(e)=> submit(e)}>
          <input onChange={(e)=> setValue(e.target.value)} required type="text" placeholder="Search" />
        </form>
    )
}
export default Search
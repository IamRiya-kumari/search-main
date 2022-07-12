import axios from 'axios'
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';






function App() {


  
  const [name,setName] = useState("")

  const [movie, setMovie] = useState([])

  const changeName =(event) =>{
    setName(event.target.value)

  }

  const getMovie =(e) =>{
    e.preventDefault();

    axios.get(`https://www.omdbapi.com/?s=${name}&apikey=4d923cfc`)
    .then((response) =>{
      console.log(response);
      setMovie(response.data.Search)
    })
  }
  return (
    <>
  
      
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className ="navbar-brand">Movie Library App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <a className ="nav-link" href ="#">Register</a>
            <a className ="nav-link" href ="#">Login</a>
          
            </ul>
            
            <form className="d-flex" onSubmit={getMovie}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value ={name} onChange ={changeName}/>
              <button className="btn btn-outline-secondary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

   
      <div className ="container my-3">
        <div className ="row">
          {
            movie.map((value,index)=>{
              return(
                <div className ="col-3">
                  <div className="card" style={{width: "18rem"}}>
                    <img src={value.Poster} className="card-img-top" alt="..."/>
                      <div className="card-body">
                      <h4 className="card-text">{value.Title}</h4>
                        <h5 className =" card-title">{value.Year}</h5>
                        
                      </div>
                    </div>
                  </div>  

              )

            })
            }
          
        </div>
      </div>
      
    </>
  
  )
}
export default App
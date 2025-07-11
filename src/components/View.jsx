import React, { useState } from 'react'
import BarNav from './BarNav'

const View = () => {
    const[products,changeProduct]=useState(
        [
            {"product":"iphone","description":"houseuse","poster":"https://m.media-amazon.com/images/I/61Ony8rgwEL._SX679_.jpg"},
            {"product":"ipad","description":"electronics","poster":"https://m.media-amazon.com/images/I/814P0ojHArL._SL1500_.jpg"},
            {"product":"macbook","description":"laptop","poster":"https://m.media-amazon.com/images/I/71sKGiKAu1L._SX679_.jpg"},
            {"product":"apple watch","description":"watch","poster":"https://m.media-amazon.com/images/I/61MVBqkV5YL._SL1500_.jpg"},
            {"product":"earbud","description":"eletronic","poster":"https://m.media-amazon.com/images/I/51oMWaW7tKL._SX679_.jpg"},
        ]
    )
  return (
    
    <div>
        <BarNav/>
        <h3 align="center">Product Image</h3>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="row">
                        {products.map(
                            (value,index)=>{
                                return(
                                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <br></br>
                                <div class="card">
                                    <img src={value.poster} class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h5 class="card-title">{value.product}</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                </div>
                        </div>  
                                )
                            }
                        )}
                    
                        
                        
                        
                        
                        
                        
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default View
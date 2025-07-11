import React from 'react'
import BarNav from './BarNav'

const Search = () => {
  return (
    <div>
        <BarNav/>
        <h3 align="center">Product Search</h3>
        <div className="container">
            <div className="row">
                <div className="col">
                    <row>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                             <label htmlFor="" className='form-label'>Product Name</label>
                             <input type="text" className='form-control' />
                                
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <br></br>
                             <button className="btn btn-success">Search</button>
                        </div>
                    </row>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search
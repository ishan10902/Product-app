import React from 'react'
import { Link } from 'react-router-dom'
import BarNav from './BarNav'

const AddProduct = () => {
    return (
        <div>
            <BarNav/>
            <h1 align="center">PRODUCT APP</h1>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className='form-label'>Product Name</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className='form-label'>Address</label>
                                <br></br>
                                <textarea name="description" id="" className='form-control'></textarea>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className='form-label'>Warrenty</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className='form-label'>Expiry date</label>
                                <input type="date" className='form-control' />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <br></br>
                                <label htmlFor="" className='form-label'>manufacturing date</label>
                                <input type="date" className='form-control' />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <br></br>
                                <label htmlFor="" className='form-label'>Price</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <br></br>

                                <label htmlFor="" className='form-label'>Product photo</label>
                                <input type="file" className='form-control' />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <br></br>
                                <label htmlFor="" className='form-label'>Customer care number</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <br></br>
                                <button className="btn btn-success">SUBMIT</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddProduct






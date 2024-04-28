import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { create_product, get_all_product } from '../../../../redux/features/product/productSlice';

function Create() {

    const dispatch = useDispatch();

    const createData = async (event) => {
        event.preventDefault();
        const form = event.target;
        let form_data = new FormData(form);
        await dispatch(create_product(form_data));
        await dispatch(get_all_product());
    };


    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3>Create Data</h3>
            </center>
            <div>
                <form method='POST' onSubmit={createData}>
                    <div className="form-group p-2">
                        <label >Title</label>
                        <input type="text" name='title' className="form-control" id="title" />
                    </div>
                    <div className="form-group p-2">
                        <label >Product Code</label>
                        <input type="text" name='code' className="form-control" id="code" />
                    </div>
                    <div className="form-group p-2">
                        <label >Product price</label>
                        <input type="number" name='price' className="form-control" id="price" />
                    </div>

                    <button type="submit" class="btn btn-primary m-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create
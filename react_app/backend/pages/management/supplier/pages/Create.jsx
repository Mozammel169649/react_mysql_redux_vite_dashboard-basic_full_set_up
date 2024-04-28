import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { create_supplier, get_all_supplier } from '../../../../redux/features/supplier/supplierSlice';

function Create() {

    const dispatch = useDispatch();

    const createData = async (event) => {
        event.preventDefault();
        const form = event.target;
        let form_data = new FormData(form);
        await dispatch(create_supplier(form_data));
        await dispatch(get_all_supplier());
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
                        <input type="text" name='name' className="form-control" id="name" />
                    </div>
                    <div className="form-group p-2">
                        <label >Product Code</label>
                        <input type="email" name='email' className="form-control" id="email" />
                    </div>
                    <div className="form-group p-2">
                        <label >Product price</label>
                        <input type="number" name='number' className="form-control" id="number" />
                    </div>

                    <button type="submit" class="btn btn-primary m-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { create_category, get_all_category } from '../../../../redux/features/category/categorySlice';


function Create() {

    const dispatch = useDispatch();

    const createData = async (event) => {
        event.preventDefault();
        const form = event.target;
        let form_data = new FormData(form);
        await dispatch(create_category(form_data));
        await dispatch(get_all_category());
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
                    <button type="submit" class="btn btn-primary m-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create
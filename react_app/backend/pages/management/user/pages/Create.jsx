import React, { useState } from 'react'
import { create_user, get_all_user } from '../../../../redux/features/user/userSlice';
import { useDispatch } from 'react-redux';

function Create() {

    const dispatch = useDispatch();

    const createData = async (event) => {
        event.preventDefault();
        const form = event.target;
        let form_data = new FormData(form);
        await dispatch(create_user(form_data));
        await dispatch(get_all_user());
    };


    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3>Create Data</h3>
            </center>
            <div>
                <form method='POST' onSubmit={createData}>
                    <div className="form-group p-2">
                        <label >Name</label>
                        <input type="text" name='name' className="form-control" id="name" />
                    </div>
                    <div className="form-group p-2">
                        <label >Email</label>
                        <input type="email" name='email' className="form-control" id="email" />
                    </div>

                    <button type="submit" class="btn btn-primary m-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create
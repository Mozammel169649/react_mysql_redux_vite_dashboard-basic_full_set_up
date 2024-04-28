import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get_all_user, get_single_user, update_user } from '../../../../redux/features/user/userSlice';
import { useParams } from 'react-router';

function Edit() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [loading, setLoding] = useState(false)
    const singleUser = useSelector(state => state.users.singleUser);


    useEffect(() => {
        const loadData = async () => {
            await dispatch(get_single_user(id));
            setLoding(true);
        };
        loadData();
    }, []);



    if (loading == false) {
        return (
            <div>
                <p> loading.....</p>
            </div>
        )
    }

    const updateData = async (event) => {
        event.preventDefault();
        const form = event.target;
        let form_data = new FormData(form);
        form_data.append('id', id);
        await dispatch(update_user(form_data));
        await dispatch(get_all_user());
    };


    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3>Update Data</h3>
            </center>
            <div>
                <form onSubmit={updateData} >
                    <div className="form-group p-2">
                        <label >Name</label>
                        <input type="text" defaultValue={singleUser.name} name="name" className="form-control" id="name" />
                    </div>
                    <div className="form-group p-2">
                        <label >Email</label>
                        <input type="email" defaultValue={singleUser.email} name="email" className="form-control" id="email" />
                    </div>

                    <button type="submit" class="btn btn-primary m-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Edit
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import setup from '../config/setup';
import { get_all_category, get_single_category, update_category } from '../../../../redux/features/category/categorySlice';

function Edit() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [loading, setLoding] = useState(false)
    const singleCategory = useSelector(state => state.categorys.singleCategory);


    useEffect(() => {
        const loadData = async () => {
            await dispatch(get_single_category(id));
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
        await dispatch(update_category(form_data));
        await dispatch(get_all_category());
    };


    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3>Update {setup.title}</h3>
            </center>
            <div>
                <form onSubmit={updateData} >
                    <div className="form-group p-2">
                        <label >Title</label>
                        <input type="text" defaultValue={singleCategory.title} name="title" className="form-control" id="title" />
                    </div>

                    <button type="submit" class="btn btn-primary m-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Edit
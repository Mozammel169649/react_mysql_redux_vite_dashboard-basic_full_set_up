import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import setup from '../config/setup';
import { get_all_supplier, get_single_supplier, update_supplier } from '../../../../redux/features/supplier/supplierSlice';

function Edit() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [loading, setLoding] = useState(false)
    const singleSupplier = useSelector(state => state.suppliers.singleSupplier);


    useEffect(() => {
        const loadData = async () => {
            await dispatch(get_single_supplier(id));
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
        await dispatch(update_supplier(form_data));
        await dispatch(get_all_supplier());
    };


    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3>Update {setup.title}</h3>
            </center>
            <div>
                <form onSubmit={updateData} >
                    <div className="form-group p-2">
                        <label >Name</label>
                        <input type="text" defaultValue={singleSupplier.name} name="name" className="form-control" id="name" />
                    </div>
                    <div className="form-group p-2">
                        <label >Email</label>
                        <input type="text" defaultValue={singleSupplier.email} name="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group p-2">
                        <label >Number</label>
                        <input type="text" defaultValue={singleSupplier.number} name="number" className="form-control" id="number" />
                    </div>

                    <button type="submit" class="btn btn-primary m-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Edit
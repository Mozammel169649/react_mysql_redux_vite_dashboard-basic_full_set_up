import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { get_all_product, get_single_product, update_product } from '../../../../redux/features/product/productSlice';
import setup from '../config/setup';

function Edit() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [loading, setLoding] = useState(false)
    const singleProducts = useSelector(state => state.products.singleProduct);


    useEffect(() => {
        const loadData = async () => {
            await dispatch(get_single_product(id));
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
        await dispatch(update_product(form_data));
        await dispatch(get_all_product());
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
                        <input type="text" defaultValue={singleProducts.title} name="title" className="form-control" id="title" />
                    </div>
                    <div className="form-group p-2">
                        <label >Code</label>
                        <input type="text" defaultValue={singleProducts.code} name="code" className="form-control" id="code" />
                    </div>
                    <div className="form-group p-2">
                        <label >Price</label>
                        <input type="text" defaultValue={singleProducts.price} name="price" className="form-control" id="price" />
                    </div>

                    <button type="submit" class="btn btn-primary m-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Edit
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import setup from '../config/setup';
import { get_single_product } from '../../../../redux/features/product/productSlice';
function View() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const singleProducts = useSelector(state => state.products.singleProduct);
  
    useEffect(() => {
      dispatch(get_single_product(id));
    }, []);


    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3> {setup?.title} Detalse </h3>
            </center>
            <div className='text-center mt-4 '>
                <p>Title : {singleProducts?.title}</p>
                <p>Code : {singleProducts?.code} </p>
                <p>Price : {singleProducts?.price} </p>
            </div>

        </div>
    )
}

export default View
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import setup from '../config/setup';
import { get_single_supplier } from '../../../../redux/features/supplier/supplierSlice';
function View() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const singleSupplier = useSelector(state => state.suppliers.singleSupplier);
  
    useEffect(() => {
      dispatch(get_single_supplier(id));
    }, []);


    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3> {setup?.title} Detalse </h3>
            </center>
            <div className='text-center mt-4 '>
                <p>Name : {singleSupplier?.name}</p>
                <p>Email : {singleSupplier?.email} </p>
                <p>Number : {singleSupplier?.number} </p>
            </div>

        </div>
    )
}

export default View
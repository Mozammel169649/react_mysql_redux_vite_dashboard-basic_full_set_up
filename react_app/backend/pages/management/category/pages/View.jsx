import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import setup from '../config/setup';
import { get_single_category } from '../../../../redux/features/category/categorySlice';
function View() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const singleCategory = useSelector(state => state.categorys.singleCategory);
  
    useEffect(() => {
      dispatch(get_single_category(id));
    }, []);


    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3> {setup?.title} Detalse </h3>
            </center>
            <div className='text-center mt-4 '>
                <p>Title : {singleCategory?.title}</p>
            </div>

        </div>
    )
}

export default View
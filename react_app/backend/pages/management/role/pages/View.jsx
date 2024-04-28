import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import setup from '../config/setup';
import { get_single_role } from '../../../../redux/features/role/roleSlice';
function View() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const singleRole = useSelector(state => state.roles.singleRole);
  
    useEffect(() => {
      dispatch(get_single_role(id));
    }, []);


    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3> {setup?.title} Detalse </h3>
            </center>
            <div className='text-center mt-4 '>
                <p>Title : {singleRole?.title}</p>
            </div>
        </div>
    )
}

export default View
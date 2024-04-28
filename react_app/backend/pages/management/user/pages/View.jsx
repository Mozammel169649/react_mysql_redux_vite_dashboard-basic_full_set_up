import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get_single_user } from '../../../../redux/features/user/userSlice';
import { useParams } from 'react-router';
function View() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const singleUser = useSelector(state => state.users.singleUser);
  
    useEffect(() => {
      dispatch(get_single_user(id));
    }, []);

    return (
        <div className='col-md-6 mx-auto'>
            <center>
                <h3> User Detalse </h3>
            </center>
            <div className='text-center mt-4 '>
                <p>UserName : {singleUser.name}</p>
                <p>Email : {singleUser.email} </p>
            </div>

        </div>
    )
}

export default View
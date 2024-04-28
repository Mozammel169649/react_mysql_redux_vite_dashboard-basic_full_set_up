
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { delete_user, get_all_user } from '../../../../redux/features/user/userSlice';
import { Link } from 'react-router-dom';
import setup from '../config/setup';
function All() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.users.users);

  useEffect(() => {
    dispatch(get_all_user());
  }, []);

  const deleteUser = async (id) =>{
    await dispatch(delete_user(id));
    await dispatch(get_all_user());
  }
  
  return (
    <div>
      <div>
      <h5> All {setup.title}</h5>
        <div>
        <Link to={'create'} className='btn btn-info m-2'>Create</Link>
      </div>
      </div>
      <div>
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {
              user.length &&
              user?.map(ele =>
                <tr>
                  <td>{ele?.name}</td>
                  <td>{ele?.email}</td>
                  <td class="justify-content-center"  >
                    <Link to={`view/${ele?.id}`} className='btn btn-info m-2'>View</Link>
                    <Link to={`edit/${ele?.id}`} className='btn btn-warning m-2'>Edit</Link>
                    <button  onClick={() =>deleteUser(ele?.id)} className='btn btn-danger m-2'>Delete</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default All
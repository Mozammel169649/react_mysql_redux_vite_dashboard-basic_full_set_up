
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import setup from '../config/setup';
import { delete_supplier, get_all_supplier } from '../../../../redux/features/supplier/supplierSlice';

function All() {

  const dispatch = useDispatch();
  const supplier = useSelector(state => state.suppliers.suppliers);

  useEffect(() => {
    dispatch(get_all_supplier());
  }, []);

  const deleteData = async (id) =>{
    await dispatch(delete_supplier(id));
    await dispatch(get_all_supplier());
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
              <td>Number</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {
              supplier.length &&
              supplier?.map(ele =>
                <tr>
                  <td>{ele?.name}</td>
                  <td>{ele?.email}</td>
                  <td>{ele?.number}</td>
                  <td class="justify-content-center"  >
                    <Link to={`view/${ele?.id}`} className='btn btn-info m-2'>View</Link>
                    <Link to={`edit/${ele?.id}`} className='btn btn-warning m-2'>Edit</Link>
                    <button  onClick={() =>deleteData(ele?.id)} className='btn btn-danger m-2'>Delete</button>
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
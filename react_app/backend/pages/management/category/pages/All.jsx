
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import setup from '../config/setup';
import { delete_category, get_all_category } from '../../../../redux/features/category/categorySlice';

function All() {

  const dispatch = useDispatch();
  const category = useSelector(state => state.categorys.categorys);

  useEffect(() => {
    dispatch(get_all_category());
  }, []);

  const deleteData = async (id) =>{
    await dispatch(delete_category(id));
    await dispatch(get_all_category());
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
              <td>Title</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              category.length &&
              category?.map(ele =>
                <tr>
                  <td>{ele?.title}</td>
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
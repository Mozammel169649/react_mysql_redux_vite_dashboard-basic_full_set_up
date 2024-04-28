
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { delete_product, get_all_product } from '../../../../redux/features/product/productSlice';
import { Link } from 'react-router-dom';
import setup from '../config/setup';

function All() {

  const dispatch = useDispatch();
  const product = useSelector(state => state.products.products);

  useEffect(() => {
    dispatch(get_all_product());
  }, []);

  const deleteData = async (id) =>{
    await dispatch(delete_product(id));
    await dispatch(get_all_product());
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
              <td>Code</td>
              <td>Price</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {
              product.length &&
              product?.map(ele =>
                <tr>
                  <td>{ele?.title}</td>
                  <td>{ele?.code}</td>
                  <td>{ele?.price}</td>
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
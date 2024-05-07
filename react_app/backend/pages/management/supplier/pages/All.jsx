import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import setup from '../config/setup';
import { delete_supplier, get_all_supplier, get_count_supplier, get_paginate_supplier } from '../../../../redux/features/supplier/supplierSlice';
import Pagination from '../../../Pagination';

function All() {

  const dispatch = useDispatch();
  
  const paginateSupplier = useSelector(state => state.suppliers.paginateData);
  const supplierCount = useSelector(state => state.suppliers.count);  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const handlePageChange = async(newPage) => {
    setCurrentPage(newPage)
    dispatch(get_paginate_supplier({page:newPage, limit:itemsPerPage}));
  };
 
  useEffect(async() => {
    dispatch(get_count_supplier());
    dispatch(get_paginate_supplier({page:currentPage, limit:itemsPerPage}));
  }, []);

  const totalPages = Math.ceil(supplierCount / itemsPerPage);
  const handleSelectChange =async (event) => {
    const selectedValue = parseInt(event.target.value);
    setItemsPerPage(selectedValue);
    dispatch(get_paginate_supplier({page:1, limit:selectedValue}));
  };
  const deleteData = async (id) => {
    dispatch(delete_supplier(id));
    dispatch(get_all_supplier());
  }

  return (
    <div>
      <div>
        <h5> All {setup.title}</h5>
        <div className='d-flex'>
          <div>
            <Link to={'create'} className='btn btn-info m-2'>Create</Link>
          </div>
          <div className='p-2'>
            <select id="dropdown" value={itemsPerPage} onChange={handleSelectChange}>
              <option Value={3}>3</option>
              <option Value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div>
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
              paginateSupplier.length &&
              paginateSupplier?.map(ele =>
                <tr>
                  <td>{ele?.name}</td>
                  <td>{ele?.email}</td>
                  <td>{ele?.number}</td>
                  <td class="justify-content-center"  >
                    <Link to={`view/${ele?.id}`} className='btn btn-info m-2'>View</Link>
                    <Link to={`edit/${ele?.id}`} className='btn btn-warning m-2'>Edit</Link>
                    <button onClick={() => deleteData(ele?.id)} className='btn btn-danger m-2'>Delete</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
      <div className="pt-3">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={handlePageChange}
        />
      </div>

    </div>
  )
}

export default All
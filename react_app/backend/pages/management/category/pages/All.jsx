
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import setup from '../config/setup';
import { delete_category, get_all_category } from '../../../../redux/features/category/categorySlice';
import Pagination from '../../../Pagination';

function All() {

  const dispatch = useDispatch();
  const category = useSelector(state => state.categorys.categorys);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, settemsPerPage] = useState(3); 
  
  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = indexOfFirstItem + itemsPerPage;
  const currentItems = category.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(category.length / itemsPerPage);
  
  const handleSelectChange = (event) => {
    const selectedValue = parseInt(event.target.value);
    settemsPerPage(selectedValue);
  };
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
              <td>Title</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {
              currentItems.length &&
              currentItems?.map(ele =>
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
      <div className="pt-3">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  )
}

export default All
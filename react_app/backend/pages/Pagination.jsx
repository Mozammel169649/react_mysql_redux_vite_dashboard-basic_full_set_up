import React from 'react';

const Pagination = (
  { totalPages,
  currentPage,
  setCurrentPage }) => {

  var crt = currentPage;
  var totalePag = totalPages;
  // var totalePag = totalPages + 10;
  const handlePrevious = (event) => {
    if (crt > 1) {
      crt = crt - 1
      setCurrentPage(crt)
    } else setCurrentPage(crt)
  };

  const handleNext = () => {
    if (crt < totalePag) {
      crt = crt + 1
      setCurrentPage(crt)
    } else setCurrentPage(crt)
  };

  const curtPage = (index) => {
    crt = index
    setCurrentPage(crt)
  };

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li   onClick={handlePrevious} className="page-item"><a className="page-link">Previous</a></li>
          {Array.from({ length: totalePag }, (_, index) =>
        (
          <li className='page-item'
            key={index}
            onClick={async () => await curtPage(index + 1)}
          >
            <a className="page-link">{index + 1}</a>
          </li>
        )
        )}
          <li onClick={handleNext} className="page-item"><a className="page-link">Next</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;

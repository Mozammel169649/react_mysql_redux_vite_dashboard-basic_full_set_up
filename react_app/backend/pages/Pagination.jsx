import React from 'react';

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Previous
      </button>

      {/* Display page numbers for quick navigation */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </button>
      ))}

      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

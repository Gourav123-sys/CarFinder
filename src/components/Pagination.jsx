const Pagination = ({ currentPage, total, onPageChange }) => {
    const pages = Math.ceil(total / 10);
    return (
      <div className="mt-4 flex gap-2 justify-center">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => onPageChange(i + 1)}
            className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : ""}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;
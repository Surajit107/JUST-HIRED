import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ pageCount, changePage }) => {

    return (
        <>
            <div className="job-list">
                <ReactPaginate
                    previousLabel={<i className="fa-solid fa-angle-left" style={{ color: "#808080" }}></i>}
                    nextLabel={<i className="fa-solid fa-angle-right" style={{ color: "#808080" }}></i>}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"pagination pagination-lg justify-content-end"}    //<ul> tag className
                    pageClassName={"page-item"}     //<li> tag className
                    pageLinkClassName={"page-link"}     //<a> tag className
                    previousClassName={"page-item"}     //className for previousLabel
                    previousLinkClassName={"page-link"}     //Link className for previousLabel
                    nextClassName={"page-item"}     //className for nextLabel
                    nextLinkClassName={"page-link"}     //Link className for nextLabel
                    activeClassName={"active"}
                />
            </div>
        </>
    )
}

export default Pagination
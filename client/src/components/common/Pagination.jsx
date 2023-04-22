import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = () => {
    const [pageNumber, setPageNumber] = useState(0)
    const userPerpage = 3
    const data = [1, 2, 3, 4, 5, 6, 7]
    const pagesVisited = pageNumber * userPerpage
    const list_data = data?.slice(pagesVisited, pagesVisited + userPerpage)
    const pageCount = Math.ceil(list_data.length / userPerpage)

    const changePage = (data) => {
        setPageNumber(data.selected)
    }

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
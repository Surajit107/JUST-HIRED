import React from 'react'

const Pagination = () => {
    return (
        <>
            <div className="job-list">
                <ul className="pagination justify-content-end margin-auto">
                    <li className="page-item"><Link className="page-link pdding-none" to="javascript:void(0);"><i
                        className=" material-icons keyboard_arrow_left_right">keyboard_arrow_left</i></Link></li>
                    <li className="page-item"><Link className="page-link active" to="javascript:void(0);">1</Link></li>
                    <li className="page-item"><Link className="page-link" to="javascript:void(0);">2</Link></li>
                    <li className="page-item"><Link className="page-link" to="javascript:void(0);">3</Link></li>
                    <li className="page-item"><Link className="page-link" to="javascript:void(0);">4</Link></li>
                    <li className="page-item">
                        <Link className="page-link pdding-none" to="javascript:void(0);"> <i
                            className=" material-icons keyboard_arrow_left_right">keyboard_arrow_right</i></Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Pagination
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogs } from '../services/slice/BlogSlice'
import Pagination from '../components/common/Pagination'
import Time from '../util/Time'

const Blog = () => {
    const { blog_data } = useSelector(state => state.blogSlice)
    const dispatch = useDispatch()
    const commentLength = blog_data?.comments?.length

    const hostUrl = process.env.REACT_APP_HOST

    // For Pagination
    const [pageNumber, setPageNumber] = useState(0)
    const userPerpage = 3
    const pagesVisited = pageNumber * userPerpage
    const data = [...blog_data]
    const blogData = data
    const pageCount = Math.ceil(blog_data?.length / userPerpage)
    // For Pagination
    const changePage = (data) => {
        setPageNumber(data?.selected)
    }


    useEffect(() => {
        dispatch(fetchBlogs())
        window.scrollTo(0, 0)
    }, [dispatch, commentLength])

    return (
        <>
            <section id="Blog">
                <div className="vertical-space-100"> </div>
                <div className="vertical-space-101"> </div>
                <div className="container">
                    <h3>Our Latest Blog Posts</h3>
                    <div className="vertical-space-20"></div>
                    {/* <p>Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida sodales luctus nulla</p> */}
                    <div className="vertical-space-50"></div>
                    <div className="row">

                        {
                            blogData?.length > 0 ?
                                blogData?.map(item => {
                                    let createdAt = new Date(item?.createdAt).toLocaleString('en-US', {
                                        month: 'short',
                                        day: '2-digit',
                                        year: 'numeric'
                                    })

                                    return (
                                        <div className="col-lg-4 col-md-6" key={item?._id}>
                                            <Link to={`/blogdetails/${item?._id}`}>
                                                <img src={hostUrl + item?.post_img} className="blog-image" alt="" />
                                            </Link>
                                            <div className="blog-box">
                                                <Link to={`/blogdetails/${item?._id}`} className="font-color-black font-size">{item?.title}</Link>
                                                <p className="float-left font-color-black width">
                                                    <Link to="#!" className="font-color-black font-size-14">
                                                        {createdAt}
                                                    </Link> |
                                                    <Link to="#!" className="font-color-black font-size-14">&nbsp;
                                                        <Time
                                                            createdAt={createdAt}
                                                        />
                                                    </Link>
                                                </p>
                                                <p className="space10">
                                                    {item?.sub_title}
                                                </p>
                                                <div className="vertical-space-20"></div>
                                                <Link to={`/blogdetails/${item?._id}`} className="font-color-orange font-bold">
                                                    Read more<i className="fa fa-long-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                }).reverse().slice(pagesVisited, pagesVisited + userPerpage)
                                :
                                <h1 className='col-md-12 text-center' style={{ fontSize: "30px" }}>No Blogs Are Available For Now !!</h1>
                        }

                        <div className="vertical-space-25"></div>

                        {/* Pagination */}
                        {
                            blogData?.length > 0 ?
                                <Pagination
                                    pageCount={pageCount}
                                    changePage={changePage}
                                />
                                : null
                        }

                    </div>
                </div>
                <div className="vertical-space-60"> </div>
            </section >
        </>
    )
}

export default Blog
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBlogs } from '../services/slice/BlogSlice'
import Pagination from '../components/common/Pagination'

const Blog = () => {
    const { blog_data } = useSelector(state => state.blogSlice)
    const dispatch = useDispatch()

    // console.log(blog_data);

    const hostUrl = process.env.REACT_APP_HOST

    useEffect(() => {
        dispatch(fetchBlogs())
        window.scrollTo(0, 0)
    }, [dispatch])

    return (
        <>
            <section id="Blog">
                <div className="vertical-space-100"> </div>
                <div className="vertical-space-101"> </div>
                <div className="container">
                    <h3>Our Latest Blog Posts</h3>
                    <div className="vertical-space-20"></div>
                    <p>Lorem ipsum tempus amet conubia adipiscing fermentum viverra gravida sodales luctus nulla</p>
                    <div className="vertical-space-50"></div>
                    <div className="row">

                        {
                            blog_data?.map(item => {
                                return (
                                    <div className="col-lg-4 col-md-6" key={item?._id}>
                                        <Link to={`/blogdetails/${item?._id}`}>
                                            <img src={hostUrl + item?.post_img} className="blog-image" alt="" />
                                        </Link>
                                        <div className="blog-box">
                                            <Link to={`/blogdetails/${item?._id}`} className="font-color-black font-size">{item?.title}</Link>
                                            <p className="float-left font-color-black width">
                                                <Link to="#!" className="font-color-black font-size-14">
                                                    {new Date(item?.createdAt).toLocaleString('en-US', {
                                                        month: 'short',
                                                        day: '2-digit',
                                                        year: 'numeric'
                                                    })}
                                                </Link> | <Link to="#!" className="font-color-black font-size-14">11 min Ago</Link>
                                            </p>
                                            <p className="space10"

                                            // style={{
                                            //     maxHeight: "7rem",
                                            //     overflow: "hidden",
                                            //     lineHeight: "1.2rem",
                                            //     textOverflow: "ellipsis",
                                            //     whiteSpace: "nowrap"
                                            // }}
                                            >
                                                {item?.content}
                                            </p>
                                            <div className="vertical-space-20"></div>
                                            <Link to={`/blogdetails/${item?._id}`} className="font-color-orange font-bold">
                                                Read more<i className="fa fa-long-arrow-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        <div className="vertical-space-25"></div>

                        {/* Pagination */}
                        <Pagination data={blog_data} />

                    </div>
                </div>
                <div className="vertical-space-60"> </div>
            </section >
        </>
    )
}

export default Blog
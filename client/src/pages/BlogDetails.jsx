import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const BlogDetails = () => {
    const { blog_id } = useParams()
    const blog_data = JSON.parse(window.localStorage.getItem("blog_data"))
    const posts = blog_data?.posts?.filter(item => item?._id === blog_id)
    // const comments = blog_data?.comments?.filter(item => item?._id === blog_id)
    // console.log(posts[0]);

    const hostUrl = process.env.REACT_APP_HOST

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <section id="intro">
                <div className="carousel-item active">
                    <div className="carousel-background">
                        <img src="/assets/imags/slider/banner4.jpg" alt="" />
                    </div>
                    <div className="carousel-container">
                        <div className="carousel-content">
                            <h2 className="font-color-white">Blog Details</h2>
                            <p className="font-color-white width-100"><Link to="/" className="font-color-white">Home /</Link><a
                                href="/blogs" className="font-color-white"> Blog </a>/ Details
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section id="job-Details">
                <div className="container background-color-full-white job-Details">
                    <div className="Exclusive-Product">
                        <h3>{posts[0]?.title}</h3>
                        <h6 className="font-color-orange">{posts[0]?.sub_title}</h6>
                        <h4>CONTENT</h4>
                        <p>
                            {posts[0]?.content}
                        </p>
                    </div>
                    <img src={hostUrl + posts[0]?.post_img} alt="" className="blog-detail-img" />
                </div>
            </section>
            <section id="comment" className="background-color-full-white-light">
                <div className="container">
                    <div className="max-width-80">
                        <h4>comment</h4>
                        <Link to="#" className="Share">Share</Link>
                        <div className="media border p-3">
                            <img src="./assets/imags/comment1.png" alt="John Doe" className="mr-3 rounded-circle imagess"
                                style={{ "width": "60px" }} />
                            <div className="media-body">
                                <h6>Rehmatun Nisal</h6>
                                <p>Suspendisse augue pulvinar placerat himenaeos odio nec turpis augue sem maecenas, faucibus
                                    erat lacinia consectetur sapien suscipit vestibulum venenatis himenaeos.</p>
                            </div>
                        </div>
                        <div className="media border p-3 ">
                            <img src="./assets/imags/comment2.png" alt="John Doe" className="mr-3 rounded-circle imagess"
                                style={{ "width": "60px" }} />
                            <div className="media-body">
                                <h6>Rehmatun Nisal</h6>
                                <p>Suspendisse augue pulvinar placerat himenaeos odio nec turpis augue sem maecenas, faucibus
                                    erat lacinia consectetur sapien suscipit vestibulum venenatis himenaeos.</p>
                            </div>
                        </div>
                        <div className="media border p-3 padding-none border-none">
                            <img src="./assets/imags/comment3.png" alt="John Doe" className="mr-3 rounded-circle imagess"
                                style={{ "width": "60px" }} />
                            <div className="media-body">
                                <form>
                                    <textarea placeholder="Type commeny" required></textarea>
                                    <button className="Post">Post</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetails
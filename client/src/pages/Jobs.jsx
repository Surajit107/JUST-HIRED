import React from 'react'
import Banner from '../components/common/Banner'
import Search from '../components/common/Search'
import FilterJobResult from '../components/core/job/FilterJobResult'
import JobList from '../components/core/job/JobList'

const Jobs = () => {
    return (
        <>
            {/* Banner */}
            <Banner />

            {/* Search */}
            <Search />

            <section id="resent-job-post" className="background-color-white-drak">
                <div className="vertical-space-85"></div>
                <div className="container text-center">
                    <h4 className="text-left">Filter Jobs Result</h4>
                    <div className="vertical-space-30"></div>
                    <div className="row">

                        {/*Left Side */}
                        <FilterJobResult />

                        {/*Right Side */}
                        <JobList />
                    </div>
                </div>
                <div className="vertical-space-60"></div>
            </section>
        </>
    )
}

export default Jobs
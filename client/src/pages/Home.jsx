import React, { useEffect } from 'react'
import Banner from '../components/common/Banner'
import Search from '../components/common/Search'
import Category from '../components/core/home/Category'
import FeatureadCompany from '../components/core/home/FeatureadCompany'
import JobGet from '../components/core/home/JobGet'
import RecentJob from '../components/core/home/RecentJob'
import WhyUs from '../components/core/home/WhyUs'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../services/slice/JobAndCategorySlice'

const Home = () => {

  const dispatch = useDispatch()
  const { category_data } = useSelector(state => state.jobAndCategorySlice)


  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(getCategory())
  }, [dispatch])



  return (
    <>
      {/* Banner */}
      <Banner />

      {/* Search */}
      <Search />

      {/* Job Category */}
      <Category category_data={category_data} />

      {/* Recent Job */}
      <RecentJob />

      {/* Featured Company */}
      <FeatureadCompany />

      {/* Why Us */}
      <WhyUs />

      {/* Job Get */}
      <JobGet />

    </>
  )
}

export default Home
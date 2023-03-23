import React from 'react'

const Search = () => {
  return (
    <>
      <div id="search-box">
        <div className="container search-box">
          <form action="#" id="search-box_search_form_3"
            className="search-box_search_form d-flex flex-lg-row flex-column align-items-center justify-content-between ">
            <div className="d-flex flex-row align-items-center justify-content-start inline-block">
              <span className="large material-icons search">search</span>
              <input className="search-box_search_input" placeholder="Search Keyword" required="required"
                type="search" />
              <select className="dropdown_item_select search-box_search_input">
                <option>Category</option>
                <option>Category1</option>
                <option>Category2</option>
              </select>
              <span className="large material-icons search">place</span>
              <input className="search-box_search_input " placeholder="Location" required="required" type="search" />
            </div>
            <button type="submit" className="search-box_search_button">Search Jobs</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Search
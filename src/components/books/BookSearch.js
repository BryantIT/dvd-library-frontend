import React from 'react';
import { connect } from 'react-redux';

const BookSearch = ({ currentUser }) => {
  return (
    currentUser ?
    <div className="w3-margin-bottom">
        <input className='search-input' type="text" placeHolder="Search"/>
    </div> : ""
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(BookSearch)

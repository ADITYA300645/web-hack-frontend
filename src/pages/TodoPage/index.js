import React from 'react'
import NavigationBar from '../../utils/Navigation/NavigationBar'
import SearchBar from './Component/SearchBar/SearchBar'

function index() {
  return (
    <div className='h-full w-full justify-center'>

        <NavigationBar/>
        <div className='h-screen w-full bg-custom-color flex flex-col align-center'>

        <SearchBar/>
        <div className='  bg-custom-color'>

        </div>
        </div>
        
    </div>
  )
}

export default index
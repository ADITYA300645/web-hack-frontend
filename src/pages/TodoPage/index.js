import React from 'react'
import NavigationBar from '../../utils/Navigation/NavigationBar'
import SearchBar from './Component/SearchBar/SearchBar'
import RepoCard from './Component/RepoCard/RepoCard'

function index() {
  return (
    <div className='h-full w-full justify-center'>

        <NavigationBar/>
        <div className='h-screen w-full bg-custom-color flex flex-col items-center'>

        <SearchBar/>
        <div className='h-full w-11/12 border-2 border-black	 rounded-xl flex mt-7  flex-wrap justify-around'>
                <RepoCard/>
                <RepoCard/>
                <RepoCard/>
                <RepoCard/>
                <RepoCard/>
                <RepoCard/>
                
                
                
        </div>
        </div>
        
    </div>
  )
}

export default index
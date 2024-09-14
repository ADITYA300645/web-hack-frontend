import React from 'react'
import Header from './Components/Header/Header'
import NavigationBar from '../../utils/Navigation/NavigationBar'
import LeftPart from './Components/LeftPart/LeftPart'
import RightPart from './Components/RightPart/RightPart'
import ThemeSwitch from '@/components/theme/themeSwitch'
function Home(){
        return <>
             <nav class="bg-dark-color border-gray-200 dark:bg-dark-color">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        
          <span class="self-center text-xl  w-44 font-semibold whitespace-nowrap dark:text-white mr-7">Create Your Own Project</span>
      </a>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <ThemeSwitch/>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  <div className='h-full  dark:bg-another-color rounded-2 flex flex-row'>

  <div className='h-screen dark:bg-dark-color rounded-lg	 m-3 w-96 bg-custom-color'>

  </div>
  <div className='h-screen bg-another-color w-full bg-custom-color flex justify-center align-center items-center	'>
    <div className='header h-16 justify-center align-center items-cente'>
      <p className='text-5xl mb-4'>
      Create Your Projects On Demand
      </p>
      <button className='h-12 w-32 rounded-lg dark:bg-dark-color' onClick={()=>{
        alert('button Clicked')
      }} >
        Create Project
      </button>
       
    </div>
  </div>
  </div>
            
        </>
}


export default Home

// const styles = StyleSheet.create
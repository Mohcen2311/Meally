import React from 'react'

import {useGlobalContext} from "../context"

// importing components
import Loading from "../components/Loading"
import SearchBar from "../components/SearchBar"
import FoodItem from "../components/FoodItem"

// importing notfound page
import Error from "../components/Error"


function Home() {

  const { loading , error, receipes } = useGlobalContext()

  if (loading){
    return (
    <>
      <SearchBar />
      <Loading />
    </>
    )  
  }

  if(error.show ||! receipes){
    return <Error/>
  }

  console.log(receipes);

  const foodItems = receipes?.recipes?.map( receipe => {
    return (
      <FoodItem key={receipe.id} {...receipe}/>
    )
  })

  return (
    <main className='home-container'>
      <SearchBar />
      <div className="food-list">
        {foodItems}
      </div>
    </main>
  )
}

export default Home
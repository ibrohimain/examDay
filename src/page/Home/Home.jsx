import React from 'react'
import Homes from '../../components/home/Home'
import { useSelector } from 'react-redux'

const Home = () => {
  const { cart } = useSelector(cart => cart)
  console.log(cart);
  return (
    <div>
      <Homes />
    </div>
  )
}

export default Home

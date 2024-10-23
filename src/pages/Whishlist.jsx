import React from 'react'

import { faCartShopping, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import {  removewishlistitem } from '../redux/slices/wishlistslice'
import { addItemtoCart } from '../redux/slices/cartslice'

function Wishlist() {
  const wishlistarray=useSelector((state)=>state.wishlist)
  console.log(wishlistarray);

  const dispatch=useDispatch()

  const wishes = (item)=>{
   
    dispatch(addItemtoCart(item))
    dispatch(removewishlistitem(item.id))
  }
  
  return (
    <>
    <h1 className='pt-32 text-center text-4xl text-violet-900'> Wishlist</h1>

    {wishlistarray?.length>0?
      <div className='mt-5 mb-10 px-10 md:grid grid-cols-4'>

      {wishlistarray?.map((item)=>(
        <div className=" p-2">
        <div className="p-3 shadow rounded">
          <img src={item.image} alt="" className='w-full h-72'/>
          <h4 className='text-center text-3xl'>{item.title.slice(0,11)}</h4>
          <p>{item.description.slice(0,80)}...</p>
          <p className='text-2xl'>Price <span className='text-violet-600'>$ {item.price}</span></p>
          <div className='flex justify-between'>
              <button onClick={()=>dispatch(removewishlistitem(item.id))} className='p-3 rounded bg-red-700 text-white'><FontAwesomeIcon icon={faTrashCan} /></button>
              <button onClick={()=>wishes(item)} className='p-3 rounded bg-green-700 text-white'><FontAwesomeIcon icon={faCartShopping} /></button>
          </div>
        </div>
      </div>
      ))}

      
      
    </div>

    :

    <div className='w-full mt-10 md:grid grid-cols-3'>
      <div></div>
      <div>
        <img src="https://tse1.mm.bing.net/th?id=OIP.likjkXqluA_3rWz-pyRf8QHaEX&pid=Api&P=0&h=180" alt="" className='w-full h-80' />
      </div>
      <div></div>

    </div>

}
    </>
  )
}

export default Wishlist
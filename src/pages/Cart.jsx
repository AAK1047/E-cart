import { faBackward, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeCartItem } from '../redux/slices/cartslice'


function Cart() {

 const [total , settotal]=useState(0)
  const cartarray=useSelector((state)=>state.cartItem)
  const dispatch =useDispatch() 
  const navigate = useNavigate()
  const getTotal = ()=>{

    if(cartarray?.length>0){
      settotal( cartarray?.map((item)=>item.price).reduce((a,b)=>a+b))
    }
    }
   

  const handlecheckout=()=>{
    alert('order placed succesfully')
    dispatch(emptyCart())
    navigate('/')
  }

  useEffect(()=>{
    getTotal()
  },[cartarray])

  return (
    <>
    <div className="pt-32">
      <h1 className='text-center text-4xl  text-violet-900'>Cart</h1>
    {cartarray?.length>0?  <div className="md:grid grid-cols-[2fr_1fr] my-10">
        <div className="md:py-5 md:px-20">
          <table className='w-full '>
            <thead>
              <tr>
                <th className='border border-gray-100 p-3 bg-gray-400 text-white'>#</th>
                <th  className='border border-gray-100 p-3 bg-gray-400 text-white'>Title</th>
                <th  className='border border-gray-100 p-3 bg-gray-400 text-white'>Image</th>
                <th  className='border border-gray-100 p-3 bg-gray-400 text-white'>Price</th>
                <th  className='border border-gray-100 p-3 bg-gray-400 text-white'>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartarray?.map((item , id)=>(
               
                <tr>
                <td  className='border border-gray-100 p-3 '>{id+1}</td>
                <td className='border border-gray-100 p-3 '>{item.title.slice(0,11)}</td>
                <td className='border border-gray-100 p-3 flex justify-center'><img src={item.image} alt="" className='w-full h-72'/></td>
                <td className='border border-gray-100 p-3 '>$ {item.price}</td>
                <td className='border border-gray-100 p-3 text-center '><button onClick={()=>dispatch(removeCartItem(item.id))} className='bg-red-700'> <FontAwesomeIcon icon={faTrashCan} /></button></td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pt-5 px-3">

         <div className="p-3 shadow-lg">
          <h1 className='text-center text-3xl'>Cart Summary</h1>
          <p className='mt-4 text-xl'>Total number of products : {cartarray?.length}</p>

          <p className='mt-2 text-xl'>GrandTotal : $ {total}</p>
          <button className='w-full bg-green-600 text-white p-3 mt-4 hover:bg-white hover:border hover:border-green-600 hover:text-green-600' onClick={handlecheckout} >CheckOut</button>
         </div> 

        </div>

      </div> :
      <div className="w-full mt-10 md:grid grid-cols-3">
        <div ></div>
        <div className="flex justify-center items-center flex-col my-10">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDmiRBR_19JyGdceNZQ2iizUZcJWO53gWLUrkIlvTDAyTK_FBZcQvLNWfnluWoWEctpUE&usqp=CAU" alt="Your cart is empty" className='w-full h-80' />
          {/* <p className='text-violet-800 text-3xl'>Your cart is empty </p> */}
          <Link to={'/'}> <button className='bg-green-700 text-white p-3 rounded mt-3'><FontAwesomeIcon icon={faBackward} />   BackHome</button></Link>
         

        </div>
        <div ></div>
      </div>}
    </div>
    </>
  )
}

export default Cart
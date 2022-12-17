import React, { useState } from "react";
import { Rating } from 'react-simple-star-rating'

function Product({ product }) {
  const [showModal, setShowModal] = React.useState(false);
  const [showSecondModal, setShowSecondModal] = React.useState(false);
  const [modalProduct, setModalProduct] = useState([]);


  const handleShowModal=(product)=>{
    debugger
    console.log(product)
setModalProduct(product);
    setShowModal(true);

  }

  return (
    <div class=" mt-10">
      {/* Image */}
      <div class="group min-h-50 aspect-w-1 aspect-h-1 w-full  rounded-sm bg-white  lg:aspect-none lg:h-60 relative ">
        <img
          src={product.images[0]}
          alt={product.category.name}
          class="h-full w-full object-cover object-center lg:h-full lg:w-full z-20 group-hover:opacity-75 "
        />
        <div className="invisible group-hover:visible absolute flex flex-col  mt-10  -top-10 -left-20 z-40 group-hover:opacity-100 group-hover:transition-all duration-100">
        {
          product.images.map((image)=>{
            //  debugger
         return  <img
          src={image}
          alt= "image"
          class="h-20 w-20 object-cover object-center lg:h-20 lg:w-20 p-1"
        />
          })
        }
      </div>
      <div className="bg-rose-600 text-white p-1 absolute w-full bottom-0 invisible group-hover:visible ">
        <button>ADD TO CART</button>
      </div>
      <li className="list-none flex flex-col absolute top-5 right-5 invisible group-hover:visible">

        <button onClick={()=>handleShowModal(product)}><i class="fa-solid fa-eye bg-white text-gray-500 p-2 mb-2 rounded-full hover:opacity-75"></i></button>
        <button><i class="fa-solid fa-heart bg-white text-gray-500 p-2 rounded-full hover:opacity-75"></i></button>
      </li>
      {/* Title */}
      </div>
      <div class="mt-4 content-center text-center">
        <div>
          <p class="mt-1 text-sm text-gray-500">{product.category.name}</p>
          <h3 class="text-sm text-gray-700 content-center text-center font-semibold">
            <a href="#" className="font-bold">
             {product.title}
            </a>
          </h3>

          <h3 className="text-rose-600 mt-5"><span className="line-through text-gray-500 pr-1">${product.price.toFixed(2)}</span>${product.price.toFixed(2)}</h3>
            
        </div>
      </div>
       

{/* Product Modal */}
{showModal? (
     <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="columns-2">
                <div className="columns-1">
                  <img src={modalProduct.images[0]} />
                </div>
                <div className="columns-1">
                  {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold 
                    outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>

                  
                </div>
                <div className="flex flex-col text-left">
                    <h1 className="font-semibold text-2xl pb-2">{modalProduct.title}</h1>
                    <h1 className="font-normal text-2xl pb-2 text-rose-600">${modalProduct.price.toFixed(2)}</h1>
                    <p className="pr-2 border-b border-solid border-slate-200 pb-5">{modalProduct.description}</p>

                    <div className="border-b border-solid border-slate-200 pb-5">

                        <div className="flex flex-row mt-4">
                          <button><p className="p-1 border border-solid border-black-100 w-8  text-center hover:bg-gray-100">-</p></button>
                          <button><p className="p-1 border border-solid border-black-100 w-8  text-center ">1</p></button>
                          <button><p className="p-1 border border-solid border-black-100 w-8 text-center hover:bg-gray-100">+</p></button>
                          <button className="bg-rose-600 text-white p-1 ml-2 rounded-full"><span className="p-2 text-sm font-medium">ADD TO CART</span></button>
                          
                        </div>
                        <button onClick={()=>setShowSecondModal(true)} className="flex flex-row mt-1">
                          <i class="fa-solid fa-heart bg-white text-gray-500 pr-2 pt-2 rounded-full hover:opacity-75"></i>
                          <span className="p-1">Add To Wishlist</span>
                          </button>
                          
                   
                    </div>
                </div>

                </div>

              </div>
                
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
     ):null}

     
    </div>
  );
}

export default Product;

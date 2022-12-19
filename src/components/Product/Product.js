import React, { useState } from "react";

function Product({ product }) {
  const [showModal, setShowModal] = React.useState(false);
  const [showSecondModal, setShowSecondModal] = React.useState(false);
  const [modalProduct, setModalProduct] = useState([]);
  const [productImage, setProductImage] = useState("");


  const handleShowModal=(product)=>{
    debugger
    console.log(product)
setModalProduct(product);
    setShowModal(true);

  }
  const handleChageImage =(iamgeUrl)=>{
    setProductImage(iamgeUrl);
  }

  // Slides Start
   const [currentImage, setCurrentIndex] = useState(0);

  const prevImage = () => {
    const isFirstSlide = currentImage === 0;
    const newIndex = isFirstSlide ? modalProduct.images.length - 1 : currentImage - 1;
    setCurrentIndex(newIndex);
  };

  const nextImage = () => {
    const isLastSlide = currentImage === modalProduct.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentImage + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (imageIndex) => {
    setCurrentIndex(imageIndex);
  };
  // Slides End

  return (
    <div className=" mt-10">
      {/* Image */}
      <div className="group min-h-60 aspect-w-1 aspect-h-1 w-full  rounded-sm bg-white  lg:aspect-none lg:h-60 relative">
          
        <img
          src={productImage?productImage:product.images[0]}
          alt={product.category.name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full z-20 group-hover:opacity-75 "
        />
        <div className="invisible group-hover:visible absolute flex flex-col  mt-10  -top-10 -left-20 z-40 group-hover:opacity-100 group-hover:transition-all ">
        {
          product.images.map((image)=>{
            //  debugger
         return  <img
         onClick={()=>{
          debugger
          handleChageImage(image);
         }}
          src={image}
          alt= "image"
          className="h-20 w-20 object-cover object-center lg:h-20 lg:w-20 p-1 hover:opacity-70  "
        />
          })
        }
      </div>
      <div className="bg-rose-600 text-white absolute w-full  bottom-0 invisible group-hover:visible ">
        <button className="p-1">ADD TO CART</button>
      </div>
      <li className="list-none flex flex-col absolute top-5 right-5 invisible group-hover:visible">

        <button onClick={()=>handleShowModal(product)}><i className="fa-solid fa-eye bg-white text-gray-500 p-2 mb-2 rounded-full hover:opacity-75"></i></button>
        <button><i className="fa-solid fa-heart bg-white text-gray-500 p-2 rounded-full hover:opacity-75"></i></button>
      </li>
      {/* Title */}
      </div>
      <div className="mt-4 content-center text-center">
        <div>
          <p className="mt-1 text-sm text-gray-500">{product.category.name}</p>
          <h3 className="text-sm text-gray-700 content-center text-center font-semibold">
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
            <div className="relative w-auto my-6 mx-auto  max-w-3xl">
              {/*content*/}
              
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="container columns-2 h-full w-full">
                  <div className="relative columns-1 h-96 w-full group">
                    {/* <img src={modalProduct.images[0]} /> */}
                    {/* Slide Image */}
                    <div
                      style={{ backgroundImage: `url(${modalProduct.images[currentImage]})` }}
                      className='w-full h-full bg-center bg-cover duration-500'
                    ></div>
                    {/* Left Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl  p-2 bg-black/20 text-white cursor-pointer'>
                      <i class="fa-solid fa-chevron-left" onClick={prevImage} size={30}></i>
                    </div>
                    {/* Right Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl  p-2 bg-black/20 text-white cursor-pointer'>
                      <i class="fa-solid fa-chevron-right" onClick={nextImage} size={30}></i>
                    </div>
                    <div className=' w-full flex -bottom-8 left justify-center py-2 absolute text-gray-400'>
                      {modalProduct.images.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          onClick={() => goToSlide(imageIndex)}
                          className='text-2xl cursor-pointer flex  '
                        >
                          <i class="fa fa-minus p-1 " aria-hidden="true"></i>
                        </div>
                      ))}
                    </div>
                    {/* Slide Image */}
                  </div>
                  <div className="columns-1 h-full w-full">
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
                  <div className="">
                    <div className="flex flex-col text-left">
                      <h1 className="font-semibold text-2xl pb-2">{modalProduct.title}</h1>
                      <h1 className="font-normal text-2xl pb-2 text-rose-600">${modalProduct.price.toFixed(2)}</h1>
                      <p className="pr-2 border-b border-solid border-slate-200 pb-5">{modalProduct.description}</p>
                    </div>
                    <div className="">
                          <div className="flex flex-row mt-4">
                            <button><p className="p-1 border border-solid border-black-100 w-8  text-center hover:bg-gray-100">-</p></button>
                            <button><p className="p-1 border border-solid border-black-100 w-8  text-center ">1</p></button>
                            <button><p className="p-1 border border-solid border-black-100 w-8 text-center hover:bg-gray-100">+</p></button>
                            <button className="bg-rose-600 text-white p-1 ml-2 rounded-full"><span className="p-2 text-sm font-medium">ADD TO CART</span></button>
                          </div>
                    </div>
                    <div className="border-b border-solid border-slate-200 pb-5">
                      <button onClick={()=>setShowSecondModal(true)} className="flex flex-row mt-1">
                            <i className="fa-solid fa-heart bg-white text-gray-500 pr-2 pt-2 rounded-full hover:opacity-75"></i>
                            <span className="p-1">Add To Wishlist</span>
                      </button>  
                    </div>

                    <div className="flex flex-row border-b border-solid border-slate-200 pt-4 pb-5">
                        <h2 className="p-1 font-semibold text-sm">Catetory: <span className="text-sm font-normal text-gray-400">{modalProduct.category.name}</span></h2>  
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

{/* Second Modal */}
{showSecondModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                
                {/*body*/}
                <div className="relative mt-5 mb-0 flex-auto">
                    <i className="fa-solid fa-heart bg-transparent text-green-500 text-3xl p-2 rounded-full "></i>
                </div>
                <div className="flex flex-col items-center justify-center pb-6 pr-6 pl-6 rounded-b w-96 h-48">
                  <p className="my-4 text-black-400 text-lg leading-relaxed">
                    {modalProduct.title}
                  </p>
                  <button
                    className="hover:opacity-90 bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowSecondModal(false)}
                  >
                    <i className="fa-solid fa-heart bg-transparent text-white-500 p-2 rounded-full "></i>
                    VIEW WISHLIST
                  </button>
                  <button
                    className="hover:opacity-90 flex bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowSecondModal(false)}
                  >
                    <span className="bg-transparent pr-2 active:bg-emerald-600 font-bold uppercase  text-white">
                      x
                      </span> CLOSE
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

     
    </div>
  );
}

export default Product;

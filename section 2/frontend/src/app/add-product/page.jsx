'use client';
import { useFormik } from 'formik';
import React from 'react';
import { Waveform } from 'ldrs/react'
import 'ldrs/react/Waveform.css'
import * as Yup from 'yup';

// Product validation schema
const ProductSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Name is required'),
  category: Yup.string().required('Category is required'),
  description: Yup.string().required('Description is required'),
  price: Yup.number().typeError('Must be a number') .required('Price is required'),
  stock: Yup.number().typeError('Must be a number').required('Stock is required')
});

const ProductForm = () => {

  const productForm = useFormik({
    initialValues: {
      name: '',
      category: '',
      description: '',
      price: '',
      stock: ''
    },
    onSubmit: (value, { resetForm }) => {
      console.log(value);
      setTimeout(() => {
        resetForm();
      }, 3000);

      // submit values to backend
     
      


    },
    validationSchema: ProductSchema,
  })

  return (
    <div className='bg-gray-100 min-h-screen pt-10'>
      <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-xl shadow-2xs">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Add Product</h1>
          </div>

          <div className="mt-5">
            <form onSubmit={productForm.handleSubmit} >
              <div className="grid gap-y-4">

                {/* Product Name */}
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-black px-3">Product Name</label>
                  <input
                    type="text"
                    id="name"
                    onChange={productForm.handleChange}
                    value={productForm.values.name}
                    className="border py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {productForm.errors.name && productForm.touched.name && (
                    <p className="text-xs text-red-600 mt-2">{productForm.errors.name}</p>
                  )}
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-sm mb-2 text-black px-3">Category</label>
                  <input
                    type="text"
                    id="category"
                    onChange={productForm.handleChange}
                    value={productForm.values.category}
                    className="border py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {productForm.errors.category && productForm.touched.category && (
                    <p className="text-xs text-red-600 mt-2">{productForm.errors.category}</p>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm mb-2 text-black px-3">Description</label>
                  <textarea
                    id="description"
                    onChange={productForm.handleChange}
                    value={productForm.values.description}
                    className="border py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {productForm.errors.description && productForm.touched.description && (
                    <p className="text-xs text-red-600 mt-2">{productForm.errors.description}</p>
                  )}
                </div>

                {/* Price */}
                <div>
                  <label htmlFor="price" className="block text-sm mb-2 text-black px-3">Price</label>
                  <input
                    type="number"
                    id="price"
                    onChange={productForm.handleChange}
                    value={productForm.values.price}
                    className="border py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {productForm.errors.price && productForm.touched.price && (
                    <p className="text-xs text-red-600 mt-2">{productForm.errors.price}</p>
                  )}
                </div>

                {/* Stock */}
                <div>
                  <label htmlFor="stock" className="block text-sm mb-2 text-black px-3">Stock</label>
                  <input
                    type="number"
                    id="stock"
                    onChange={productForm.handleChange}
                    value={productForm.values.stock}
                    className="border py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                  {productForm.errors.stock && productForm.touched.stock && (
                    <p className="text-xs text-red-600 mt-2">{productForm.errors.stock}</p>
                  )}
                </div>

                <button disabled={productForm.isSubmitting} type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                  {
                    productForm.isSubmitting ? (
                      <Waveform size="35" stroke="3.5" speed="1" color="black" />
                    ) : (
                      'Add Product'
                    )
                  }
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductForm;
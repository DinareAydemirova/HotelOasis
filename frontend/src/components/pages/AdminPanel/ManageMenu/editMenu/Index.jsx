import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useNavigate, useParams } from 'react-router-dom'

const EditMenu = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [menu, setMenu] = useState({
        image:'',
        name:'',
        price:'',
        category:'',
        ingredients:''
    });

    useEffect(() => {
      axios.get(`/menu/${id}`).then((res)=>{
        setMenu(res.data)
      })
    }, [id])

    const handleInputChange = (e) =>{
        const {name, value}=e.target;
        setMenu({
            ...menu,
            [name]:value,
        })
    }

   const handleFormSubmit = (e) => {
    e.preventDefault();
    axios.put(`/menu/${id}`, menu)
    .then(()=>{
        navigate('/admin/menu')
    })
    .catch((error)=>{
        console.error('There was an error updating the menu!', error)
    })
   }
    
  return (
    <div className="text-gray-900 bg-gray-200 min-h-screen flex items-center justify-center">
      <Helmet>
        <title>Admin Edit Menu - kinsley</title>
        <link
          rel="shortcut icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUgFpfnDFc3lR56q1erL71EEv1lNvDYrbfQ&s"
          type="image/x-icon"
        />
      </Helmet>
      <form className="bg-white p-6 rounded shadow-md w-full max-w-lg" onSubmit={handleFormSubmit}>
        <h2 className="text-2xl mb-4">Edit Menu</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={menu.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Ingredients</label>
          <textarea
            name="description"
            value={menu.ingredients}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            value={menu.price}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Category</label>
          <select
            name="category"
            value={menu.category}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select a category</option>
            <option value="Salad">Salad</option>
            <option value="Main dish">Main dish</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            value={menu.image}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter image URL"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default EditMenu
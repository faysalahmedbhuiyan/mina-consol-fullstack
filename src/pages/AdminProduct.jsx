import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function AdminProduct () {
  const [productName, setProductName] = useState('')
  const [type, setType] = useState('')
  const [subSection, setSubSection] = useState('')
  const [countryName, setCountryName] = useState('')
  const [hsCode, setHsCode] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [mediaFiles, setMediaFiles] = useState([])
  const [products, setProducts] = useState([])

  const [editingProduct, setEditingProduct] = useState(null)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/products')
      setProducts(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  // ✅ ADD PRODUCT
  const submit = async e => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append('product_name', productName)
      formData.append('type', type)
      formData.append('sub_section', subSection)
      formData.append('country_name', countryName)
      formData.append('hs_code', hsCode)
      formData.append('description', description)
      formData.append('price', price)

      mediaFiles.forEach(file => formData.append('media[]', file))

      await axios.post('http://127.0.0.1:8000/api/products', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      fetchProducts()
      alert('Product added successfully!')

      setProductName('')
      setType('')
      setSubSection('')
      setCountryName('')
      setHsCode('')
      setDescription('')
      setPrice('')
      setMediaFiles([])
    } catch (err) {
      console.error(err)
      alert('Error adding product!')
    }
  }

  // ✅ UPDATE PRODUCT
  const updateProduct = async e => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append('product_name', editingProduct.product_name)
      formData.append('type', editingProduct.type)
      formData.append('sub_section', editingProduct.sub_section)
      formData.append('country_name', editingProduct.country_name)
      formData.append('hs_code', editingProduct.hs_code)
      formData.append('description', editingProduct.description)
      formData.append('price', editingProduct.price)

      mediaFiles.forEach(file => formData.append('media[]', file))

      await axios.post(
        `http://127.0.0.1:8000/api/products/${editingProduct.id}?_method=PUT`,
        formData
      )

      alert('Product updated successfully!')
      setEditingProduct(null)
      setMediaFiles([])
      fetchProducts()
    } catch (err) {
      console.error(err)
      alert('Update failed!')
    }
  }

  const deleteProduct = async id => {
    if (!window.confirm('Are you sure to delete?')) return
    await axios.delete(`http://127.0.0.1:8000/api/products/${id}`)
    fetchProducts()
  }

  return (
    <>
      <div className='container'>
        <h1 className='title'>Admin Product Panel</h1>

        {/* ================= FORM ================= */}
        <form
          onSubmit={editingProduct ? updateProduct : submit}
          className='form'
        >
          <h2>{editingProduct ? 'Edit Product' : 'Add Product'}</h2>

          <input
            type='text'
            placeholder='Product Name'
            value={editingProduct ? editingProduct.product_name : productName}
            onChange={e =>
              editingProduct
                ? setEditingProduct({
                    ...editingProduct,
                    product_name: e.target.value
                  })
                : setProductName(e.target.value)
            }
            required
          />

          <input
            type='text'
            placeholder='Type (Import/Export)'
            value={editingProduct ? editingProduct.type : type}
            onChange={e =>
              editingProduct
                ? setEditingProduct({
                    ...editingProduct,
                    type: e.target.value
                  })
                : setType(e.target.value)
            }
            required
          />

          <input
            type='text'
            placeholder='Sub Section'
            value={editingProduct ? editingProduct.sub_section : subSection}
            onChange={e =>
              editingProduct
                ? setEditingProduct({
                    ...editingProduct,
                    sub_section: e.target.value
                  })
                : setSubSection(e.target.value)
            }
          />

          <input
            type='text'
            placeholder='Country Name'
            value={editingProduct ? editingProduct.country_name : countryName}
            onChange={e =>
              editingProduct
                ? setEditingProduct({
                    ...editingProduct,
                    country_name: e.target.value
                  })
                : setCountryName(e.target.value)
            }
          />

          <input
            type='text'
            placeholder='HS Code'
            value={editingProduct ? editingProduct.hs_code : hsCode}
            onChange={e =>
              editingProduct
                ? setEditingProduct({
                    ...editingProduct,
                    hs_code: e.target.value
                  })
                : setHsCode(e.target.value)
            }
          />

          <textarea
            placeholder='Description'
            value={editingProduct ? editingProduct.description : description}
            onChange={e =>
              editingProduct
                ? setEditingProduct({
                    ...editingProduct,
                    description: e.target.value
                  })
                : setDescription(e.target.value)
            }
          />

          <input
            type='number'
            placeholder='Price'
            value={editingProduct ? editingProduct.price : price}
            onChange={e =>
              editingProduct
                ? setEditingProduct({
                    ...editingProduct,
                    price: e.target.value
                  })
                : setPrice(e.target.value)
            }
          />

          <input
            type='file'
            multiple
            onChange={e => setMediaFiles([...e.target.files])}
          />

          <button type='submit'>
            {editingProduct ? 'Update Product' : 'Add Product'}
          </button>
        </form>

        {/* ================= LIST ================= */}
        <h2 className='list-title'>All Products</h2>

        {products.length === 0 ? (
          <p>No products yet</p>
        ) : (
          products.map(product => (
            <div key={product.id} className='card'>
              <div className='card-top'>
                <h3>{product.product_name}</h3>
                <span>{product.type}</span>
              </div>

              <p>
                <b>Section:</b> {product.sub_section}
              </p>
              <p>
                <b>Country:</b> {product.country_name}
              </p>
              <p>
                <b>HS Code:</b> {product.hs_code}
              </p>
              <p>
                <b>Price:</b> {product.price}
              </p>
              <p>
                <b>Description: </b>
                {product.description}
              </p>

              <div className='media'>
                {product.media?.map((m, i) =>
                  m.match(/\.(mp4|webm|ogg)$/i) ? (
                    <video key={i} width='180' controls>
                      <source src={`http://127.0.0.1:8000/storage/${m}`} />
                    </video>
                  ) : (
                    <img
                      key={i}
                      src={`http://127.0.0.1:8000/storage/${m}`}
                      width='180'
                    />
                  )
                )}
              </div>

              <div className='actions'>
                <button onClick={() => setEditingProduct(product)}>Edit</button>
                <button onClick={() => deleteProduct(product.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ================= STYLE ================= */}
      <style>{`
        .container {
          max-width: 900px;
          margin: auto;
          padding: 30px;
          font-family: sans-serif;
        }

        .title {
          text-align: center;
          margin-bottom: 20px;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 30px;
          border: 1px solid #ddd;
          border-radius: 10px;
          background: #fff;
          margin-bottom: 40px;
        }

        .form input,
        .form textarea {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .form button {
          padding: 10px;
          background: black;
          color: white;
          border: none;
          cursor: pointer;
        }

        .list-title {
          margin-bottom: 20px;
        }

        .card {
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 10px;
          margin-bottom: 20px;
          background: #fafafa;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .media {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 10px;
        }

        .actions {
          margin-top: 10px;
          display: flex;
          gap: 10px;
        }

        .actions button {
          padding: 8px 12px;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

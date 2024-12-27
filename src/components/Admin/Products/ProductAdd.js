
import React, { useState } from 'react';

export default function ProductAdd() {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [quality, setQuality] = useState('A Grade');
    const [price, setPrice] = useState('');
    const [productStock, setProductStock] = useState('');
    const [discount, setDiscount] = useState('');
    const [rating, setRating] = useState(0);
    const [images, setImages] = useState([]);

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        setImages(prevImages => [...prevImages, ...files]);
    };

    const handleRemoveImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    const handlePublish = () => {
        console.log({
            productName,
            description,
            category,
            quality,
            price,
            productStock,
            discount,
            rating,
            images
        });
    };

    return (
        <div className="bg-white text-black p-6 rounded-lg w-3/4 mx-auto mt-10">
            <h1 className="text-2xl font-semibold mb-4">Product Upload</h1>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block mb-2">Product Name</label>
                    <input type="text" className="w-full p-2 rounded bg-gray-200" value={productName} onChange={(e) => setProductName(e.target.value)} />
                </div>
                <div>
                    <label className="block mb-2">Description</label>
                    <textarea className="w-full p-2 rounded bg-gray-200" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div>
                    <label className="block mb-2">Category</label>
                    <input type="text" className="w-full p-2 rounded bg-gray-200" value={category} onChange={(e) => setCategory(e.target.value)} />
                </div>
                <div>
                    <label className="block mb-2">Quality</label>
                    <select className="w-full p-2 rounded bg-gray-200" value={quality} onChange={(e) => setQuality(e.target.value)}>
                        <option>A Grade</option>
                        <option>B Grade</option>
                        <option>C Grade</option>
                        <option>D Grade</option>
                        <option>Large</option>
                        <option>Small</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-2">Price</label>
                    <input type="number" className="w-full p-2 rounded bg-gray-200" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label className="block mb-2">Product Stock</label>
                    <input type="number" className="w-full p-2 rounded bg-gray-200" value={productStock} onChange={(e) => setProductStock(e.target.value)} />
                </div>
                <div>
                    <label className="block mb-2">Discount</label>
                    <input type="number" className="w-full p-2 rounded bg-gray-200" value={discount} onChange={(e) => setDiscount(e.target.value)} />
                </div>
                <div>
                    <label className="block mb-2">Rating</label>
                    <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} onClick={() => setRating(star)} className={`text-2xl cursor-pointer ${star <= rating ? 'text-yellow-400' : 'text-gray-500'}`}>
                                ★
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-6">
                <label className="block mb-2">Media And Published</label>
                <input type="file" multiple className="hidden" id="imageUpload" onChange={handleImageUpload} />
                <label htmlFor="imageUpload" className="w-full p-2 rounded bg-gray-200 text-center cursor-pointer">Upload Images</label>
                <div className="flex gap-2 mt-4">
                    {images.map((image, index) => (
                        <div key={index} className="relative">
                            <img src={URL.createObjectURL(image)} alt="uploaded" className="w-20 h-20 object-cover rounded" />
                            <button onClick={() => handleRemoveImage(index)} className="absolute top-0 right-0 bg-red-600 text-white rounded-full px-2">x</button>
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={handlePublish} className="bg-blue-600 w-full p-3 mt-6 rounded hover:bg-blue-700">Publish and View</button>
        </div>
    );
}

import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ProductView() {
    const location = useLocation();
    const product = location.state || {};

    return (
        <div className="bg-white text-black p-6 rounded-lg w-3/4 mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-6">{product.productName}</h1>

            <div className="grid grid-cols-2 gap-4">
                <div className="border p-4 rounded">
                    <img src={URL.createObjectURL(product.images[0])} alt="Product" className="w-full h-auto" />
                    <div className="flex gap-2 mt-4">
                        {product.images.map((image, index) => (
                            <img key={index} src={URL.createObjectURL(image)} alt="thumbnail" className="w-16 h-16 object-cover rounded" />
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Quality:</strong> {product.quality}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Stock:</strong> {product.productStock} items</p>
                    <p><strong>Discount:</strong> {product.discount}%</p>
                    <p><strong>Rating:</strong> {Array.from({ length: product.rating }).map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                    ))}</p>
                    <p className="mt-4"><strong>Description:</strong> {product.description}</p>
                </div>
            </div>

            <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
                <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                        <div className="flex items-center mb-2">
                            <img src="https://via.placeholder.com/50" alt="user" className="rounded-full w-12 h-12 mr-4" />
                            <div>
                                <p className="font-bold">John Doe</p>
                                <p className="text-gray-500">2 hours ago</p>
                            </div>
                        </div>
                        <p>Excellent quality and fits perfectly!</p>
                        <div className="text-yellow-400">★★★★☆</div>
                    </div>
                </div>
            </div>
        </div>
    );
}


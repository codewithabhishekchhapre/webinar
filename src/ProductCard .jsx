import React from "react";

// Dummy data
const products = [
  {
    id: 1,
    title: "boAt Airdopes 161",
    price: 849,
    oldPrice: 2499,
    discount: "66% off",
    rating: 4.8,
    feature: "40 Hours Playback",
    image:
      "https://images.boat-lifestyle.com/cdn/shop/files/Airdopes-161-main.jpg?v=1680000000", // Replace with any dummy image
    colors: 3,
  },
  {
    id: 2,
    title: "boAt Rockerz 255",
    price: 999,
    oldPrice: 2999,
    discount: "67% off",
    rating: 4.6,
    feature: "30 Hours Playback",
    image:
      "https://images.boat-lifestyle.com/cdn/shop/files/Rockerz-255-main.jpg?v=1680000000",
    colors: 2,
  },
  {
     id: 2,
     title: "boAt Rockerz 255",
     price: 999,
     oldPrice: 2999,
     discount: "67% off",
     rating: 4.6,
     feature: "30 Hours Playback",
     image:
       "https://images.boat-lifestyle.com/cdn/shop/files/Rockerz-255-main.jpg?v=1680000000",
     colors: 2,
   },
   {
     id: 2,
     title: "boAt Rockerz 255",
     price: 999,
     oldPrice: 2999,
     discount: "67% off",
     rating: 4.6,
     feature: "30 Hours Playback",
     image:
       "https://images.boat-lifestyle.com/cdn/shop/files/Rockerz-255-main.jpg?v=1680000000",
     colors: 2,
   },
   {
     id: 2,
     title: "boAt Rockerz 255",
     price: 999,
     oldPrice: 2999,
     discount: "67% off",
     rating: 4.6,
     feature: "30 Hours Playback",
     image:
       "https://images.boat-lifestyle.com/cdn/shop/files/Rockerz-255-main.jpg?v=1680000000",
     colors: 2,
   },
   {
     id: 2,
     title: "boAt Rockerz 255",
     price: 999,
     oldPrice: 2999,
     discount: "67% off",
     rating: 4.6,
     feature: "30 Hours Playback",
     image:
       "https://images.boat-lifestyle.com/cdn/shop/files/Rockerz-255-main.jpg?v=1680000000",
     colors: 2,
   }
  // Add more products similarly
];

const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-50">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border hover:shadow-xl transition"
        >
          {/* Engraving Banner */}
          <div className="bg-black text-white text-xs px-3 py-1 absolute mt-2 ml-2 rounded-md flex items-center gap-1">
            🔥 Engraving Available
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-cover"
            />
            {/* Rating Badge */}
            <div className="absolute bottom-0 w-full bg-yellow-400 flex justify-between items-center px-3 py-1 text-sm font-semibold">
              <span>{product.feature}</span>
              <span className="bg-white px-2 py-0.5 rounded-full text-yellow-500">
                ⭐ {product.rating}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="p-4">
            <h3 className="font-bold text-gray-800 text-lg">{product.title}</h3>
            <div className="flex items-center gap-2 my-2">
              <p className="text-xl font-bold text-black">₹{product.price}</p>
              <p className="text-sm text-gray-400 line-through">
                ₹{product.oldPrice}
              </p>
              <p className="text-sm text-green-600 font-semibold">
                {product.discount}
              </p>
            </div>

            {/* Colors */}
            <div className="flex items-center gap-1 text-gray-500">
              <div className="w-6 h-6 rounded-full bg-gray-700"></div>
              <p>+{product.colors}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;

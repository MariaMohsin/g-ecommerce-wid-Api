// ProductDetail.tsx

interface Product {
  _id: string;
  title: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  category: string;
  rating: number;
  productImageUrl: string; 
  isNew?: boolean;  
  // Use productImageUrl
}

const ProductDetail = ({ product }: { product: Product }) => {
  const discountedPrice = (product.price - (product.price * product.discountPercentage) / 100).toFixed(2);

  return (
    <div className="p-6 border rounded-lg shadow-lg bg-white">
      {/* Use regular img tag to avoid Image tag errors */}
      <img 
        src={product.productImageUrl} 
        alt={product.name} 
        width={300} 
        height={300} 
        className="rounded-md" 
      />
      <h2 className="text-xl font-bold mt-4">{product.name}</h2>
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <p className="text-gray-600">{product.description}</p>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-lg font-semibold text-green-600">${discountedPrice}</span>
        {product.discountPercentage > 0 && (
          <span className="text-sm text-gray-500 line-through">${product.price} {product.rating && <p>Rating: ⭐ {product.rating}</p>}</span>
        )}
      </div>
      <p className="text-yellow-500 mt-1">⭐ {product.rating}/5</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;




import React from 'react';

interface CategoryProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const Category: React.FC<CategoryProps> = ({ categories, onSelectCategory }) => {
  return (
    <div className="flex gap-3 overflow-x-auto p-4 bg-gray-100 rounded-lg">
      {categories.map((category: string) => (
        <button
          key={category}  // Using category directly as the key
          onClick={() => onSelectCategory(category)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Category;



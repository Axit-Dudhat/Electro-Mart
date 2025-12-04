import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../../../styles/Sections.css';
import { Smartphone, Monitor, Watch, Camera, Headphones } from 'lucide-react';

const categories = [
  { id: 1, name: 'Phones', icon: Smartphone },
  { id: 2, name: 'Laptop', icon: Monitor },
  { id: 3, name: 'SmartWatch', icon: Watch },
  { id: 4, name: 'Camera', icon: Camera },
  { id: 5, name: 'HeadPhones', icon: Headphones }
];

export const BrowseByCategory = () => {
  const navigate = useNavigate();

  // Handle navigation based on category name
  const handleCategoryClick = (name) => {
    switch (name.toLowerCase()) {
      case 'phones':
        navigate('/phone');
        break;
      case 'laptop':
        navigate('/computers');
        break;
      case 'smartwatch':
        navigate('/smartwatch');
        break;
      case 'camera':
        navigate('/camera');
        break;
      case 'headphones':
        navigate('/headphones');
        break;
      default:
        alert(`No route defined for ${name}`);
        break;
    }
  };

  return (
    <section className="browse-category">
      <div className="category-header">
        <div className="category-label">
          <div className="red-indicator"></div>
          <span>Categories</span>
        </div>
      </div>

      <div className="category-title-container">
        <h2 className="category-title">Browse By Category</h2>
      </div>

      <div className="categories-grid">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <div
              key={category.id}
              className="category-card"
              onClick={() => handleCategoryClick(category.name)}
              style={{ cursor: 'pointer' }}
            >
              <div className="category-icon">
                <IconComponent size={40} />
              </div>
              <span className="category-name">{category.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

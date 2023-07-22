import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/SearchBar.css';

const products = [
  { id: 1, name: 'Recreational Swimming - Weekends - Day', category: ' Recreational Swimming', price: 10 },
  { id: 2, name: 'Recreational Swimming - Weekdays - Evening', category: ' Recreational Swimming', price: 15 },
  { id: 3, name: 'Recreational Swimming - Weekends - Day', category: ' Recreational Swimming', price: 20 },
  { id: 4, name: 'Recreational Swimming - Weekends - Evening', category: ' Recreational Swimming', price: 25 },
  { id: 5, name: 'Swimming Lessons - Child Lessons', category: ' Swimming Lessons', price: 30 },
  { id: 6, name: 'Swimming Lessons - Adult Lessons', category: ' Swimming Lessons', price: 35},
  { id: 7, name: 'Competitive Swim - Beginner', category: ' Competitive Swim', price: 40},
  { id: 8, name: 'Competitive Swim - Intermediate', category: ' Competitive Swim', price: 45},
  { id: 9, name: 'Competitive Swim - Advanced', category: ' Competitive Swim', price: 50}
];

const SearchBar = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    if (e.target.checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      const updatedCategories = selectedCategories.filter(
        (selectedCategory) => selectedCategory !== category
      );
      setSelectedCategories(updatedCategories);
    }
  };

  const handlePriceChange = (e) => {
    const price = parseInt(e.target.value);
    if (e.target.checked) {
      setSelectedPrices([...selectedPrices, price]);
    } else {
      const updatedPrices = selectedPrices.filter(
        (selectedPrice) => selectedPrice !== price
      );
      setSelectedPrices(updatedPrices);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  React.useEffect(() => {
    // Apply filters
    const filtered = products.filter((product) => {
      if (
        selectedCategories.length > 0 &&
        !selectedCategories.includes(product.category)
      ) {
        return false;
      }
      if (selectedPrices.length > 0 && !selectedPrices.includes(product.price)) {
        return false;
      }
      if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false;
      }
      return true;
    });

    setFilteredProducts(filtered);
  }, [selectedCategories, selectedPrices, searchTerm]);

  return (
    <Container>
      <div className="searchSection">
      <Row>
        
        <h3>Search</h3>
        <input type="text" value={searchTerm} onChange={handleSearch} className="rounded-input"/>
        
      </Row>
      </div>
      <Row>
        <Col xs={3}>
          <div className="categorySection">
            <h3>Categories</h3>
              {[' Recreational Swimming', ' Swimming Lessons', ' Competitive Swim'].map((category) => (
                <div key={category}>
                  <label>
                    <input
                      type="checkbox"
                      value={category}
                      checked={selectedCategories.includes(category)}
                      onChange={handleCategoryChange}
                    />
                    {category}
                  </label>
                </div>
              ))}
          </div>


          <div className="priceSection">  
            <h3>Prices</h3>
            {[10, 15, 20, 25, 30, 35, 40, 45, 50].map((price) => (
              <div key={price}>
                <label>
                  <input
                    type="checkbox"
                    value={price}
                    checked={selectedPrices.includes(price)}
                    onChange={handlePriceChange}
                  />
                  {' ' + "$" + price}
                </label>
              </div>
            ))}
          </div>
        </Col>

        <Col xs={9}>
          <h3>Filtered Programs</h3>
          <div className="card-container">
            {filteredProducts.map((product) => (
              <div key={product.id} className="card cards custom-card card-container shadow">
                <h4>{product.name}</h4>
                <p className="marginBottomAndTop">Category: {product.category}</p>
                <p className="marginBottom">Price: ${product.price}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;



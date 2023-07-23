import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/SearchBar.css';

const products = [
  { id: 1, name: 'Recreational Swimming - Weekends - Day', category: ' Recreational Swimming', price: 10, description: 'Enjoy recreational swimming on weekends during the day.' },
  { id: 2, name: 'Recreational Swimming - Weekdays - Evening', category: ' Recreational Swimming', price: 15, description: 'Relax with recreational swimming on weekdays during the evening.' },
  { id: 3, name: 'Recreational Swimming - Weekends - Day', category: ' Recreational Swimming', price: 20, description: 'Experience recreational swimming on weekends during the day.' },
  { id: 4, name: 'Recreational Swimming - Weekends - Evening', category: ' Recreational Swimming', price: 25, description: 'Have fun with recreational swimming on weekends during the evening.' },
  { id: 5, name: 'Swimming Lessons - Child Lessons', category: ' Swimming Lessons', price: 30, description: 'Have your child learn to swim with our specialized swimming lessons.' },
  { id: 6, name: 'Swimming Lessons - Adult Lessons', category: ' Swimming Lessons', price: 35, description: 'Improve your swimming skills with our adult swimming lessons.'},
  { id: 7, name: 'Competitive Swim - Beginner', category: ' Competitive Swim', price: 40, description: 'Start your competitive swimming journey with our beginner program.'},
  { id: 8, name: 'Competitive Swim - Intermediate', category: ' Competitive Swim', price: 45, description: 'Enhance your swimming performance with our intermediate competitive program.'},
  { id: 9, name: 'Competitive Swim - Advanced', category: ' Competitive Swim', price: 50, description: 'Achieve excellence in swimming with our advanced competitive program.'}
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
                <h4 className="mBottom">{product.name}</h4>
                <p>{product.description}</p>
                <p>Category: {product.category}</p>
                <p>Price: ${product.price}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;



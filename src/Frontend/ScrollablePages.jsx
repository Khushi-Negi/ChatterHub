import React from 'react';
import './styles.css';

function ScrollablePages() {
  return (
    <div className="container">
      <div className="full-height-section section-1">
        <h1>Page 1</h1>
        <p>Welcome to the first section.</p>
      </div>
      <div className="full-height-section section-2">
        <h1>Page 2</h1>
        <p>This is the second section.</p>
      </div>
      <div className="full-height-section section-3">
        <h1>Page 3</h1>
        <p>This is the third section.</p>
      </div>
      {/* Add more sections as needed */}
    </div>
  );
}

export default ScrollablePages;

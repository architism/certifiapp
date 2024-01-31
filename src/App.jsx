

import React, { useState,useRef } from 'react';
import { Form } from 'react-bootstrap';
import './index.css';
import imagecer001 from "./images/cer001.jpg"
import imagecer002 from "./images/cer002.jpg"
import imagecer003 from "./images/cer003.jpg"

const App = () => {
  const [image, setImage] = useState(null);
  const searchInput = useRef(null);
  const handleSearch = (event) => {
    event.preventDefault();
    console.log("/src/images/"+searchInput.current.value+".jpg");

    setImage("/src/images/"+searchInput.current.value+".jpg");
    // Assuming you want to log the value of the input on search
  };
 console.log(imagecer001)
  return (
    <div className='container'>
      <h1 className='title'>Certificate Search</h1>
      <div className='search-section'>
        <Form onSubmit={handleSearch}>
          <Form.Control
            type='search'
            placeholder='Enter the certificate no.'
            className='search-input'
            ref={searchInput}
          />
        </Form>
        
        {image && (
          <div className='images'>
            <img
              src={image}
              alt={"image"}
              className='image'
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

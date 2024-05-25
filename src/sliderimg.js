import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        const urls = data.products.flatMap(product => product.images);
        setImageUrls(urls);
        if (urls.length > 0) {
          setImageUrl(urls[0]);
        }
        setIsPending(false);
      })
      .catch(error => {
        setError(error.message);
        setIsPending(false);
      });
  }, []);

  useEffect(() => {
    if (imageUrls.length > 0) {
      const intervalId = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        setImageUrl(imageUrls[randomIndex]);
      }, 2000);

      return () => clearInterval(intervalId);
    }
  }, [imageUrls]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (isPending) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={imageUrl} alt="Sliding images" />
    </div>
  );
};

export default Slider;

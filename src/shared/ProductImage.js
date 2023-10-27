import { useState, useEffect } from 'react';
import { getProductImage } from '../helpers/getProductImage';

const ProductImage = ({ productName }) => {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      const img = await getProductImage(productName);

      if (img) {
        setImageURL(img.previewURL);
      }
    };

    fetchImage();
  }, []);

  return <img src={imageURL} />;
};

export default ProductImage;

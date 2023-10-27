export const getProductImage = async (productName) => {
  const pixabayDataRes = await fetch(
    `https://pixabay.com/api/?key=40275728-a4cecf68e5550249c363da709&q=${productName.toLowerCase()}&image_type=photo&category=${productName.toLowerCase()}&pretty=true`
  );

  const pixabayData = await pixabayDataRes.json();

  const imgWithTag = pixabayData.hits.find((hit) => {
    const tags = hit.tags.split(',').map((item) => {
      return item.trim();
    });

    return tags.indexOf(productName.toLowerCase()) !== -1;
  });

  return imgWithTag || pixabayData.hits[0];
};

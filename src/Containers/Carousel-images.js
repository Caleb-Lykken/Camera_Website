import Carousel from './Components/Carousel';

const imageUrls = [
  'path-to-your-first-image.jpg',
  'path-to-your-second-image.jpg',
  'path-to-your-third-image.jpg',
  // ...more images
];

const App = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <Carousel images={imageUrls} />
        <ProductList />
      </main>
    </div>
  );
}

export default App;

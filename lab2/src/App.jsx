import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
function App() {
  // const [product, setProduct] = useState([]);
  // useEffect(() => {
  //   axois.get('https://fakestoreapi.com/products')
  //   .then((res) => {
  //     setProduct(res.data);
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // },[]);
  return (
    <>
      <Header></Header>
      {/* <main>
        <h1>Products</h1>
        <div className="product-list">
          {product.map((item) => (
            <div key={item.id} className="product-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </main> */}
      <Footer></Footer>
    </>
  )
}

export default App

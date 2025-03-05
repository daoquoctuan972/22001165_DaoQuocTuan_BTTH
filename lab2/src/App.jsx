import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://67c821410acf98d070850511.mockapi.io/Food')
      .then(response => setData(response.data))
      .catch(console.error);
  }, []);
  return (
    <>
      <Header></Header>
      <div className="recipe-box-container">
      <nav className="breadcrumb">
        <a href="#home">Home</a>
        <span className="breadcrumb-separator">{'>'}</span>
        <a href="#recipe-box">Your Recipe Box</a>
      </nav>

      <div className="profile-section">
        <img src='../public/avatar.jpg' alt="Emma's avatar" className="profile-avatar" />
        <div className="profile-info">
          <h2 className="profile-title">Emma Gonzalez's Recipe Box</h2>
          <p className="profile-description">
            Emma Gonzalez is a deputy editor at Cheffy, bringing her expertise as a former
            cooking editor at The Los Angeles Times. She is also an accomplished author, contributing
            to numerous cookbooks and food publications. Originally from East Los Angeles, Emma now
            resides in New York City, where she explores a wide range of culinary delights.
          </p>
          <div className="subscribe-share">
            <span className="subscriber-count">6.5k Subscribers</span>
            <button className="share-button">Share</button>
          </div>
        </div>
      </div>
      <div className="recipe-cards">
        {data.map(recipe => (
          <div className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt="Recipe" className="recipe-image" />
            <div className="recipe-content">
              <h3 className="recipe-title">{recipe.name}</h3>
              <div className="recipe-footer">
                <span className="recipe-time">15 minutes</span>
                <button className="bookmark-btn">
                  <i className="fa fa-bookmark"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button className="page-number prev-page">{'<'}</button>
        <button className="page-number">1</button>
        <button className="page-number active">2</button>
        <button className="page-number">3</button>
        <span>...</span>
        <button className="page-number">10</button>
        <button className="page-number next-page">{'>'}</button>
      </div>
    </div>
      <Footer></Footer>
    </>
  )
}

export default App

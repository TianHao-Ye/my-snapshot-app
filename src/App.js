import './App.css';
import FilterBar from './components/FilterBar';
import ImageBoard from './components/ImageBoard';
import { useEffect, useState } from 'react';
import axios from "axios";


function App() {
  const [imageList, setImageList] = useState([]);
  const [category, setCategory] = useState('');
  const apiKey = process.env.REACT_APP_FLICKR_API_KEY;

  useEffect(()=>{    
    console.log('useEffect triggered with category:', category);
    const intervalId = setInterval(() => fetchData(category), 5000);
    return() => clearInterval(intervalId);
  });


  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  };

  const changeImageList = (newImageList) => {
    setImageList(newImageList);
  };

  // fetch image data
  const fetchData = async (searchInput) => {
    const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchInput}&format=json&nojsoncallback=1`;
    try {
        const res = await axios.get(url);
        var newImageList = [];
        switch (res.data.stat) {
            case 'ok':
                newImageList = res.data.photos.photo.map(photo => `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`);
                break;
            default:
                break;
        }
        changeImageList(newImageList);
    } catch (err) {
        console.error(err);
    }
  };
  

  return (
    <div className="App">
        <h1 className="text-4xl font-bold">SnapShot</h1>
        <FilterBar onChangeCategory={changeCategory} onFetchData={fetchData}/>
        <ImageBoard category={category} imageList={imageList}/>
    </div>
  );
}

export default App;

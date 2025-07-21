import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './Components/Footer';


const App = () => {
  const [category, setCategory] = useState('general');

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category}  />
      <Footer />
    </div>
  )
}

export default App

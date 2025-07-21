import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import NewsBoard from './Components/NewsBoard'
import Footer from './Components/footer';
import 'bootstrap-icons/font/bootstrap-icons.css';


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

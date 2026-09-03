import './App.css'
import Footer from './Footer'
import ProductCard from './ProductCard'
import Profile from './ProfileCard'
import WelcomeCard from './WelcomeCard'

function App() {
  return (
    <>
    <WelcomeCard/>
    <Profile/>
    <ProductCard productName='Watch' price={1200} inStock={true}/>
    <ProductCard productName='Umbrella' price={900} inStock={false}/>
    <ProductCard productName='Book' price={350} inStock={true}/>
    <Footer/>
    </>
  )
}

export default App


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Jumbotron from './components/Jumbotron'
import Main from './components/Main'
import Footer from './components/Footer'
import menu from './data/menu'
import comics from './data/comics'

function App() {

  return (
    <>
      <Header links={menu} />
      <Jumbotron />
      <Main array={comics} />
      <Footer />
    </>
  )
}

export default App

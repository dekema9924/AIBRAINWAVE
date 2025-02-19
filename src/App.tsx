import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/pages/Hero"

function App() {

  return (
    <>
      <Header/>
      <div className="relative top-24 w-11/12 m-auto">
          <Hero/>
          <Footer/>

      </div>
    </>
  )
}

export default App

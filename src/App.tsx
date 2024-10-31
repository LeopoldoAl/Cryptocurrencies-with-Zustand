import CriptoSearchForm from './components/CriptoSearchForm'
import './index.css'
function App() {
  

  return (
    <>
      <div className="container">
        <h1 className='app-title'>
          <span>Cryptocurrency</span> valuation
        </h1>

        <div className="content">
          <CriptoSearchForm/>
        </div>
      </div>
    </>
  )
}

export default App

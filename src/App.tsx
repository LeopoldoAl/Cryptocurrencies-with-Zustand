import { useEffect } from 'react'
import CriptoSearchForm from './components/CriptoSearchForm'
import './index.css'
import { useCryptoStore } from './store'
import CryptoPriceDisplay from './components/CryptoPriceDisplay'
function App() {
  
  const fetchCrypto = useCryptoStore((state) => state.fetchCrypto)

  useEffect(() => {
    fetchCrypto()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className='app-title'>
          <span>Cryptocurrency</span> valuation
        </h1>

        <div className="content">
          <CriptoSearchForm/>
          <CryptoPriceDisplay/>
        </div>
      </div>
    </>
  )
}

export default App

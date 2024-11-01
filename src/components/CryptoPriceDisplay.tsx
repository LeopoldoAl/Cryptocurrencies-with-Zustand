import { useMemo } from "react"
import { useCryptoStore } from "../store"


export default function CryptoPriceDisplay() {
    const result =  useCryptoStore((state) => state.result)
    const hasResult = useMemo(() => !Object.values(result).includes(''),[result.PRICE])
    
  return (
    <div className="result-wrapper">
        {hasResult && (
            <>
                <h2>Valuation</h2>
                <div className="result">
                    <img 
                        src={`https://cryptocompare.com/${result.IMAGEURL}`} 
                        alt="Cryptocurrency Image" 
                    />
                    <div>
                        <p>The price is about: <span>{result.PRICE}</span></p>
                        <p>The highest price in the day: <span>{result.HIGHDAY}</span></p>
                        <p>The lowest price in the day: <span>{result.LOWDAY}</span></p>
                        <p>Last 24 hours change: <span>{result.CHANGEPCT24HOUR}</span></p>
                        <p>The last update: <span>{result.LASTUPDATE}</span></p>
                    </div>
                </div>
            </>
        )}
        
    </div>
  )
}

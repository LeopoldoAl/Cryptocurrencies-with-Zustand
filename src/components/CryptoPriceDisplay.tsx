import { useMemo } from "react"
import { useCryptoStore } from "../store"


export default function CryptoPriceDisplay() {
    const result =  useCryptoStore((state) => state.result)
    const hasResult = useMemo(() => !Object.values(result).includes(''),[result.PRICE])
    
  return (
    <div>
        {hasResult && (
            <>
                <h2>Valuation</h2>
                <div className="result">

                    <div>
                        <p>The price is about: <span>{result.PRICE}</span></p>
                    </div>
                </div>
            </>
        )}
        
    </div>
  )
}

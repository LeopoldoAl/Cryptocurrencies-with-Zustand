import { ChangeEvent, FormEvent, useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import { Pair } from "../types";
import ErrorMessage from "./ErrorMessage";

export default function CriptoSearchForm() {
    const cryptocurrencies = useCryptoStore((state) => state.crytocurrencies)
    const fetchData = useCryptoStore((state) => state.fetchData)
    const [pair, setPair] = useState<Pair>({
        currency: '',
        cryptocurrency: ''
    })
    const [error, setError] = useState('')

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(pair).includes('')) {
            setError('All of the fields are necessary!')
            return
        }

        setError('')
        // We are find out the API
        fetchData(pair)
    }
  return (
    <form
        className="form"
        onSubmit={handleSubmit}
    >

        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div className="field">
            <label htmlFor="currency">Currency:</label>
            <select 
                name="currency" 
                id="currency"
                onChange={handleChange}
                value={pair.currency}
            >
                <option value="">-- Choise --</option>
                {currencies.map( currency => (
                    <option key={currency.code} value={currency.code}>{currency.name}</option>
                ))}
            </select>
        </div>
        
        <div className="field">
            <label htmlFor="cryptocurrency">Cryptocurrency:</label>
            <select 
                name="cryptocurrency" 
                id="cryptocurrency"
                onChange={handleChange}
                value={pair.cryptocurrency}
            >
                <option value="">-- Choise --</option>
                {cryptocurrencies.map( crypto => (
                    <option 
                        key={crypto.CoinInfo.FullName}
                        value={crypto.CoinInfo.Name}
                    >{crypto.CoinInfo.FullName}</option>
                ))}
            </select>
        </div>

        <input type="submit" value='Valuation'/>
    </form>
  )
}

export default function CriptoSearchForm() {
  return (
    <form
        className="form"
    >
        <div className="field">
            <label htmlFor="currency">Currency:</label>
            <select 
                name="currency" 
                id="currency"
            >
                <option value="">-- Choise --</option>
            </select>
        </div>
        
        <div className="field">
            <label htmlFor="cryptocurrency">Cryptocurrency:</label>
            <select 
                name="cryptocurrency" 
                id="cryptocurrency"
            >
                <option value="">-- Choise --</option>
            </select>
        </div>

        <input type="submit" value='Valuation'/>
    </form>
  )
}

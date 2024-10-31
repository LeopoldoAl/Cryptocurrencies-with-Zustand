import { devtools } from "zustand/middleware";
import { create } from "zustand";
import axios from "axios";
import { CryptoCurrrenciesResponseSchema } from "./schemas/crytp-schema";
import { Cryptocurrency } from "./types";

type CryptoStore = {
    crytocurrencies: Cryptocurrency[]
    fetchCrypto: () => Promise<void>
}

async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: { Data }} = await axios(url)
    const result = CryptoCurrrenciesResponseSchema.safeParse(Data)
    
    if (result.success) {
        return result.data
    }
}
export const useCryptoStore = create<CryptoStore>()(
    devtools((set) => ({
    crytocurrencies: [],
    fetchCrypto: async () => {
        const crytoCurrencies = await getCryptos()
        set(() => ({
            crytocurrencies: crytoCurrencies
        }))
    }
})))
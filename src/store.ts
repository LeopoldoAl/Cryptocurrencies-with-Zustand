import { devtools } from "zustand/middleware";
import { create } from "zustand";
import { Cryptocurrency, CryptoPrice, Pair } from "./types";
import { fetchCurrentCryptoPrice, getCryptos } from "./services/CriptoService";

type CryptoStore = {
    crytocurrencies: Cryptocurrency[]
    result: CryptoPrice
    loading: boolean
    fetchCrypto: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(
    devtools((set) => ({
    crytocurrencies: [],
    result: {
        IMAGEURL: '',
        PRICE: '',
        HIGHDAY: '',
        LOWDAY: '',
        CHANGEPCT24HOUR: '',
        LASTUPDATE: '',
    },
    loading: false,
    fetchCrypto: async () => {
        const crytoCurrencies = await getCryptos()
        set(() => ({
            crytocurrencies: crytoCurrencies
        }))
    },
    fetchData: async (pair) => {
        set(() => ({
            loading: true
        }))
        const result = await fetchCurrentCryptoPrice(pair)
        set(() => ({
            result,
            loading: false
        }))
    },
})))
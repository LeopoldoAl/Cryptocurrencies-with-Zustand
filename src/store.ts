import { devtools } from "zustand/middleware";
import { create } from "zustand";
import { Cryptocurrency, Pair } from "./types";
import { fetchCurrentCryptoPrice, getCryptos } from "./services/CriptoService";

type CryptoStore = {
    crytocurrencies: Cryptocurrency[]
    fetchCrypto: () => Promise<void>
    fetchData: (pair: Pair) => Promise<void>
}

export const useCryptoStore = create<CryptoStore>()(
    devtools((set) => ({
    crytocurrencies: [],
    fetchCrypto: async () => {
        const crytoCurrencies = await getCryptos()
        set(() => ({
            crytocurrencies: crytoCurrencies
        }))
    },
    fetchData: async (pair) => {
        await fetchCurrentCryptoPrice(pair)
    },
})))
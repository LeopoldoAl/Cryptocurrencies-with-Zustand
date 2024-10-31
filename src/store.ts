import { devtools } from "zustand/middleware";
import { create } from "zustand";
import { Cryptocurrency } from "./types";
import { getCryptos } from "./services/CriptoService";

type CryptoStore = {
    crytocurrencies: Cryptocurrency[]
    fetchCrypto: () => Promise<void>
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
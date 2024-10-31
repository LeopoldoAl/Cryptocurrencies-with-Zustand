import { create } from "zustand";
import axios from "axios";
import { CryptoCurrrenciesResponseSchema } from "./schemas/crytp-schema";

async function getCryptos() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const {data: { Data }} = await axios(url)
    const result = CryptoCurrrenciesResponseSchema.safeParse(Data)
    console.log(result)
}
export const useCryptoStore = create(() => ({
    fetchCrypto: () => {
        getCryptos()
    }
}))
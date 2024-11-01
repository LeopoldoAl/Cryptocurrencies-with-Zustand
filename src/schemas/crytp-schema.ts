import { z } from 'zod'

export const CurrencySchema = z.object({
    code: z.string(),
    name: z.string()
})

export const CryptoCurrrencyResponseSchema = z.object({
    CoinInfo: z.object({
        FullName: z.string(),
        Name: z.string()
    })
})

export const CryptoCurrrenciesResponseSchema = z.array(CryptoCurrrencyResponseSchema)

export const PairSchema = z.object({
    currency: z.string(),
    cryptocurrency: z.string()
})
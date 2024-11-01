import { z } from 'zod'
import { CurrencySchema, CryptoCurrrencyResponseSchema, PairSchema } from '../schemas/crytp-schema'

export type Currency = z.infer<typeof CurrencySchema>
export type Cryptocurrency = z.infer<typeof CryptoCurrrencyResponseSchema>
export type Pair = z.infer<typeof PairSchema>
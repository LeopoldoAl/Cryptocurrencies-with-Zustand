import { z } from 'zod'
import { CurrencySchema } from '../schemas/crytp-schema'

export type Currency = z.infer<typeof CurrencySchema>
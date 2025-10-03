import * as migration_20250929_195037 from './20250929_195037'
import * as migration_20250929_204944 from './20250929_204944'
import * as migration_20250929_205531 from './20250929_205531'
import * as migration_20251003_141044 from './20251003_141044'

export const migrations = [
  {
    up: migration_20250929_195037.up,
    down: migration_20250929_195037.down,
    name: '20250929_195037',
  },
  {
    up: migration_20250929_204944.up,
    down: migration_20250929_204944.down,
    name: '20250929_204944',
  },
  {
    up: migration_20250929_205531.up,
    down: migration_20250929_205531.down,
    name: '20250929_205531',
  },
  {
    up: migration_20251003_141044.up,
    down: migration_20251003_141044.down,
    name: '20251003_141044',
  },
]

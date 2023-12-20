# Monoschinos Scrapper 📺

Dependecy-Lowest Monoschinos scrapper for nodejs, just using `node-html-parser` and `he` for faster DOM parsing.

> [!WARNING]
> This library isn't finished yet, expect breaking changes.


# Now in npm 🥳
Install this module with
```bash
# npm
npm i monoschinos

# pnpm
pnpm add monoschinos

# bun
bun install monoschinos
```

# Usage
Just import from the module and execute the function
```ts
import {Search} from "monoschinos";
let results = await Search("Charlotte");
```

```ts
import {HomePage} from "monoschinos";
let {RecentEpisodes, RecentAnimes} = await HomePage();
```

```ts
import {Anime} from "monoschinos";
let results = await Anime("charlotte-sub-espanol");
```

> [!NOTE]
> For use this module is needed set `"type": "module"` -> on your package.json

Made with ❤️ from 🇲🇽 by CarlosNunexMX / Discord @kururosu

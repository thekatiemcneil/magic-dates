# Magic Dates

## About The Project

This package is as an exploration of writing NPM packages. It is not necessarily meant to be useful or even used, but it can be if you'd like. 

It leverages the `date-fns` library and creates more opinionated versions of their existing functions.

### Installation

```sh
npm install @thekatiemcneil/magic-dates
```

## Example Usage

```js
import { formatFormalDate } from "@thekatiemcneil/magic-dates"

const sampleDate = '2021-07-15';
const dateIsPastDay = formatFormalDate(sampleDate)

// returns July 15, 2021
```

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

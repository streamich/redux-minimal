# Icons

- Refreshes favicon in browser tab
- Export to `.png`
- 10 color preset with color picker
- Persists filter string in local storage


## Redux Schema

```js
{
    icons: [
        {
            uuid: '23lkrjfw9-23orjfsdf3234',
            name: 'Mario',
            tags: {
                Games: 1,
                Retro: 1
            },
            pixels: {
                '1': {
                    '1': 'red'
                }
            },
            colors: [],
            history: []
        }
    ],
    search: {
        games: ['23lkrjfw9-23orjfsdf3234'],
        retro: ['23lkrjfw9-23orjfsdf3234'],
    }
}
```

# Icons

- Refreshes favicon in browser tab
- Export to `.png`
- 10 color preset with color picker
- Persists filter string in local storage
- Use `ArrowLeft` and `ArrowRight` keys to navigate history


## Redux Schema

```js
{
    icons: {
        '23lkrjfw9-23orjfsdf3234': {
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
            colorIndex: -1,
            colors: [],
        }
    },
    history: {
        '23lkrjfw9-23orjfsdf3234': {
            index: -1,
            list: [],
        }
    }
}
```

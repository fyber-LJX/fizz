import { createBrowserHistory } from "history"

const history = createBrowserHistory()

history.listen((location: any) => {
    console.log(location)
})

export default history

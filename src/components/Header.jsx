import { useContext } from "react"
import { AppContext } from "../App"

export default function Header() {
    const cont = useContext(AppContext)

    return <h1>{ cont.APP_NAME }</h1>
}

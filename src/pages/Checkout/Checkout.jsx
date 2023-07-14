import { useContext } from "react"
import PathContext from "../../context/PathContext"

export default function Checkout(){

    const { setPath } = useContext(PathContext)

    setPath('checkout')

    return(
        <p>Checkout</p>
    )
}
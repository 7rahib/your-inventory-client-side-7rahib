import { useEffect, useState } from "react"

const useInventory = () => {
    const [inventories, setInventories] = useState([])
    useEffect(() => {
        fetch('https://damp-eyrie-36624.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventories(data))
    }, [inventories])

    return [inventories, setInventories]
}

export default useInventory;
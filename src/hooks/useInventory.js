import { useEffect, useState } from "react"

const useInventory = () => {
    const [inventories, setInventory] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [])

    return [inventories]
}

export default useInventory;
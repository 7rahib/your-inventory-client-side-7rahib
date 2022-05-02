import { useEffect, useState } from "react"

const useInventoryDetail = _id => {
    const [inventory, setInventory] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${_id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))

    }, [_id])

    return [inventory]
}

export default useInventoryDetail;
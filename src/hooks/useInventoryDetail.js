import { useEffect, useState } from "react"

const useInventoryDetail = _id => {
    const [inventory, setInventory] = useState({})

    useEffect(() => {
        const url = `https://damp-eyrie-36624.herokuapp.com/inventory/${_id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))

    }, [_id, inventory])

    return [inventory]
}

export default useInventoryDetail;
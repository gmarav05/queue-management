import { useState } from "react"

export default function QueueForm ({onAdd}) {
    const [name, setName] = useState('')
    const [service, setService] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim() || !service.trim()) return
        onAdd({name,service})
        setName('')
        setService('')
    }
    return (
        <>
         <form className="queue-form" onSubmit={handleSubmit}>
            <h2>Add to queue</h2>
         </form>
        </>
    )
}
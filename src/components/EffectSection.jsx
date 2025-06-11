import Button from "./Button/Button.jsx";
import Modal from "./Modal/Modal.jsx";
import { useState, useEffect, useCallback } from "react";
import useInput from "../hooks/useInput.js";

export default function EffectSection() {
    const input = useInput()
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    const fetchUsers = useCallback(async () => {
        setLoading(true)

        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()

        setUsers(users)
        setLoading(false)
    }, [])

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    return (
        <section>
            <h3>Effect Section</h3>
            <Button onClick={() => setModal(true)}>open modal</Button>

            <Modal open={modal}>
                <h3>Aloha!</h3>
                <p>modal!</p>
                <Button onClick={() => setModal(false)}>Close modal</Button>
            </Modal>

            {loading &&
                <div>
                    Loading...
                </div>
            }

            {!loading && (
                <>
                    <input type="text" className='control' {...input} />
                    <pre>{input.value}</pre>
                    <ul>
                        {users
                            .filter((user => user.name.toLowerCase().includes(input.value.toLowerCase())))
                            .map(user =>
                            <li key={user.id}>
                                {user.name}
                            </li>
                        )}
                    </ul>

                </>
                )

            }
        </section>
    )
}
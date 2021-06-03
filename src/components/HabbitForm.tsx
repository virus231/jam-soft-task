import { Button, ButtonGroup, FormControl, Input } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addHabbit, resetAll } from "../redux/reducers/habbits.reducer"
import { uuid } from 'uuidv4';


export const HabbitForm = () => {
    const [title, setTitle]= useState<string>("") // Імя задачі
    const dispatch = useDispatch()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if(title.length > 1) {
            dispatch(addHabbit({
                id: uuid(),
                title,
                complete: false
            }))
        }
        setTitle('')
    }

    const handleChange = (e: any) => {
        setTitle(e.target.value)
    }

    const reset = () => {
        dispatch(resetAll())
    }


    return (
        <form onSubmit={handleSubmit} className="form">
            <Input type="text" value={title} onChange={handleChange} variant="filled" placeholder="Ваша звичка.." />
            <ButtonGroup display="flex" mt="10px" variant="outline" spacing="6">
                <Button type="submit" colorScheme="blue">Додати</Button>
                <Button onClick={reset}>Скинути все</Button>
            </ButtonGroup>
        </form>
    )
}
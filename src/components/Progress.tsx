import { Box, CircularProgress, CircularProgressLabel, Text } from "@chakra-ui/react"
import React from "react"
import { useSelector } from "react-redux"
import { couldStartTrivia } from "typescript"
import { habbitsSelector } from "../redux/reducers/habbits.reducer"

export const Progress = () => {
    const [done, setDone] = React.useState([])

    const {habbits} = useSelector(habbitsSelector)

    const totalDone = habbits.filter(habbit => {
        return (habbit.complete === true)
    })

    const result = Math.round((totalDone.length / habbits.length) * 100)


     return (
        <Box mt="100px" textAlign="center">
            <CircularProgress value={habbits.length ? result : 0} color="green.400">
                <CircularProgressLabel>{habbits.length ? result : 0}%</CircularProgressLabel>
            </CircularProgress>
            <Text>% виконаних звичок</Text>
        </Box>
    )
}
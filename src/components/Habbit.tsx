import { IconButton } from '@chakra-ui/button'
import { CheckIcon, CloseIcon, EditIcon, PhoneIcon } from '@chakra-ui/icons'
import { Box, Center } from '@chakra-ui/layout'
import { useDispatch } from 'react-redux'
import { performedHabbit, removeHabbit } from '../redux/reducers/habbits.reducer'
import { IHabbits } from '../utils/interfaces'


interface IProps {
    habbit: IHabbits
}

export const Habbit = ({ habbit }: IProps) => {
    const dispatch = useDispatch()
    
    const deleteHabbit = (id: string) => {
        dispatch(removeHabbit(id))
    }

    const checkHabbit = (id: string) => {
        dispatch(performedHabbit(id))
    }


    return (
        <Box mt="10px" spaccing="15px">
            <Center centerContent >
                <Box textDecoration={habbit.complete ? 'line-through': 'inherit'}>
                    {habbit.title}  -
                </Box>
                <Box ml="15px">
                    <IconButton
                        colorScheme="teal"
                        aria-label="Call Segun"
                        size="xs"
                        icon={<CheckIcon />}
                        onClick={() => checkHabbit(habbit.id)}

                    />
                    <IconButton
                        variant="outline"
                        colorScheme="teal"
                        aria-label="Call Segun"
                        size="xs"
                        icon={<EditIcon />}
                        mx="15px"
                    />
                    <IconButton
                        colorScheme="teal"
                        aria-label="Call Segun"
                        size="xs"
                        icon={<CloseIcon />}
                        onClick={() => deleteHabbit(habbit.id)}
                    />
                </Box>
                
            </Center>
        </Box>
    )
}
import { IconButton } from '@chakra-ui/button'
import { CheckIcon, CloseIcon, EditIcon, PhoneIcon } from '@chakra-ui/icons'
import { Box, Center } from '@chakra-ui/layout'
import { useDispatch } from 'react-redux'
import { performedHabbit, removeHabbit, updateHabbit } from '../redux/reducers/habbits.reducer'
import { IHabbits } from '../utils/interfaces'
import { Input } from "@chakra-ui/react"
import { createRef, MutableRefObject, useEffect, useRef } from 'react'


interface IProps {
    habbit: IHabbits
}

export const Habbit = ({ habbit }: IProps) => {
    const dispatch = useDispatch()
    // const inputRef:React.RefObject<HTMLInputElement> = useRef<MutableRefObject<boolran>>(true);
    const textInput = useRef<any>(true)

    function handleFocus(){
        textInput.current.disabled = false;

        if (textInput.current) {
            textInput?.current?.focus()
        }
    }
    // const inputRef = useRef(true);


    const deleteHabbit = (id: string) => {
        dispatch(removeHabbit(id))
    }

    const checkHabbit = (id: string) => {
        dispatch(performedHabbit(id))
    }

    const changeFocus = () => {
    
    };
    
      const update = (id:string, value:string, e:any) => {
        if (e.which === 13) {
          dispatch(updateHabbit({id, value}))
          textInput.current!.disabled = true;
        }
      };

    useEffect(() => {
        textInput.current.disabled = true;
    },[])

    return (
        <Box mt="10px" spaccing="15px">
            <Center centerContent >
                <Box textDecoration={habbit.complete ? 'line-through': 'inherit'}>
                    {/* {habbit.title}  - */}
                    <Input
                        ref={textInput}
                        borderWidth="3px"
                        borderColor={habbit.complete ? "lime" : "red.400"}
                        focusBorderColor={habbit.complete ? "lime" : "red.400"}
                        defaultValue={habbit.title}
                        onKeyPress={(e:any) => update(habbit.id, textInput.current.value, e)}
                    />
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
                        onClick={() => handleFocus()}
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
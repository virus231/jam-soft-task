import { Center, Wrap } from "@chakra-ui/layout";
import { useSelector } from "react-redux";
import { DragDropContext } from 'react-beautiful-dnd';

import { habbitsSelector } from "../redux/reducers/habbits.reducer";
import { Habbit } from "./Habbit";

export const HabbitsList = () => {
    const { habbits } = useSelector(habbitsSelector);



    return (
        <Wrap mt="50px">
            <Center bg="white" borderRadius="10px" boxShadow="1px 1px 5px 0px" padding="30px"  flexDirection="column">
                {
                habbits.length === 0 ? <p>Додай свою звичку</p> :
                habbits &&
                    habbits.map((habbit) => {
                        return <Habbit habbit={habbit} />;
                    })}
            </Center>
        </Wrap>
    );
};

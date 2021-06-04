import { Container, Box, Center, WrapItem, Text } from "@chakra-ui/react"
import { Alerts } from "../components/Alert"
import { HabbitForm } from "../components/HabbitForm"
import { HabbitsList } from "../components/HabbitsList"
import { Progress } from "../components/Progress"



export const Home = () => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" bgGradient="linear(to-r,gray.300,yellow.400,pink.200)" alignItems="center" height="100vh">
            <Container centerContent>
                <Text fontSize="3em">
                    Список звичок
                </Text>
            </Container>
            <Container centerContent>
                <WrapItem>
                    <Center flexDirection="column">
                        <HabbitForm/>
                        <HabbitsList/>
                        <Progress/>
                    </Center>
                </WrapItem>
            </Container>
        </Box>
        
        
    )
}
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/alert";
import { CloseButton } from "@chakra-ui/close-button";
import { Box } from "@chakra-ui/layout";
import { Fade } from "@chakra-ui/transition";
import { useDispatch, useSelector } from "react-redux";
import { alertsSelector, hideAlert } from "../redux/reducers/alerts.reducer";

export const Alerts = () => {
    const dispatch = useDispatch()

    const { visible } = useSelector(alertsSelector);

    const hide = () => {
        dispatch(hideAlert())
    }
    
    return (
        <Fade in={visible}>
            <Alert display={visible ? 'block' : 'none'} status="success" w="550px" height="60px" transition="ease-in-out" position="absolute" bottom="10px">
                <Box display="flex"> 
                    <AlertIcon />
                    <Box flex="1">
                        <AlertTitle>Звичку успішно створено!</AlertTitle>
                    </Box>
                </Box>
                
                <CloseButton onClick={hide} position="absolute" right="8px" top="8px" />
            </Alert>
        </Fade>
        
    );
};

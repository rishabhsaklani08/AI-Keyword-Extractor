import { Box, Image, Text, Flex } from '@chakra-ui/react';
import logo from '../assets/openai.png';
const Footer = () => {
    return (
        <Box marginTop={50}>
            <Flex justifyContent='center' alignItems='center'>
                <Image src={logo} marginRight={1} />
                <Text>Powered By Open AI</Text>
            </Flex>
            <Text>Made with ☕ by Rishabh Saklani</Text>
        </Box>
    )
}

export default Footer

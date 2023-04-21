import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";

export default function Header() {
    return (
        <Flex bg="blue.400" p={4} alignItems="center">
        <Box>
            <Heading color="white">Logo</Heading>
        </Box>
        <Spacer />
        <Box>
            <Heading color="white" size="md" mr={4}>
            Menu1
            </Heading>
        </Box>
        <Box>
            <Heading color="white" size="md" mr={4}>
            Menu2
            </Heading>
        </Box>
        <Box>
            <Heading color="white" size="md" mr={4}>
            Menu3
            </Heading>
        </Box>
        </Flex>
    )
}
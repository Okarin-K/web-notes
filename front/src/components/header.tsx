import { Box, Flex, Heading, Link, Spacer } from "@chakra-ui/react";

export default function Header() {
    return (
        <Flex bg="blue.400" p={4} alignItems="center">
        <Box>
            <Link href="/">
                <Heading color="white">Notes</Heading>    
            </Link>
        </Box>
        <Spacer />
        </Flex>
    )
}
import { Box, Button, Flex, Heading, HStack, Input, Link, Spacer, Text, Textarea } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { z } from "zod";
import { Content } from "./content";

export const NewNote = () => {
    const router = useRouter();
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const createNote = useCallback(async () => {
        const res = await fetch('/api/notes', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if(!res.ok) {
            alert('Note failed to create...');
            return;
        }

        const id = z.number().parse(res.json());
        alert('Note created!!');

        router.push('/notes/[id]', `/notes/${id}`);
    }, [router, title, body]);

    return (
        <Box m={6}>
            <Link href="/">← back</Link>
            <Heading mt='4' color={'gray.600'} size={"sm"}>New Note</Heading>
            <Flex direction='column' background={'gray.100'} p={6}> 
                <HStack mt={5}>
                    <Spacer />
                    <Button colorScheme='blackAlpha'>cancel</Button>
                    <Button colorScheme='pink' onClick={createNote}>create</Button>
                </HStack>
                <Box>
                    <Text>Title</Text>
                    <Input background='gray.50' textColor='gray.800' onChange={(e) => setTitle(e.target.value)} />
                </Box>
                <Box mt='4' rounded='lg'>
                    <Text>Body</Text>
                    <Textarea background='gray.50' textColor='gray.800' h={64} onChange={(e) => setBody(e.target.value)} />
                </Box>
                <Box mt='4' rounded='lg'>
                    <Heading>Preview</Heading>
                    <Content markdown={body} />
                </Box>
            </Flex>
        </Box>
    )
}

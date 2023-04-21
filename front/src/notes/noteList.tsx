import { Box, Button, Card, CardBody, CardHeader, Flex, Grid, GridItem, Heading, HStack, Spacer, useToast } from "@chakra-ui/react";
import Link from "next/link"
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import useSWR from 'swr'
import { Note, zNotes } from "./type";

type Props = {
  initialState: Note[]
}

type NoteProps = {
  item: Note;
}

export const NoteList: React.FC<Props> = ({initialState}) => {
  if(!initialState) {
    return <div>loading...</div>
  }

  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        {initialState.map((note) => (
          <NoteItem key={note.id} item={note} />
        ))}
    </Grid>
  )
}

const NoteItem: React.FC<NoteProps>  = ({item}) => {
  const toast = useToast();
  const router = useRouter();

  const deleteNote = useCallback(async (id: string) => {
      const res = await fetch(`http://localhost:8787/api/notes/${id}`, {
        method: 'DELETE'
      });

      if(res.status === 200) {
        toast({
          title: 'Success',
          description: 'Note deleted',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }

      router.reload();
  }, [toast, router]);

  return (
    <GridItem bg='gray.100' p='5'>
        <Box p={2} mb={3}>
          <Link href={`/notes/${item.id}`} prefetch={false}>
            <Heading size='md'>{item.title}</Heading>
          </Link>
        </Box>
        <HStack>
          <Spacer />
          <Button colorScheme={'linkedin'}>Update</Button>
          <Button colorScheme={'pink'} onClick={(e) => {
            e.preventDefault();

            deleteNote(item.id);
          }}>Delete</Button>
        </HStack>
    </GridItem>
  )
}
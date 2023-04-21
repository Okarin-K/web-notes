import { Box, Card, CardBody, CardHeader, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import Link from "next/link"
import { useState } from "react";
import useSWR from 'swr'
import { Note, zNotes } from "./type";

type Props = {
  initialState: Note[]
}

type NoteProps = {
  item: Note;
}

export const NoteList: React.FC<Props> = ({initialState}) => {
  const [notes, setNotes] = useState<Note[]>(initialState);

  if(!initialState) {
    return <div>loading...</div>
  }

  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        {initialState.map((note) => (
          <NoteItem key={note.id} item={note} />
        ))}
    </Grid>
  )
}

const NoteItem: React.FC<NoteProps>  = ({item}) => {
  return (
    <GridItem w='100%' h='20' bg='gray.100' p='5' pt='8'>
      <Box>
        <Link href={`/notes/${item.id}`} prefetch={false}>
          <Heading size='md'>{item.title}</Heading>
        </Link>
      </Box>
    </GridItem>
  )
}
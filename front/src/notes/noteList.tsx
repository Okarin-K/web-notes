import { Box, Card, CardBody, CardHeader, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";
import Link from "next/link"
import useSWR from 'swr'
import { Note, zNotes } from "./type";

type Props = {
  initialState: Note[]
}

const fetcher = (url: string) => fetch(url).then(async(res) => {
  const data = await res.json();
  const notes = zNotes.parse(data);
  return notes;
})

type NoteProps = {
  item: Note;
}

export const NoteList: React.FC<Props> = ({initialState}) => {
  const data = initialState

  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        {data.map((note) => (
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
import Header from "@/components/header";
import { Content } from "@/notes/content";
import { Note } from "@/notes/type";
import { Box, Container, Heading } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

type Props = {
    note: Note
}

export default function Page({ note }: Props) {
    return (
        <>
            <Header></Header>
            <Container mt={5} p={5} background='gray.50' height='100vh'>
                <Heading mb={8} size='lg'>{note.title}</Heading>
                <Content markdown={note.content} />
            </Container>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params?.id;
    if(typeof id !== 'string') {
        throw new Error('id is not string');
    }

    const res = await fetch(`http://localhost:8787/api/notes/${id}`);
    const note = await res.json();
    return {
        props: {
            note
        }
    }
}

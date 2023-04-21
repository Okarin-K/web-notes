import { API_URL } from "@/constants/api";
import { Box, Grid, GridItem, Heading, Link, Spinner } from "@chakra-ui/react";
import { Suspense, useCallback, useEffect, useState } from "react";
import { NoteList } from "./noteList";
import { zNotes, Notes, Note } from "./type";

type Props = {
    notes: Notes
}

export default function Page() {
    const [loading, setLoading] = useState(false);
    const [notes, setNotes] = useState<Note[]>([]);

    const getNotes = useCallback(async () => {
        const res = await fetch('http://localhost:8787/api/notes', {
            method: 'GET'
        });
        const notes = await res.json();
        
        return zNotes.parse(notes);
    }, []);

    useEffect(() => {
        console.log('useEffect');

        getNotes().then((notes) => {
            console.log(notes);
            setNotes(notes);
            setLoading(true);
        }).catch((err) => {
            console.log(err);
        });
    }, [getNotes, loading]);

    return (
        <main>
            <h1>List Notes</h1>
            <Suspense fallback={<Spinner />}>
                <NoteList initialState={notes} />
            </Suspense>
        </main>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:8787/api/notes', {
        method: 'GET'
    });
    const notes = await res.json();

    return {
        props: {
            notes: zNotes.parse(notes)
        }
    }
}

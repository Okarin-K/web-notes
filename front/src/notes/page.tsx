import { Spinner } from "@chakra-ui/react";
import { Suspense } from "react";
import { NoteList } from "./noteList";
import { zNotes } from "./type";

export default function Page() {
    const notes = getNotes();

    return (
        <main>
            <h1>List Notes</h1>
            <Suspense fallback={<Spinner />}>
                <NoteList initialState={notes} />
            </Suspense>
        </main>
    )
}

export const getNotes = () => {
    
    return zNotes.parse([
        {
            id: "1",
            title: "Note 1",
            content: "Content 1",
            createdAt: new Date().toLocaleString(),
            updatedAt: new Date().toLocaleString(),
        },
        {
            id: "2",
            title: "Note 2",
            content: "Content 2",
            createdAt: new Date().toLocaleDateString(),
            updatedAt: new Date().toLocaleDateString(),
        },
    ]);
}
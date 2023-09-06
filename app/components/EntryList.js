import { Button } from "react-bootstrap";

export default function EntryList(props) {
    const entries = props.entries;
    const didDeleteEntry = props.didDeleteEntry;

    async function handleDelete(entryId) {
        const response = await fetch("/api/entry/" + entryId, { method: "DELETE" });

        if (response.ok) {
            didDeleteEntry();
        }
    }

    const listEntries = entries.map(entry =>
        <li key={entry.id}>
            {entry.id} {entry.username} {entry.description}
            <Button onClick={() => handleDelete(entry.id)}>delete</Button>
        </li>
    );

    return <ul>{listEntries}</ul>
}
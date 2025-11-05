```mermaid
sequenceDiagram
participant Browser
participant Server
note right of Browser: Browser Executes redrawNotes()
note right of Browser: Browser Executes sendToServer(). sendToServer makes a POST Request with the payload.
Browser->>Server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa 
```
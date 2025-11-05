```mermaid
sequenceDiagram

    participant Browser
    participant Server

    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate Server
    Server-->>Browser: Requested HTML Page
    deactivate Server
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate Server
    Server-->>Browser: The CSS File
    deactivate Server
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate Server
    Server-->>Browser: The JavaScript File
    deactivate Server
    Browser->>Server: GET https://studies.cs.helsinki.fi/exampleapp/data.json 
    activate Server
    Server-->>Browser: [ { "content": "Today is Nov of 2025. Pizza taste great", "date":"2025-11-0...
    deactivate Server

```
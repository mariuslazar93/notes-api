# Notes API
A simple CRUD API for managing notes available at https://ng-notes-api.herokuapp.com/. 

Uses an in-memory DB which will be lost after ~30m of inactivity on the server.

The API is protected by JWT using Auth0, which means each request needs to have an Authorization header with an access token.

## Get all notes for a user
```
GET /notes
```

## Get a note by id
```
GET /notes/{noteId}
```

## Creates a new note
```
POST /notes
{
    title: "Note title",
    content: "Note Description"
}
```

## Update a note
```
PATCH /notes/{noteId}
{
    title: "Note title",
    content: "Note Description"
}
```

## Delete a note by id
```
DELETE /notes/{noteId}
```

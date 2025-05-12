# Django Notes App API

A simple Django REST API for managing notes. Supports creating, updating, and deleting notes.

## Features

- Create a new note
- Update an existing note
- Delete a note
- List all notes
- Retrieve a single note

---

## Installation

### Prerequisites

- Python 3.8+
- pip

### Windows

```sh
git clone https://github.com/AflaxCade/Fullsatck-Note-App.git
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

### Linux

```sh
git clone https://github.com/AflaxCade/Fullsatck-Note-App.git
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

---

## Running the App

```sh
# Apply migrations
python manage.py migrate

# Start the development server
python manage.py runserver
```

The API will be available at `http://127.0.0.1:8000/`

---

## API Endpoints


| Method | Endpoint                | Description             |
|--------|-------------------------|-------------------------|
| GET    | `/api/`                 | Lists all the endpoints |
| GET    | `/api/notes/`           | List all notes          |
| POST   | `/api/notes/`           | Create a new note       |
| GET    | `/api/notes/<id>/`      | Retrieve a note         |
| PUT    | `/api/notes/<id>/`      | Update a note           |
| PATCH  | `/api/notes/<id>/`      | Partially update note   |
| DELETE | `/api/notes/<id>/`      | Delete a note           |

### Example Note Object

```json
{
  "id": 1,
  "title": "Sample Note",
  "updated": "2025-04-29T12:24:05.908100Z",
  "created": "2025-04-27T05:26:15.397363Z"
}
```

---

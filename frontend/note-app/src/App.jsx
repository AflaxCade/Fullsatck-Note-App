import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NoteListPage from './pages/NoteListPage'
import NotePage from './pages/NotePage'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<NoteListPage />} />
            <Route path="/note/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

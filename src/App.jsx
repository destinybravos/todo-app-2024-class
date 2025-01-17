import { BrowserRouter, Routes, Route } from "react-router-dom"
import Welcome from "./pages/Welcome"
import AppLayout from "./layout/AppLayout"
import MyDay from "./pages/MyDay"
import Important from "./pages/Important"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* This is the welcome page route without a layout */}
        <Route path="/" element={<Welcome />} />

        {/* All other using the App Layout */}
        <Route element={<AppLayout />}>
          <Route path="/todo" element={<MyDay />} />
          <Route path="/important" element={<Important />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
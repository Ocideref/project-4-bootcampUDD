import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/homepage"
import { UsuariosPage } from "../pages/UsuariosPage"


export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Usuarios" element={<UsuariosPage />} />
    </Routes>
  )
}

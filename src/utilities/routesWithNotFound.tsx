import { Route, Routes } from "react-router-dom"
import { Footer, NavBar } from "../components"

interface Props {
    // children: React.ReactNode | [React.ReactNode]
    children: JSX.Element[] | JSX.Element;
}

const routesWithNotFound = ({ children }: Props) => {
  return (
    <>
      <Routes>
        {children}
        <Route path="*" element={<div>Not found</div>}/>
      </Routes>
    </>
  )
}

export default routesWithNotFound
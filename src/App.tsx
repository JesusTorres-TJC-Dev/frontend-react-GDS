import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import { AuthGuard, PublicGuard } from './guards'
import { AuthRoutes, PublicRoutes, Roles } from './models'
import {  AboutUs, Home, LoginPage, SignUpPage } from './pages'
import store from './redux/store'
import { RoutesWithNotFound } from './utilities'

// const AboutUs = lazy(() => import('./pages/AboutUs/AboutUs'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Cargando...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route element={<PublicGuard/>}>
                <Route path="/" element={<Navigate to={PublicRoutes.HOME}/>}/>
                <Route path={PublicRoutes.HOME} element={<Home/>}/>
                <Route path={PublicRoutes.ABOUT_US} element={<AboutUs/>}/>
              </Route>
              <Route element={<AuthGuard rol={Roles.EMPTY}/>}>
                <Route path={`${AuthRoutes.AUTH}`} element={<Navigate replace to={`/${AuthRoutes.AUTH}/${AuthRoutes.LOGIN}`}/>}/>
                <Route path={`${AuthRoutes.AUTH}/${AuthRoutes.LOGIN}`} element={<LoginPage/>}/>
                <Route path={`${AuthRoutes.AUTH}/${AuthRoutes.REGISTER}`} element={<SignUpPage/>}/>
              </Route>
              {/* <Route path={`${AuthRoutes.AUTH}/*`} element={<Auth/>}/> */}
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  )
}

export default App

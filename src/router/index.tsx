import React, { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
const About = lazy(() => import('@/views/about'))
const Home = lazy(() => import('@/views/home'))
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  }
]
export default routes

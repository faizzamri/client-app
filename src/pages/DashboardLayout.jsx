import React, { useState, createContext, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Dashboard'
import { BigSidebar, Navbar, SmallSidebar } from '../components'

const DashboardContext = createContext()

const DashboardLayout = () => {
  //temp
  const user = { name: 'john' }
  const [showSidebar, setShowSidebar] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleDarkTheme = () => { setIsDarkTheme(!isDarkTheme) }
  const toggleSidebar = () => { setShowSidebar(!showSidebar) }
  const logoutUser = () => { console.log('logout user') }
  return (
    <DashboardContext.Provider value={{ user, showSidebar, isDarkTheme, toggleDarkTheme, toggleSidebar, logoutUser }}>
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  )
}
export const useDashboardContext = () => useContext(DashboardContext)
export default DashboardLayout

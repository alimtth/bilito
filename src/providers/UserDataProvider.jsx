import {createContext, useState, useContext, useEffect} from 'react'

const UserContext = createContext()
// eslint-disable-next-line react/prop-types
export const UserDataProvider = ({children}) => {
  const storedUserData = localStorage.getItem('userData')
  const initialUserData =
    storedUserData && storedUserData !== 'undefined'
      ? JSON.parse(storedUserData)
      : {
          fullName: 'شیوا ارغوان',
          gender: 'زن',
          nationalCode: '30892581782',
          phoneNumber: '0918 592 3034',
        }
  const [userData, setUserData] = useState(initialUserData)

  const savaUserData = (newData) => {
    setUserData(newData)
  }

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData))
  }, [userData])

  return (
    <UserContext.Provider value={{userData, setUserData, savaUserData}}>
      {children}
    </UserContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  return useContext(UserContext)
}

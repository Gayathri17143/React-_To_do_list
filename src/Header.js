import React from 'react'

const Header = ({title}) => {
   
  return (
    <header>
        <h1>
             {title}
        </h1>
    </header>
  )
}
//if it is not properly getting any data from server then it will show a title by default
// Header.defaultProps ={
//     title:"welcome"
// }
export default Header

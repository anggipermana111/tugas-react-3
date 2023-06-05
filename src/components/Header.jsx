import React from 'react'

const Header = () => {
    const nama = "Anggi Permana";
    const style = {
        backgroundColor: "red",
        color: "white",
        padding: "30px 0",
        textAlign: "center"
    }
  return (
    <header style={style}>
        <h1>{nama}</h1>
    </header>
  )
}

export default Header;
import React from 'react'

const styles = {
    container : {
        display: 'flex',
        flexDirection: 'row',
        margin: "10px 500px",
        padding: "20px 10px",
        backgroundColor: "#000000",
        color: "#ffffff",
        justifyContent: "center",
        alignItems: 'center'
    }
}

const Header = ({title}) => {
  return (
    <div style={styles.container}>
        <div>🫰🏻</div>
        <div>{title}</div>
    </div>
  )
}

export default Header
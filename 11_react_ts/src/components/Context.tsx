import React, { useContext } from 'react'

import App, { AppContext } from '../App'
const Context = () => {

const details = useContext(AppContext)

    return <>
        {details &&(
            <div>
                <h2>linguagem: {details.language}</h2>
                <h4>FW: {details.framework}</h4>
                <h4>Qtd: {details.projects}</h4>
            </div>
        )}
    </>
}

export default Context


import React, { ReactElement } from 'react'

interface Props {
    name: string
}

function SecondyComponent(props: Props): ReactElement {
    return (
        <div>
            <p>Meu Segundo Componente</p>
            <p>O nome dele é {props.name} </p>
        </div>
    )
}

export default SecondyComponent

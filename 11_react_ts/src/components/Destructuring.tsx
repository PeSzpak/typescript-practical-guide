import React, { ReactElement } from 'react'

interface Props {
    title: string
    content: string
    commentsQty: number
    tags: string[]
}

const Destructuring = ({title, content, commentsQty, tags}: Props) => {
    return (
        <div>
        <h2>{}title</h2>
        <p>content</p>
        <p>Quantidade de Comentários: {commentsQty}</p>
            <div>
                {tags.map(tag => (
                    <span>#{tag} </span>
                ))}
            </div>
        </div>
    )
}

export default Destructuring

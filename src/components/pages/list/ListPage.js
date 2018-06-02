import React from 'react'

import { Controls } from './Controls'
import { ItemList } from './ItemList'

export const ListPage = () => (
    <div className="box is-shadowless">
        <Controls />
        <ItemList items={items} />
    </div>
)

const items = [
    {
        checked: false,
        content: 'Lage todo-app',
        id: 'L3zii6m'
    },
    {
        checked: true,
        content: 'Dra til Brilleland',
        id: 'FgYzQeM'
    },
    {
        checked: true,
        content: 'Ringe Get igjen',
        id: 'K8siM6y'
    },
    {
        checked: false,
        content: 'Klippe meg',
        id: 'FR5w4yv'
    }
]

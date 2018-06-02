import React from 'react'

import NewButton from './NewButton'
import Filter from './Filter'

export const Controls = () => (
    <div className="level">
        <div className="level-left">
            <NewButton />
        </div>
        <div className="level-right">
            <Filter />
        </div>
    </div>
)

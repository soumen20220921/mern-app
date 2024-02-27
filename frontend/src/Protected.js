import React from 'react'

const Protected = (props) => {
    const component = { props }
    return (
        <div>
            abc
            <component />
        </div>
    )
}

export default Protected

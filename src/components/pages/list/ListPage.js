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

// import { push } from 'react-router-redux'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import {
//     increment,
//     incrementAsync,
//     decrement,
//     decrementAsync
// } from '../../../reducers/counterReducer'
//
// const ListPage = props => (
//     <div>
//         <h1>Home</h1>
//         <p>Count: {props.count}</p>
//
//         <p>
//             <button onClick={props.increment} disabled={props.isIncrementing}>
//                 Increment
//             </button>
//             <button
//                 onClick={props.incrementAsync}
//                 disabled={props.isIncrementing}
//             >
//                 Increment Async
//             </button>
//         </p>
//
//         <p>
//             <button onClick={props.decrement} disabled={props.isDecrementing}>
//                 Decrementing
//             </button>
//             <button
//                 onClick={props.decrementAsync}
//                 disabled={props.isDecrementing}
//             >
//                 Decrement Async
//             </button>
//         </p>
//
//         <p>
//             <button onClick={() => props.changePage()}>
//                 Go to about page via redux
//             </button>
//         </p>
//     </div>
// )
//
// const mapStateToProps = state => ({
//     count: state.counter.count,
//     isIncrementing: state.counter.isIncrementing,
//     isDecrementing: state.counter.isDecrementing
// })
//
// const mapDispatchToProps = dispatch =>
//     bindActionCreators(
//         {
//             increment,
//             incrementAsync,
//             decrement,
//             decrementAsync,
//             changePage: () => push('/about-us')
//         },
//         dispatch
//     )
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(ListPage)

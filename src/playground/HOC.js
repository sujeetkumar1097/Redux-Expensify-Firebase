import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>INFO</h1>
        <p>The Info Is :{props.info}</p>
    </div>
)

const withAdminWarning = (WrappredComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private Info</p>}
            <WrappredComponent {...props}/>
        </div>
    )
}
const requireAuthentication = (WrappredComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <div><WrappredComponent {...props}/></div>
            ) : (
                <div>Please Login First</div>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<Info info={'Hi from Info'}/>, document.getElementById('root'))
//ReactDOM.render(<AdminInfo isAdmin={false} info='Hi from Info'/>, document.getElementById('root'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info='Hi from Info'/>, document.getElementById('root'))
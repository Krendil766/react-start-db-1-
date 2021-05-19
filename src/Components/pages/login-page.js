const LoginPage = ({ isLoggedIn, onLogin, history }) => {
    const newPath = '/';
    const addPath = (url) => {
        return history.push(url)
    }
    if (isLoggedIn) {
        addPath(newPath)
    }
    return (
        <div className='jumbotron'>
            <p>Login to see secret page</p>
            <button
                className='btn btn-primary'
                onClick={onLogin}>
                LogIn
            </button>
        </div>
    )
}

export default LoginPage;
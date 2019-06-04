import React, {useState, useEffect} from 'react'
import GithubCorner from 'react-github-corner';
import {Link} from 'react-router-dom'
import { Firebase, doSignOut } from '../firebase'

const Navbar = (props) => {

    const [data, setData] = useState('')

    useEffect(() => {
        content()
    },[])

    const content = () => {
        Firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setData(<li className="nav-item">
                <a className="nav-link" onClick={() => {
                    doSignOut()
                    .then((result) => props.history.push('/login'))
                    .catch((err) => console.log(err))
                    } }>Logout</a>
             </li>)
            } else {
                setData(
                <li className="nav-item active">
                    <Link className="nav-link" to="/login">LOGIN</Link>
                </li>
               )
            }
            })
            
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <div className="container">
         <GithubCorner href="https://github.com/aslamwebz?tab=repositories" direction="left" size="90"/>
          <a className="navbar-brand" href="/">React Login</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
               {data}
                {/* <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li> */}
                </ul>
            </div>
          </div>
        </nav>
    )
}


// const mapStateToProps = state => ({
//     open:state.items.open,
// })

// export default connect(mapStateToProps, {openCart})(Navbar)

export default Navbar
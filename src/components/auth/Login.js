import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {doSignInWithEmailAndPassword} from '../firebase'
import { connect  } from 'react-redux'
import {getFirebase, getUser, signIn,signInFacebook,signInTwitter, signInGithub, signInGoogle} from '../../actions/loginActions'

const Login = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({
    email:'',
    password:'',
    others:'',
    })

    useEffect(() => {
      props.getFirebase()
      props.getUser()
    },[])

    useEffect(() => {
      setErrors({
        ...errors,
        'others':props.err
        })
    },[props.err])

    const style = {
        'login':{
            height:'90vh',
        }, 
        'login-box':{
            width:'400px',
            background:'#fff',
            textAlign:'center',
            borderRadius:'10px',
            padding:'25px 35px 45px',
        }
    }

    const submitHandle = (e) => {
      e.preventDefault()
      props.signIn(email, password)
      
    }

  return (
    <div id="login">
      <div className="container d-flex align-items-center justify-content-center" style={style["login"]}>
        <div className="login-box" style={style["login-box"]}>
            <h2 className="p-4">LOGIN</h2>
            {errors.others && <h6 className="text-danger" >{errors.others}</h6>}
            <form onSubmit={submitHandle} className="pb-4">
                <div className="form-group">
                  {/* <label htmlFor="email">Email</label> */}
                  <input type="email" id="emailsad" className="form-control" autoComplete="asd" placeholder="Your Email" aria-describedby="helpId" required  
                  value={email} onChange={(e) => setEmail(e.target.value)} />
                  {/* <small id="helpId" className="text-muted">Help text</small> */}
                </div>
                <div className="form-group">
                  {/* <label htmlFor="password">Password</label> */}
                  <input type="password" name="password" id="password" className="form-control" autoComplete="asd"  placeholder="Your Password" aria-describedby="helpId" required
                  value={password} onChange={(e) => setPassword(e.target.value)} />
                  {/* <small id="helpId" className="text-muted">Help text</small> */}
                </div>
                <br/>
                <button className="btn btn-block btn-primary" id="btn-gradient" type="submit">LOGIN</button>
                <Link className="btn btn-block btn-success" to="/signup">
                    SIGN UP
                </Link>
            </form>
            <br/>
            <h6>Or sign in / sign up using</h6>
            <div className="social-login">
                <h6>OR Login/Sign up using</h6>
                <a className="btn btn-block btn-social btn-google" onClick={() => {
                   setErrors({
                    ...errors,
                    'others':''
                    })
                    props.signInGoogle(props.history)
                    }}>
                    <span className="fa fa-google"></span> Sign in with Google
                </a>
                <a className="btn btn-block btn-social btn-facebook"  onClick={() => {
                   setErrors({
                    ...errors,
                    'others':''
                    })
                    props.signInFacebook(props.history)
                    }}>
                    <span className="fa fa-facebook"></span> Sign in with Facebook
                 </a>
                 <a className="btn btn-block btn-social btn-github"  onClick={() => {
                    setErrors({
                      ...errors,
                      'others':''
                      })
                    props.signInGithub(props.history)
                     }}>
                 <span className="fa fa-github"></span> Sign in with GitHub
                </a>
                <a className="btn btn-block btn-social btn-twitter"  onClick={() => {
                   setErrors({
                    ...errors,
                    'others':''
                    })
                    props.signInTwitter(props.history)
                     }}>
                 <span className="fa fa-github"></span> Sign in with Twitter
                </a>
            </div>
        </div>
      </div>
    </div >
  )
}

const mapStateToProps = (state) => ({
  user:state.data.user,
  firebase:state.data.firebase,
  err:state.data.err
})

export default connect(mapStateToProps, {getFirebase, getUser, signIn,signInFacebook, signInTwitter, signInGithub, signInGoogle})(Login)

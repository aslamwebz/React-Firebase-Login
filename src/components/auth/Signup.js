import React, { useState, useEffect } from 'react'
import validate from './Validator'
import {connect} from 'react-redux'
import {signInFacebook, signInGithub, signInGoogle,signInTwitter, signUp} from '../../actions/loginActions'

const Signup = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [conPassword, setConPassword] = useState('')
    const [errors, setErrors] = useState({
        email:'',
        password:'',
        others:'',
    })

    useEffect(() => {
        // console.log(props.err)
        setErrors({
          ...errors,
          'others':props.err
          })
      },[props.err])

    const style = {
        'login':{
            height:'95vh',
        }, 
        'login-box':{
            width:'400px',
            background:'#fff',
            textAlign:'center',
            borderRadius:'10px',
            padding:'25px 35px',
        }
    }

    const submitHandle = (e) => {
        e.preventDefault()
        setErrors({email:'', password:'', others:''})
        if(email !== '' || password !== '' || conPassword !== ''){
            if(validate(email)){
                if(password === conPassword){
                    if(password.length >= 6){
                        props.signUp(email, password, props.history)
                    } else {
                        setErrors({...errors, ...errors.password='Password should be 6 or more in length'})
                    }
                } else {
                    setErrors({...errors, ...errors.password='Passwords do not match'})
                }
            } else {
                setErrors({...errors, ...errors.email='Please check your email'})
            }
        }
    }


  return (
    <div id="login">
      <div className="container d-flex align-items-center justify-content-center" style={style["login"]}>
        <div className="login-box" style={style["login-box"]}>
            <h2 className="p-4">SIGNUP</h2>
            <form onSubmit={submitHandle} className="pb-4">
            {errors.others && <h6 className="text-danger" >{errors.others}</h6>}
                <div className="form-group">
                  {/* <label htmlFor="email">Email</label> */}
                  <input type="email" name="email" id="email" className="form-control" placeholder="Your Email" aria-describedby="helpId" required
                  value={email} onChange={(e) => setEmail(e.target.value)} />
                  {errors.email && <h6 className="text-danger" >{errors.email}</h6>}

                </div>
                <div className="form-group">
                  {/* <label htmlFor="password">Password</label> */}
                  <input type="password" name="password" id="password" className="form-control" placeholder="Your Password" aria-describedby="helpId" required
                  value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                  {/* <label htmlFor="cpassword">Confirm Password</label> */}
                  <input type="password" name="cpassword" id="cpassword" className="form-control" placeholder="Confirm your Password" aria-describedby="helpId" required
                  value={conPassword} onChange={(e) => setConPassword(e.target.value)}/>
                  {errors.password && <h6 className="text-danger" >{errors.password}</h6>}
                </div>
                <br/>
                <button className="btn btn-block btn-primary" id="btn-gradient">SIGNUP</button>
            </form>
            <br/>
            <h6>Or sign in / sign up using</h6>
            <br/>
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
err:state.data.err
})

export default connect(mapStateToProps, {signUp, signInFacebook, signInGithub,signInTwitter, signInGoogle})(Signup)

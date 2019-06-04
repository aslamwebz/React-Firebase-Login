import React, {useEffect} from 'react'
import authControl from '../auth/authControl'
import { connect  } from 'react-redux'
import {getFirebase, getUser} from '../../actions/loginActions'

const Home = (props) => {

  useEffect(() => {
    props.getUser()
  },[])

  useEffect(() => {
    if(props.user === null){
      props.history.push('/login')
    } else {
      console.log(props.user)
    }
  })

  return (
    <div>
      <div className="container" >
          <div className="d-flex align-items-center justify-content-center" style={{height:'100vh'}}>
            <h1>You are logged in</h1>
          </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  user:state.data.user,
})

export default connect(mapStateToProps, {getFirebase, getUser})(Home)


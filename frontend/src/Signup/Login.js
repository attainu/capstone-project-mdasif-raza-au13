import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'



import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";



firebase.initializeApp({
    apiKey: "AIzaSyAT7t8MbKfZy4vjOH_9ommLxSSysNB267s",
    authDomain: "authlogin-2c3f9.firebaseapp.com"
})



class Login extends Component {
    state = { isSignedIn: false }

    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {


        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            console.log("user", user)
        })
    }
    render() {
        return (
            <div className="Login">
                {this.state.isSignedIn ? (
                    <span>
                        <p>Welcome </p><h3> {firebase.auth().currentUser.displayName}</h3>
                       <p>You Login through </p> <h3> {firebase.auth().currentUser.email}</h3>
                        <img src={firebase.auth().currentUser.photoURL} />
                        <div>
                        <button className="button" onClick={() => firebase.auth().signOut()}>Signed Out </button>
                        </div>
                        
                    </span>
                ) : (
                    <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                )
                }
                <div>
                    <li > <Link to={'/home'} className="nav_link" style={{ color: "black", fontSize: "large" }}> Back To Home   </Link></li>

                </div>

            </div>
        )
    }
}
export default Login
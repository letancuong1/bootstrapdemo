import React, { Component } from "react";
// import 'firebase/auth';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import {generateKeywords} from '../firebase';
// import fromtohome from "../firebase";
// import 'firebase/compat/analytics';
// import { doc, setDoc } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyCBeOtcjNMB1GhvSfXlUrjbh5mMfQ7zg2Y",
//   authDomain: "cuongle-996f9.firebaseapp.com",
//   projectId: "cuongle-996f9",
//   storageBucket: "cuongle-996f9.appspot.com",
//   messagingSenderId: "789801446533",
//   appId: "1:789801446533:web:38094843f263aebe034dec",
//   measurementId: "G-EKWM80Y6C9"
// };
// // Initialize Firebase

// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// const auth = firebase.auth();
// const db = firebase.firestore();
// // tao keywords cho displayName, su dung cho search
// const fbProvider = new firebase.auth.FacebookAuthProvider()
export default class Login extends Component {
    // constructor(props){
    //   super(props)
    //   this.state={
    //     fbProvider : new firebase.auth.FacebookAuthProvider(),
    //     googleProvider : new firebase.auth.GoogleAuthProvider(),
    //   }
    // }
    // componentDidMount(){
    //   fromtohome()
    // }
    // addDocument =async (collection, data) => {
    //   const query = db.collection(collection);
    
    //   query.add({
    //     data:data,
    //     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    //   });

    // };
    // handleLogin1=async(provider)=>{
    //   firebase.analytics();
    //   const { additionalUserInfo, user } =await auth.signInWithPopup(provider);
    //   await setDoc(doc(db, "cities", "LA"), {
    //     name: "Los Angeles",
    //     state: "CA",
    //     country: "USA"
    //   });
    //   if (additionalUserInfo?.isNewUser) {
    //     this.addDocument('/', {
    //       displayName: user.displayName,
    //       email: user.email,
    //       photoURL: user.photoURL,
    //       uid: user.uid,
    //       providerId: additionalUserInfo.providerId,
    //       keywords: generateKeywords(user.displayName?.toLowerCase()),
    //     });
    //   }
    // };
    render() {
        return (
            <div className="container">
            {/* Outer Row */}
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-12 col-md-9">
                <div className="card o-hidden border-0 shadow-lg my-5">
                  <div className="card-body p-0">
                    {/* Nested Row within Card Body */}
                    <div className="row">
                      <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                      <div className="col-lg-6">
                        <div className="p-5">
                          <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                          </div>
                          <form className="user">
                            <div className="form-group">
                              <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                            </div>
                            <div className="form-group">
                              <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
                            </div>
                            <div className="form-group">
                              <div className="custom-control custom-checkbox small">
                                <input type="checkbox" className="custom-control-input" id="customCheck" />
                                <label className="custom-control-label" htmlFor="customCheck">Remember
                                  Me</label>
                              </div>
                            </div>
                            <a href="index.html" className="btn btn-primary btn-user btn-block">
                              Login
                            </a>
                            <hr />
                            <a href="index.html" className="btn btn-google btn-user btn-block">
                              <i className="fab fa-google fa-fw" /> Login with Google
                            </a>
                            <a itemID="onClick={()=>this.handleLogin1(this.state.fbProvider)}" className="btn btn-facebook btn-user btn-block">
                              <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
                            </a>
                            
                          </form>
                          <hr />
                          <div className="text-center">
                            <a className="small" href="forgot-password.html">Forgot Password?</a>
                          </div>
                          <div className="text-center">
                            <a className="small" href="register.html">Create an Account!</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
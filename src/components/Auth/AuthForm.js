import { useState, useRef } from 'react';
import { toast } from 'react-toastify';


import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailRefData = useRef();
  const passwordRefDada = useRef();

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailRefData.current.value;
    const enteredPassword = passwordRefDada.current.value;
    if (isLogin) {
      fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyBHNv_CLiZQg56NWaxDXoG81wHuICy7sZc",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
          }

          ),

          "Content-Type": "application/json"
        },
      ).then(res => {
        toast.error('🦄 Wow so easy done!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
    } else {
      fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBHNv_CLiZQg56NWaxDXoG81wHuICy7sZc",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true
          }),
          "Content-Type": "application/json"

        }).then(res => {

          toast.error('🦄 Wow so easy done!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

        }).catch(err => {
          let errormessage = "Something went wrong";
          if (err && err.error) {
            errormessage = err.error.message;
          }
          toast.error(errormessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailRefData} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordRefDada} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;

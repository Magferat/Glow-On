import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { GoogleAuthProvider, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";
// import { isAdmin } from "@firebase/util";


initializeAuthentication()
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    const [admin, setAdmin] = useState(false);



    const auth = getAuth();


    const userName = e => {
        setName(e.target.value);

    }

    const userEmail = e => {
        setEmail(e.target.value);
    }

    const userPassword = e => {
        setPassword(e.target.value);

    }
    const registerUser = (location, history) => {

        setIsLoading(true);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    // Signed in 
                    const user = result.user;
                    // console.log(user);
                    setUser(user);
                    setUserName()
                    storeUserData(email, name, 'POST');
                    const destination = location?.state?.from || '/home';
                    history.replace(destination);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage);

                })
                .finally(() => setIsLoading(false));
            setError('');
            // console.log(email, password)
        }
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }




    const emailPassLogin = (email, password, location, history) => {

        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {



                const destination = location?.state?.from || '/dashboard';
                history.replace(destination);


                // if (isAdmin) {
                //     const destination = '/dashboard';
                //     history.replace(destination);
                // }


                setError('');
            })
            .catch((error) => {

                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }



    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;

                //Storeing user's data
                storeUserData(user.email, user.displayName, 'PUT');

                setError('');

                const destination = location?.state?.from || '/dashboard';
                history.replace(destination);

            }).catch((error) => {

                setError(error.message);

            }).finally(() => setIsLoading(false));
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])


    useEffect(() => {
        fetch(`https://thawing-ridge-68503.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // observe user 



    const logout = () => {

        setIsLoading(true);

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch(error => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));

    }



    const storeUserData = (email, displayName, method) => {
        const user = { email, displayName }

        fetch("https://thawing-ridge-68503.herokuapp.com/users", {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        // .then()
    }


    return {
        user, logout, registerUser, emailPassLogin, signInWithGoogle, error, isLoading, userEmail, userPassword, userName, admin,
    }

}
export default useFirebase;
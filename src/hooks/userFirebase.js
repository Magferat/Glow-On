import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { GoogleAuthProvider, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth";


initializeAuthentication()
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    // const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                const user = result.user;
                // setUser(user);
                // save user to the database
                // saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }
    const emailPassLogin = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const destination = location?.state?.from || '/home';
                history.replace(destination);
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
            .then(result => {
                const user = result.user;
                // setUser(user);

                // saveUser(user.email, user.displayName, 'PUT');
                setError('');
                const destination = location?.state?.from || '/home';
                history.replace(destination);
            }).catch((error) => {
                setError(error.message);
            }).finally(() => setIsLoading(false));
    }
    // observe user 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });
        return () => unSubscribe();

    }, [auth])
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch(error => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
    return {
        user, logout, registerUser, emailPassLogin, signInWithGoogle, error, isLoading,
    }

}
export default useFirebase;
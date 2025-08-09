import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [session, setSession] = useState(undefined);

    // sign up

    const signUpNewUser = async (email, password) => {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            console.error(' There was a problem signing up: ', error);
            return { success: false, error };
        }
        return { success: true, data };


    };


    // sing in

    const signInUser = async (email, password) => {
        try {

            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });
            if (error) {

                console.error(' Sign in error occured: ', error);
                return { success: false, error: error.message };
            }

            console.log(' Sign-In success: ', data);
            return { success: true, data };

        } catch (error) {
            console.error(' An error occured: ', error);
        }
    };


    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {

            setSession(session);

        });

        supabase.auth.onAuthStateChange((_event, session) => {

            setSession(session);
        });

    }, []);

    // useEffect(() => {
    //     supabase.auth.getSession().then(({ data: { session } }) => {
    //         setSession(session);
    //     });

    //     const {
    //         data: { subscription },
    //     } = supabase.auth.onAuthStateChange((_event, session) => {
    //         setSession(session);
    //         if (session) {
    //             navigate("/"); // redirect after login
    //         }
    //     });

    //     return () => subscription.unsubscribe();
    // }, []);


    // sign out

    const signOut = () => {
        const { error } = supabase.auth.signOut();
        if (error) {
            console.error(' There was an error: ', error);
        }

    };

    // ------------------------------------------------------------------------------
    return (
        <AuthContext.Provider value={{ session, signUpNewUser, signInUser, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};
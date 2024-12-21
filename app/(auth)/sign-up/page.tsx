import AuthForm from "@/components/AuthForm"
import { getLoggedInUser } from "@/lib/actions/user.actions"
import React from "react"

const SignUp = async() => {
    const loggedIn = await getLoggedInUser()
    
    return (
        <section className="flex-center size-full max-sm:px-6">
            <AuthForm loggedIn={loggedIn} type="sign-up"/>
        </section>
    )
}

export default SignUp
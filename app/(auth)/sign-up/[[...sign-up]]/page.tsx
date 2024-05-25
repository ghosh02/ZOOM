import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
   <main className='flex w-full h-screen items-center justify-center'>
    <SignUp/>
   </main>
  )
}

export default SignInPage
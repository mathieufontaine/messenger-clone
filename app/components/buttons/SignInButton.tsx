import Link from 'next/link'
import React from 'react'

function SignInButton() {
  return (
    <Link
    href="/auth/signin"
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    {" "}
    Sign In{" "}
  </Link>
  )
}

export default SignInButton
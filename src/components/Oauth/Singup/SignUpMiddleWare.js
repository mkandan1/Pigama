import React from 'react'
import Signup from './Signup'

function SignUpMiddleWare() {
    return (
        <div>{
            false ? <Signup /> : <div>
                <p className='text-center mt-5'>Currently we are in beta testing</p>
                <h4 className='text-center'>Account creation is disabled</h4>
            </div>
        }</div>
    )
}

export default SignUpMiddleWare
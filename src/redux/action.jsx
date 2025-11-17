export const LoginInfo  = "LoginInfo"
export const SignupInfo = "SignupInfo"

export const login =(id)=>({
    type:LoginInfo,
    payload:id
})
export const logout = () => {
   return {
     type:'Logout',
   }
}

export const login = (user) => {
  return {
      type:'Login',
      data:{
        name: user.firstName + ' ' + user.lastName,
        api_token: user.api_token,
        avatar: user.avatar,
        wallet: user.wallet,
        role: user.role,
        status: user.status,
        verify: user.verify,
      }
  }
}
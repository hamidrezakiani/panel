const initialState = {
  site :{
    sidebar: true,
    loginModal:false,
    userDropdown:false,
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LoginModalToggle':
      return {
        site: {...state.site,loginModal:!state.site.loginModal}
      }
    case 'UserDropdownToggle':
      return {
        site: {...state.site,userDropdown:!state.site.userDropdown}
      }
    default:
      return state
  }
}
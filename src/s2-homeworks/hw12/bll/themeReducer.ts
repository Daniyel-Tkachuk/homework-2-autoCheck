const initState = {
   themeId: 1,
}

type InitialState = typeof initState;

export const themeReducer = (state: InitialState = initState, action: Actions): InitialState => {
   switch (action.type) {
      case 'SET_THEME_ID': {
         return {
            ...state,
            themeId: action.id
         }
      }
      default:
         return state
   }
}


export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id} as const)

type Actions = ReturnType<typeof changeThemeId>;
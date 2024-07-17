import {UserType} from '../HW8'

type ActionType =
   | { type: 'sort'; payload: 'up' | 'down' }
   | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
   switch (action.type) {
      case 'sort': { // by name
         const copyState = [...state];
         return action.payload === "up"
            ? copyState.sort((a, b) => a.name > b.name ? 1 : -1)
            : copyState.sort((a, b) => a.name < b.name ? 1 : -1);
      }
      case 'check': {
         return state.filter(u => u.age >= action.payload);
      }
      default:
         return state
   }
}

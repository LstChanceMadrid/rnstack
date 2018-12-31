import * as actionType from '../../constants/actionTypes'
import initialState from '../initialState'

export default (state = initialState.projectData, action) => {
    switch (action.type) {
        case actionType.RETRIEVE_PROJECT_DATA : return {
            ...state
        }
        default : return state
    }
}
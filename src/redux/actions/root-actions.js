  
import * as types from './action-types';

export function updateLanguage(payload) {
	return {
		type: types.UPDATE_LANGUAGE,
		payload: payload	
	}
}
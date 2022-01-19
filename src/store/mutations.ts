import { MutationTree } from 'vuex'
import { State } from './state'
import { mutationTypes } from './mutationTypes'

export const mutations: MutationTree<State> = {
	// Fill string "query"
	[mutationTypes.SET_QUERY](state, post) {
		state.query = post
	},
	// Prepend query to searchHistory
	[mutationTypes.ADD_SEARCH_HISTORY](state, post) {
		state.searchHistory.unshift(post)
	},
	// Set searchHistory, (Data from localstorage to searchHistory)
	[mutationTypes.SET_SEARCH_HISTORY](state, post) {
		state.searchHistory = post
	},
	// Delete last query from searchHistory
	[mutationTypes.DELETE_LAST_SEARCHHISTORY](state) {
		state.searchHistory.pop()
	},
	// Fill array of objects "foundCharacters"
	[mutationTypes.SET_CHARACTERS](state, post) {
		state.foundCharacters.push(post)
	},
	// Fill object "details"
	[mutationTypes.SET_DETAILS](state, post) {
		state.details = post
	},
	// Fill array of objects "favourites"
	[mutationTypes.ADD_TO_FAVOURITES](state, post) {
		state.favourites.push(post)
	},
	[mutationTypes.SET_PAGE](state, post) {
		state.pagination.page = post
	},
	[mutationTypes.SET_ALLPOSTS](state, post) {
		state.pagination.allposts = post
	},
	[mutationTypes.SET_TOTAL](state, post) {
		state.pagination.total = post
	},
	// Set favourites, (Data from localstorage to favourites) + removefunction
	[mutationTypes.SET_FAVOURITES](state, post) {
		state.favourites = post
	},
	// Save to localstorage
	[mutationTypes.SAVE_TO_LOCALSTORAGE](state, post) {
		localStorage.setItem(post.where, JSON.stringify(post.what)) // save to local storage
	},
	[mutationTypes.CLEAR_CHARACTERS](state) {
		state.foundCharacters = []
	},
}

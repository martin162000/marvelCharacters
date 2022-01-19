import { ActionTree } from 'vuex'
import { State } from './state'
import { mutationTypes } from './mutationTypes'
import axios from 'axios'
import { getApiUrl } from '../apiKey'

export const actions: ActionTree<State, State> = {
	// Add search query to history + save to localstorage
	addToSearchHistory(context) {
		if (this.state.query.length > 0) {
			context.commit(mutationTypes.ADD_SEARCH_HISTORY, this.state.query) // Call mutation add query to search history
			if (this.state.searchHistory.length > 20) {
				context.commit(mutationTypes.DELETE_LAST_SEARCHHISTORY) // Delete last (if count > 20) from search history
			}

			context.commit(mutationTypes.SAVE_TO_LOCALSTORAGE, {
				where: 'SearchHistory',
				what: this.state.searchHistory,
			}) // save state.favourites to local storage
		}
	},

	// call api and call mutation SETCHARACTERS (fill array of objects)
	findCharacters(context) {
		context.commit(mutationTypes.SET_PAGE, 0) // RESET PAGINATION data
		context.commit(mutationTypes.SET_TOTAL, 0) // RESET PAGINATION data
		context.commit(mutationTypes.SET_ALLPOSTS, 0) // RESET PAGINATION data
		context.commit(mutationTypes.CLEAR_CHARACTERS) // RESET OBJECT OF ARRAY (clear state.foundCharacters )

		const url = `https://gateway.marvel.com/v1/public/characters?${getApiUrl()}&nameStartsWith=${encodeURI(
			this.state.query
		)}&orderBy=-modified&limit=${this.state.pagination.limit}`

		axios.get(url).then((response) => {
			const { total } = response.data.data
			context.commit(mutationTypes.SET_ALLPOSTS, total) // Call mutation total results
			response.data.data.results.forEach((character: any) => {
				const { id, name, thumbnail } = character // Destruct data
				context.commit(mutationTypes.SET_CHARACTERS, { id, name, thumbnail }) // Call mutation set array of objects CHARACTERS
			})
		})
	},
	// Change page
	changePage(context, numberPage) {
		context.commit(mutationTypes.SET_PAGE, numberPage) // SET NUMBER OF PAGE
		context.commit(mutationTypes.CLEAR_CHARACTERS) // RESET OBJECT OF ARRAY (clear state.foundCharacters )
		const offsetCalculated = (this.state.pagination.page - 1) * this.state.pagination.limit // where the offset begins

		const url = `https://gateway.marvel.com/v1/public/characters?${getApiUrl()}&nameStartsWith=${encodeURI(
			this.state.query
		)}&orderBy=-modified&limit=${this.state.pagination.limit}&offset=${offsetCalculated}`

		axios.get(url).then((response) => {
			const { total } = response.data.data
			context.commit(mutationTypes.SET_ALLPOSTS, total) // Call mutation total results
			response.data.data.results.forEach((character: any) => {
				const { id, name, thumbnail } = character // Destruct data
				context.commit(mutationTypes.SET_CHARACTERS, { id, name, thumbnail }) // Call mutation set array of objects CHARACTERS
			})
		})
	},
	// call api and call mutation SETDETAILS (fill object)
	findDetails(context, idCharacter) {
		context.commit(mutationTypes.SET_DETAILS, { loading: true })
		const url = `https://gateway.marvel.com/v1/public/characters/${idCharacter}?${getApiUrl()}`
		axios.get(url).then((response) => {
			const { id, name, description, thumbnail, urls } = response.data.data.results[0] // Destruct data
			context.commit(mutationTypes.SET_DETAILS, {
				id,
				name,
				description,
				thumbnail,
				urls,
			}) // Call mutation
		})
	},
	// Add character from details to favourites + save to localstorage
	addFavourites(context) {
		const { id, name, thumbnail } = this.state.details
		if (
			this.state.favourites &&
			this.state.favourites.some((item: any) => item.id === this.state.details.id)
		) {
			// If character exists in favourites
			return
		} else {
			// If character is not in favourites (you can add to favourites)
			context.commit(mutationTypes.ADD_TO_FAVOURITES, { id, name, thumbnail }) // Call mutation
			context.commit(mutationTypes.SAVE_TO_LOCALSTORAGE, {
				where: 'StorageFavourites',
				what: this.state.favourites,
			}) // save state.favourites to local storage
		}
	},
	// Remove character from favourites + save to localstorage
	removeFavourites(context, idCharacter) {
		const result = this.state.favourites.filter((movie: any) => movie.id !== idCharacter)
		context.commit(mutationTypes.SET_FAVOURITES, result)
		context.commit(mutationTypes.SAVE_TO_LOCALSTORAGE, {
			where: 'StorageFavourites',
			what: this.state.favourites,
		}) // save state.favourites to local storage
	},
}

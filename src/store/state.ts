export type State = {
	query: string
	searchHistory: string[]
	foundCharacters: unknown[]
	details: Record<string, unknown>
	favourites: unknown[]
	pagination: {
		page: number
		limit: number
		total: number
		allposts: number
	}
}

export const state: State = {
	query: '',
	searchHistory: [],
	foundCharacters: [],
	details: {},
	favourites: [],
	pagination: {
		page: 0,
		limit: 9,
		total: 0,
		allposts: 0,
	},
}

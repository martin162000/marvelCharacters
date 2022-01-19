<template>
	<form
		class="fadeIn"
		action=""
		@submit.prevent="$store.dispatch('findCharacters'), $store.dispatch('addToSearchHistory')"
	>
		<input
			class="inputSearch"
			type="text"
			placeholder="Start typing..."
			v-on:input="updateSearch"
			:value="storeQuery"
		/>
	</form>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mutationTypes } from '@/store/mutationTypes'

@Options({
	name: 'SearchForm',
	methods: {
		updateSearch(event: any) {
			this.$store.commit(mutationTypes.SET_QUERY, event.target.value)
		},
	},
	computed: {
		storeQuery() {
			return this.$store.state.query
		},
	},
})
export default class SearchForm extends Vue {}
</script>

<style scoped></style>

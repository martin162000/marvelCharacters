<template>
	<div class="homeWrap">
		<SearchForm />
		<SearchFormHistory />

		<div class="mainGrid">
			<ShowCharacters />
		</div>
		<ShowPagination />
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import SearchForm from '@/components/Home/SearchForm.vue'
import SearchFormHistory from '@/components/Home/SearchFormHistory.vue'
import ShowCharacters from '@/components/Home/ShowCharacters.vue'
import ShowPagination from '@/components/Home/ShowPagination.vue'

@Options({
	components: {
		SearchForm,
		SearchFormHistory,
		ShowCharacters,
		ShowPagination,
	},
})
export default class Home extends Vue {}
</script>

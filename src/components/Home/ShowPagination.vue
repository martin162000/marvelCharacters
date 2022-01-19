<template>
	<v-pagination
		v-if="storeAllPages > 1"
		:pages="storeAllPages"
		:range-size="1"
		:modelValue="storePage"
		@update:modelValue="$store.dispatch('changePage', $event)"
	/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import VPagination from '@hennge/vue3-pagination'
import '@hennge/vue3-pagination/dist/vue3-pagination.css'
import { mutationTypes } from '@/store/mutationTypes'

@Options({
	name: 'ShowPagination',
	components: {
		VPagination,
	},
	computed: {
		storePage() {
			return this.$store.state.pagination.page
		},
		storeAllPages() {
			const totalPages = Math.ceil(
				this.$store.state.pagination.allposts / this.$store.state.pagination.limit
			)
			this.$store.commit(mutationTypes.SET_TOTAL, totalPages)

			return this.$store.state.pagination.total
		},
	},
})
export default class ShowPagination extends Vue {}
</script>

<style scoped></style>

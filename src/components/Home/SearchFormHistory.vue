<template>
	<div class="searchHistory fadeIn">
		<span v-for="(item, index) in $store.state.searchHistory" :key="item.id">
			{{ index !== 0 ? ', ' : '' }}{{ item }}</span
		>
	</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
	name: 'SearchFormHistory',
})
export default class SearchFormHistory extends Vue {}
</script>

<style scoped></style>

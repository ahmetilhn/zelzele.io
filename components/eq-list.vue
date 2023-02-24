<template>
    <div class="eq-list" vertical-center>
        <EqListItem v-for="(item, key) in list" :key="key" :data="item"/>
    </div>
</template>
<script setup lang="ts">
import EqListItem from './eq-list-item.vue';
const {data: list} = await useAsyncData('list', () => $fetch( `https://api.berkealp.net/kandilli/index.php?page=1`, {
    method: 'GET',
} ))
</script>

<style lang="scss" scoped>
.eq-list {
    width: 100%;
}
</style>
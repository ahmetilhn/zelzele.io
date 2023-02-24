<template>
    <div class="eq-list" vertical-center>
        <EqListItem v-for="(item, key) in 10" :key="key"/>
    </div>
</template>
<script setup lang="ts">
import EqListItem from './eq-list-item.vue';
</script>

<style lang="scss" scoped>
.eq-list {
    width: 100%;
}
</style>
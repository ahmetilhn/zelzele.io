<template>
    <article class="eq-item" horizontal-center>
        <h3 class="eq-item__magnitude" vertical-center>1.2</h3>
        <div class="eq-item__content" vertical-center>
            <h3 class="city">İstanbul</h3>
            <h4 class="district">Çamlıca</h4>
            <h6 class="short-detail">7.04 km, 17.54, 17 Dakika önce</h6>
        </div>
    </article>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
.eq-item {
    width: 100%;
    height: 160px;
    background: linear-gradient(90deg, $white 0%, #eeeeee 100%);
    justify-content: flex-start;
    margin: 10px 0;
    border-radius: 10px;
    &__magnitude {
        width: 80px;
        height: 80px;
        background-color: $gray-one;
        color: $white;
        font-size: 20px;
        font-weight: bold;
        border-radius: 10px;
    }
    &__content {
        align-items: flex-start;
        height: 80px;
        justify-content: space-between;
        margin-left: 20px;
        padding: 5px 0;
    }
}
</style>
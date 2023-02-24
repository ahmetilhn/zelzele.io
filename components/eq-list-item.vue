<template>
    <article class="eq-item" horizontal-center>
        <div class="eq-item__left" horizontal-center>
            <h3 class="magnitude" vertical-center>{{ data.Magnitude }}</h3>
            <div class="content" vertical-center>
                <h3 class="city">{{ city }}</h3>
                <h4 class="district">{{ district }}</h4>
                <h6 class="short-detail">7.04 km, 17.54, 17 Dakika önce</h6>
            </div>
        </div>
        <div class="eq-item__right">
            <AllEqChart/>
        </div>
    </article>
</template>
<script setup lang="ts">
import AllEqChart from './all-eq-chart.vue';
import EQInterface from '~~/interfaces/eq.interface';
interface Props {
    data: EQInterface
}
const {data} =  defineProps<Props>()

const { city, district } = (() => {
    const city = data.Region.split("-")[1]
    const district = data.Region.split("-")[0]
    return {
        city,
        district
    }
})()

</script>
<style lang="scss" scoped>
.eq-item {
    width: 100%;
    height: 160px;
    background: linear-gradient(90deg, $white 0%, #eeeeee 100%);
    justify-content: space-between;
    margin: 10px 0;
    border-radius: 10px;
   &__left {
    .magnitude {
        width: 80px;
        height: 80px;
        background-color: $gray-one;
        color: $white;
        font-size: 20px;
        font-weight: bold;
        border-radius: 10px;
    }
    .content {
        align-items: flex-start;
        height: 80px;
        justify-content: space-between;
        margin-left: 20px;
        padding: 2px 0;
        .district {
            color: $gray-three;
            font-size: 16px;
        }
        .short-detail {
            color: $gray-two;
            font-size: 13px;
            font-weight: normal;
        }
    }
   }
   &__right {
    margin-right: 30px;
   }
}
</style>
<template>
    <div class="mainContainer">
        <TheSlider />
        <div class="centerArea">
            <CategoriesAcordionMenu class="acordionMenu"/>
            <div class="productsList">
                <div v-for="i in 12" :key="i" class="productArea">Product</div>
            </div>
        </div>

    </div>
</template>

<script>
import TheSlider from '../components/TheSlider.vue'
import CategoriesAcordionMenu from '../components/CategoriesAcordionMenu.vue'
export default {
    components: {
        TheSlider,
        CategoriesAcordionMenu
    }
}
</script>
<style scoped>
.mainContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}
.centerArea{
    display: flex;
    flex-direction: row;
    width: 80%;
}
.acordionMenu{
    width: 20%;
    margin-left: 20px;
    padding: 10px;
    background-color: #f5f5f5f5;
}
.productsList {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    background-color: turquoise;
    padding-right: 20px;
    padding-left: 20px;
}

.productArea {
    background-color: tomato;
    height: 300px;
    width: 300px;
    margin-bottom: 20px;
}
</style>
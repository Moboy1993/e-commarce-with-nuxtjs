<template>
    <div class="mainContainer">

        <div class="centerArea">
            <CategoriesAcordionMenu class="acordionMenu" />
            <div class="productContent">
                <div class="topArea">
                    <div class="imgArea">
                        <img :src="imgSrc[imgIndex]" class="fullSizeImage" />
                        <div class="smallSizeImagesArea">
                            <img v-for="(link, index) in imgSrc" :key="index" :src="link" class="smallSizeImages"
                                @click="changeFullImage(index)" />
                        </div>
                    </div>
                    <div class="infoArea">
                        <h4>PS5 games 5-Pieces</h4>
                        <span>ID: 123456789</span>
                        <h5>
                            {{ price }} ₺
                        </h5>
                        <b-form-spinbutton id="demo-sb" v-model="count" min="1" max="100"></b-form-spinbutton>
                        <span>Stock: 124</span>
                        <div>
                            <b-button variant="danger">Buy Now</b-button>
                            <b-button variant="warning">Add to cart</b-button>
                        </div>
                    </div>
                </div>
                <div class="productDescription">
                    <b-tabs content-class="mt-3">
                        <b-tab title="Description" active>
                            <p>Random 5 PS5 games</p>
                        </b-tab>
                        <b-tab title="Features">
                            <p>One of the above games is guaranteed</p>
                        </b-tab>
                    </b-tabs>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CategoriesAcordionMenu from '../../components/CategoriesAcordionMenu.vue'
export default {
    components: {
        CategoriesAcordionMenu
    },
    computed: {
        price() {
            return this.count * 199;

        }
    },
    data() {
        return {
            imgSrc: [
                "https://www.gamespot.com/a/uploads/square_medium/1595/15950357/3948441-horizonzerodawn.png",
                "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1668107516-demons-soul-ps5-game-1668107510.jpg?crop=1xw:1xh;center,top&resize=480:*",
                "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1622562512-ps5-games-gallery-7-1622562505.jpg?crop=1xw:1xh;center,top&resize=480:*",
                "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1622562592-ps5-games-gallery-6-1622562586.jpg?crop=1xw:1xh;center,top&resize=480:*",
                "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1622562705-ps5-games-gallery-11-1622562698.jpg?crop=1xw:1xh;center,top&resize=480:*",
            ],
            count: 1,
            imgIndex: 0,
            value: 7,
        }
    },
    methods: {
        changeFullImage(index) {
            this.imgIndex = index
        }
    },
}
</script>
<style scoped>
.mainContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
}

.centerArea {
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 100%;
}

.acordionMenu {
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

.productContent {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.topArea {
    display: flex;
    flex-direction: row;
}

.imgArea {
    display: flex;
    flex-direction: column;
    width: 60%;
}

.fullSizeImage {
    width: 500px;
    height: 500px;
    padding: 20px;
}

.smallSizeImagesArea {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
}

.smallSizeImages {
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
}

.infoArea {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 20px 0 0;
}
.productDescription{
    margin: 20px;

}
</style>
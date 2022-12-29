<template>
    <div>
        <div>
            <b-card bg-variant="light">
                <b-form-group label-cols-lg="3" label="Product Get" label-size="lg" label-class="font-weight-bold pt-0"
                    class="mb-0">

                    <b-form-group label="Product ID :" label-for="nested-street" label-cols-sm="3"
                        label-align-sm="right">

                        <b-form-input v-model="productID" id="nested-street"></b-form-input>
                    </b-form-group>

                    <b-button variant="dark" class="mt-5" block @click="getProduct">Get</b-button>

                </b-form-group>
            </b-card>
        </div>
        <div v-if="title" class="mt-3">
            <b-card bg-variant="light">
                <b-form-group label-cols-lg="3" label="Product Update" label-size="lg"
                    label-class="font-weight-bold pt-0" class="mb-0">
                    <b-form-group label="Title :" label-for="nested-street" label-cols-sm="3" label-align-sm="right">
                        <b-form-input v-model="title" id="nested-street"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Price :" label-for="nested-city" label-cols-sm="3" label-align-sm="right">
                        <b-form-input v-model="price" id="nested-city"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Stock Number :" label-for="nested-state" label-cols-sm="3"
                        label-align-sm="right">
                        <b-form-input v-model="stockNumber" id="nested-state"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Description :" label-for="nested-country" label-cols-sm="3"
                        label-align-sm="right">
                        <b-form-tags input-id="tags-basic" v-model="description"
                            placeholder="Add Description"></b-form-tags>
                    </b-form-group>

                    <b-form-group label="Photos :" label-cols-sm="3" label-align-sm="right" class="mb-0">
                        <b-form-tags input-id="tags-basic" v-model="photo" placeholder="Add Photo Link"
                            class="mb-2"></b-form-tags>
                    </b-form-group>

                    <b-form-group label="Main Category :" label-for="main-state" label-cols-sm="3"
                        label-align-sm="right">
                        <b-form-select v-model="mainCategory" :options="options" class="mt-2"></b-form-select>
                    </b-form-group>

                    <b-form-group label="Sub Category :" label-for="sub-state" label-cols-sm="3" label-align-sm="right">
                        <b-form-select v-model="subCategory" :options="subCategoryOptions" class="mt-2"></b-form-select>
                        <b-button variant="dark" class="mt-5" block :disabled="!allValueValid"
                            @click="updateProduct">Update</b-button>

                    </b-form-group>
                </b-form-group>
            </b-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            productID: null,
            title: null,
            price: null,
            stockNumber: null,
            description: null,
            photo: null,
            mainCategory: null,
            subCategory: null,
            options: [
                { value: null, text: 'Please select main category', disabled: true },
                { value: 'a', text: 'PS5' },
                { value: 'b', text: 'XBOX' },
                { value: 'c', text: 'Nintendo' },
                { value: 'd', text: 'PC' },
            ],
        }
    },
    computed: {
        subCategoryOptions: function () {
            if (this.mainCategory === 'a') {
                let sub = [
                    { value: null, text: 'Please select sub category', disabled: true },
                    { value: '1', text: 'PS5' },
                    { value: '2', text: 'PS5  Controller' },
                    { value: '3', text: 'PS5 Games' },
                ];
                return sub
            } else if (this.mainCategory === 'b') {
                let sub = [
                    { value: null, text: 'Please select sub category', disabled: true },
                    { value: '4', text: 'XBOX' },
                    { value: '5', text: 'XBOX  Controller' },
                    { value: '6', text: 'XBOX Games' },
                ];
                return sub
            } else if (this.mainCategory === 'c') {
                let sub = [
                    { value: null, text: 'Please select sub category', disabled: true },
                    { value: '7', text: 'Nintendo' },
                    { value: '8', text: 'Nintendo  Controller' },
                    { value: '9', text: 'Nintendo Games' },
                ];
                return sub
            } else if (this.mainCategory === 'd') {
                let sub = [
                    { value: null, text: 'Please select sub category', disabled: true },
                    { value: '10', text: 'PC Gaming Components' },
                    { value: '11', text: 'PC  Gaming Peripherals' },
                    { value: '12', text: 'PC Gaming' },
                    { value: '13', text: 'PC Software' },
                    { value: '14', text: 'PC Games' },
                ];
                return sub
            }
        },
        allValueValid: function () {
            if (this.title && this.price && this.stockNumber && this.description && this.photo && this.mainCategory && this.subCategory) {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        async getProduct() {
            let result = await this.$axios.$get(`http://localhost:8080/api/product/${this.productID}`);
            this.title = result.product.title;
            this.price = result.product.price;
            this.stockNumber = result.product.stockNumber;
            this.description = result.product.description;
            this.photo = result.product.photo;
            this.mainCategory = result.product.mainCategory;
            this.subCategory = result.product.subCategory;
            console.log(result);
        },
        async updateProduct() {
            let updatedProduct = {
                title: this.title,
                price: this.price,
                stockNumber: this.stockNumber,
                description: this.description,
                photo: this.photo,
                mainCategory: this.mainCategory,
                subCategory: this.subCategory,
            };
            let result = await this.$axios.$put(`http://localhost:8080/api/product/${this.productID}`, updatedProduct);
            console.log(result);
        }
    },
}
</script>

<style>

</style>
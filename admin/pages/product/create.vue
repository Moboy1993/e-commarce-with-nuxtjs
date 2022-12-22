<template>
    <div>
        <b-card bg-variant="light">
            <b-form-group label-cols-lg="3" label="Product Create" label-size="lg" label-class="font-weight-bold pt-0"
                class="mb-0">
                <b-form-group label="Title :" label-for="nested-street" label-cols-sm="3" label-align-sm="right">
                    <b-form-input id="nested-street"></b-form-input>
                </b-form-group>

                <b-form-group label="Price :" label-for="nested-city" label-cols-sm="3" label-align-sm="right">
                    <b-form-input id="nested-city"></b-form-input>
                </b-form-group>

                <b-form-group label="Stock Number :" label-for="nested-state" label-cols-sm="3" label-align-sm="right">
                    <b-form-input id="nested-state"></b-form-input>
                </b-form-group>

                <b-form-group label="Description :" label-for="nested-country" label-cols-sm="3" label-align-sm="right">
                    <b-form-tags input-id="tags-basic" v-model="value" placeholder="Add Description"></b-form-tags>
                </b-form-group>

                <b-form-group label="Photos :" label-cols-sm="3" label-align-sm="right" class="mb-0">
                    <b-form-tags input-id="tags-basic" v-model="value" placeholder="Add Photo Link" class="mb-2"></b-form-tags>
                </b-form-group>

                <b-form-group label="Main Category :" label-for="main-state" label-cols-sm="3" label-align-sm="right">
                    <b-form-select v-model="selected" :options="options" class="mt-2"></b-form-select>
                </b-form-group>

                <b-form-group label="Sub Category :" label-for="sub-state" label-cols-sm="3" label-align-sm="right">
                    <b-form-select v-model="selected" :options="options" class="mt-2"></b-form-select>
                </b-form-group>

            </b-form-group>
        </b-card>
    </div>
</template>

<script>
export default {
data(){
    return{
        options: [
          { value: null, text: 'Please select main category', disabled: true },
          { value: 'a', text: 'PS5' },
          { value: 'b', text: 'XBOX' },
          { value: 'c', text: 'Nintendo' },
          { value: 'd', text: 'PC' },
        ]
    }
}
}
</script>

<style>

</style>
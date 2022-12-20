<template>
    <div class="accordion" role="tablist">
        <span class="menuHeader">
            All Categories
        </span>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <button block v-b-toggle.accordion-1 class="categoriesButton">Accordion 1</button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <button class="categoriesButton">A sub 1</button><br>
          <button class="categoriesButton">A sub 2</button><br>
          <button class="categoriesButton">A sub 3</button><br>
          <button class="categoriesButton">A sub 4</button><br>
          <button class="categoriesButton">A sub 5</button><br>
          <button class="categoriesButton">A sub 6</button><br>
        </b-collapse>
      </b-card>
  
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <button block v-b-toggle.accordion-2 class="categoriesButton">Accordion 2</button>
        </b-card-header>
        <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
          <button class="categoriesButton">B sub 1</button><br>
          <button class="categoriesButton">B sub 2</button><br>
          <button class="categoriesButton">B sub 3</button><br>
          <button class="categoriesButton">B sub 4</button><br>
          <button class="categoriesButton">B sub 5</button><br>
          <button class="categoriesButton">B sub 6</button><br>
        </b-collapse>
      </b-card>
  
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <button block v-b-toggle.accordion-3 class="categoriesButton">Accordion 3</button>
        </b-card-header>
        <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
          <button class="categoriesButton">C sub 1</button><br>
          <button class="categoriesButton">C sub 2</button><br>
          <button class="categoriesButton">C sub 3</button><br>
          <button class="categoriesButton">C sub 4</button><br>
          <button class="categoriesButton">C sub 5</button><br>
          <button class="categoriesButton">C sub 6</button><br>
        </b-collapse>
      </b-card>
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
        
        }
      }
    }
  </script>
  <style>
  .menuHeader{
    font-size: 16px;
    font-weight: 600;
    font-family: sans-serif;
  }
.categoriesButton{
    border-width: 0;
    background-color: transparent;
}
</style>
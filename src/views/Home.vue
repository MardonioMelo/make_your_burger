<template>
  <BannerItem />
  <div class="main-container">
    <h1>Monte seu burger:</h1>
    <BurgerForm />
  </div>
</template>

<script>
import BannerItem from "../components/BannerItem.vue";
import BurgerForm from "../components/BurgerForm.vue";

export default {
  name: "Home",
  components: {
    BannerItem,
    BurgerForm,
  },
};
</script>


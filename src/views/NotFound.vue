<template>
  <div class="notfound">
    <div class="error">
      <Center>
        <h1>The page you're looking for does not exist.</h1>
      </Center>
    </div>
    <ExFooter />
  </div>
</template>

<script>
import Center from "@/components/Center.vue";
import ExFooter from "@/components/ExFooter.vue";

export default {
  name: "NotFound",
  components: {
    Center,
    ExFooter
  }
};
</script>

<style scoped>
h1 {
  font-weight: 200;
}

.error {
  height: 100vh;
}
</style>

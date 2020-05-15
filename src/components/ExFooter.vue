<template>
  <div>
    <footer>
      <Center>
        <slot></slot>
      </Center>
    </footer>
  </div>
</template>

<script>
import Center from "@/components/Center.vue";

export default {
  components: {
    Center
  }
};
</script>

<style scoped>
footer {
  position: relative;
  text-align: center;
  height: 100px;
  margin-top: -100px;
}
</style>

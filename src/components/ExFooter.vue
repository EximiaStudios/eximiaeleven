<template>
  <div>
    <footer>
      <Center> © {{ new Date().getFullYear() }} {{ company }}. </Center>
    </footer>
  </div>
</template>

<script>
import Center from "@/components/Center.vue";

export default {
  name: "ExFooter",
  props: {
    company: {
      default: "Eximia Eleven",
      type: String
    }
  },
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

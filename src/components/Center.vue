<template>
  <div class="center">
    <div class="outer">
      <div class="middle">
        <div class="inner">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Center"
};
</script>

<style scoped>
/*
  Triple div method of centering
  obtain at https://stackoverflow.com/a/6182661/5635689
*/
.outer {
  display: table;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.middle {
  display: table-cell;
  vertical-align: middle;
}

.inner {
  margin-left: auto;
  margin-right: auto;
}

@media only screen and (max-width: 600px) {
  .inner {
    max-width: 300px;
  }
}
</style>

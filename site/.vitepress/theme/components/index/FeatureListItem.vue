<template>
  <li>
    <h3>
      <slot name="name" />
    </h3>
    <p>
      <slot name="description" />
    </p>
  </li>
</template>

<style scoped>
h3 {
  font-weight: 600;
  line-height: 28px;
  font-size: 20px;
  margin-bottom: 0.5em;
}

p {
  font-size: 15px;
  width: 90%;
}
</style>

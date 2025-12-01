<script setup lang="ts">

defineProps({
  teste: String
})

</script>

<template>
  <button :aria-label="teste">
    <slot />
  </button>
</template>

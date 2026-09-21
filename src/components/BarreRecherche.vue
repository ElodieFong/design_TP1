<script setup>
defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="search-bar">
    <input placeholder="Search"
      :value="modelValue"
      aria-label="Search"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <span class="search-icon">🔍︎</span>
  </div>
</template>
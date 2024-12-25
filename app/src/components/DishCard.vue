<script lang="ts" setup>
import type { Dish } from '@/types'
import { computed } from 'vue'

type Props = {
  dish: Dish
}

type Emits = {
  'edit-dish': [dish: Dish]
  'delete-dish': [dish: Dish]
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const statusColor = computed(() => {
  switch (props.dish.status) {
    case 'Want to Try':
      return 'is-warning'
    case 'Recommended':
      return 'is-success'
    case 'Do Not Recommend':
      return 'is-danger'
    default:
      return ''
  }
})

const editDish = () => {
  emit('edit-dish', props.dish)
}

const deleteDish = () => {
  emit('delete-dish', props.dish)
}
</script>

<template>
  <article class="box">
    <div class="media">
      <aside class="media-left">
        <img src="https://placehold.jp/150x150.png" alt="" />
      </aside>
      <div class="media-content">
        <p class="title is-4 is-spaced mb-1">
          {{ dish.name }}
        </p>
        <p class="subtitle mb-2">
          <span class="tag" :class="statusColor">{{ dish.status }}</span>
        </p>
        <div>
          <button @click="editDish" class="button is-small is-warning is-light mr-2">Edit</button>
          <button @click="deleteDish" class="button is-small is-danger is-light">Delete</button>
        </div>
      </div>
    </div>
  </article>
</template>

<style></style>

<script lang="ts" setup>
import type { Dish } from '@/types'
import { v4 as uuidv4 } from 'uuid'
import { onMounted, reactive, ref } from 'vue'

type Emits = {
  'add-new-dish': [dish: Dish]
  'cancel-new-dish': []
}

const emit = defineEmits<Emits>()
const addNewDish = () => emit('add-new-dish', newDish)
const cancelNewDish = () => emit('cancel-new-dish')

const newDish = reactive<Dish>({
  id: uuidv4(),
  name: '',
  status: 'Want to Try',
  diet: '',
})

const elNameInput = ref<HTMLInputElement | null>(null);
onMounted(() => {
  elNameInput.value?.focus();
})
</script>

<template>
  <form @submit.prevent>
    <div class="field">
      <div class="field">
        <label for="name" class="label">Name</label>
        <div class="control">
          <input
            v-model="newDish.name"
            type="text"
            class="input is-large"
            placeholder="Mystery Flavored Shrimp"
            required
            ref="elNameInput"
          />
        </div>
      </div>
      <div class="field">
        <div class="buttons">
          <button @click="addNewDish" class="button is-success">Create</button>
          <button @click="cancelNewDish" class="button is-light">Cancel</button>
        </div>
      </div>
    </div>
  </form>
</template>

<style></style>

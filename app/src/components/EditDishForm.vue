<script lang="ts" setup>
import { dietList, statusList } from '@/constants'
import type { Dish } from '@/types'
import { onMounted, reactive, ref } from 'vue'

type Props = {
  dish: Dish
}

const props = defineProps<Props>()

type Emits = {
  'update-dish': [dish: Dish]
  'cancel-edit-dish': []
}

const emit = defineEmits<Emits>()
const updateDish = () => emit('update-dish', newDish)
const cancelEditDish = () => emit('cancel-edit-dish')

// Clone dish from props to a new reactive instead of mutating directly
const newDish = reactive<Dish>({
  ...props.dish,
})

const elNameInput = ref<HTMLInputElement | null>(null)
onMounted(() => {
  elNameInput.value?.focus()
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
            :placeholder="props.dish.name"
            required
            ref="elNameInput"
          />
        </div>
      </div>

      <div class="field mb-5">
        <label for="status" class="label">Status</label>
        <div class="select">
          <select v-model="newDish.status" id="status">
            <option v-for="status in statusList" :value="status" :key="`option-${status}`">
              {{ status }}
            </option>
          </select>
        </div>
      </div>

      <div class="field mb-5">
        <label for="status" class="label">Diet</label>
        <div class="select">
          <select v-model="newDish.diet" id="diet">
            <option v-for="diet in dietList" :value="diet" :key="`option-${diet}`">
              {{ diet }}
            </option>
          </select>
        </div>
      </div>

      <div class="field">
        <div class="buttons">
          <button @click="updateDish" class="button is-success">Save</button>
          <button @click="cancelEditDish" class="button is-light">Cancel</button>
        </div>
      </div>
    </div>
  </form>
</template>

<style></style>

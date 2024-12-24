<script lang="ts" setup>
import { statusList } from '@/constants'
import { type Restaurant } from '@/types'
import { v4 as uuidv4 } from 'uuid'
import { onMounted, reactive, ref } from 'vue'

type Emits = {
  'add-new-restaurant': [restaurant: Restaurant]
  'cancel-new-restaurant': []
}

const emit = defineEmits<Emits>()
const addNewRestaurant = () => emit('add-new-restaurant', newRestaurant)
const cancelNewRestaurant = () => emit('cancel-new-restaurant')

const newRestaurant = reactive<Restaurant>({
  id: uuidv4(),
  name: '',
  address: '',
  website: '',
  status: 'Want to Try',
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
            v-model="newRestaurant.name"
            type="text"
            class="input is-large"
            placeholder="Beignet and the Jets"
            required
            ref="elNameInput"
          />
        </div>
      </div>
      <div class="field">
        <label for="website" class="label">Website</label>
        <div class="control">
          <input v-model="newRestaurant.website" type="text" class="input" placeholder="www.beignetandthejets.com" />
        </div>
      </div>
      <div class="field mb-5">
        <label for="status" class="label">Status</label>
        <div class="select">
          <select v-model="newRestaurant.status" id="status">
            <option v-for="status in statusList" :value="status" :key="`option-${status}`">
              {{ status }}
            </option>
          </select>
        </div>
      </div>
      <div class="field">
        <div class="buttons">
          <button @click="addNewRestaurant" class="button is-success">Create</button>
          <button @click="cancelNewRestaurant" class="button is-light">Cancel</button>
        </div>
      </div>
    </div>
  </form>
</template>

<style></style>

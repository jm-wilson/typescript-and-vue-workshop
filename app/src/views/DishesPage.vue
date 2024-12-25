<script lang="ts" setup>
import { useDishStore } from '@/stores/DishStore'
import type { Dish } from '@/types'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import DishCard from '../components/DishCard.vue'
import NewDishForm from '../components/NewDishForm.vue'
import SideMenu from '../components/SideMenu.vue'
import EditDishForm from '@/components/EditDishForm.vue'

const dishStore = useDishStore()

const filterText = ref('')
const updateFilterText = (event: KeyboardEvent) => {
  if (event.target instanceof HTMLInputElement) {
    filterText.value = event.target.value
  }
}

const filteredDishList = computed((): Dish[] => {
  return dishStore.list.filter((dish) => {
    if (dish.name) {
      return dish.name.toLowerCase().includes(filterText.value.toLowerCase())
    } else {
      return dishStore.list
    }
  })
})

const numberOfDishes = computed(() => filteredDishList.value.length)

type ShowFormState = 'none' | 'new' | 'edit'
const showForm = ref<ShowFormState>('none')
const noFormShown = computed(() => showForm.value === 'none')
const showNewForm = computed(() => showForm.value === 'new')
const showEditForm = computed(() => showForm.value === 'edit')
const editingDish = ref<Dish | null>(null)

/** Launches form to edit a dish */
const editDish = (dish: Dish) => {
  editingDish.value = dish
  showForm.value = 'edit'
}

/** Saves the dish being edited */
const updateDish = (payload: Dish) => {
  dishStore.updateDish(payload)
  editingDish.value = null
  showForm.value = 'none'
}

/** Launches form to create a dish */
const createDish = () => {
  showForm.value = 'new'
}

/** Saves the dish being added */
const addDish = (payload: Dish) => {
  dishStore.addDish(payload)
  showForm.value = 'none'
}

const hideForm = () => {
  showForm.value = 'none'
}

onMounted(() => {
  const route = useRoute()
  if (route.query.new) {
    showForm.value = 'new'
  }
})
</script>

<template>
  <main class="section">
    <div class="columns">
      <!-- Side Menu -->
      <SideMenu />

      <!-- Main Content -->
      <div class="column">
        <h1 class="title">Dishes</h1>

        <!-- CTA Bar -->
        <nav v-if="noFormShown" class="level">
          <div class="level-left">
            <div class="level-item">
              <p class="subtitle is-5">
                <strong>{{ numberOfDishes }}</strong> dishes
              </p>
            </div>

            <p class="level-item">
              <button @click="createDish" class="button is-success">New</button>
            </p>

            <div class="level-item is-hidden-tablet-only">
              <div class="field has-addons">
                <p class="control">
                  <input class="input" type="text" placeholder="Dish name" @keyup.enter="updateFilterText" />
                </p>
                <p class="control">
                  <button class="button">Search</button>
                </p>
              </div>
            </div>
          </div>
        </nav>

        <!-- New Dish Form -->
        <NewDishForm v-if="showNewForm" @add-new-dish="addDish" @cancel-new-dish="hideForm" />

        <EditDishForm
          v-if="showEditForm && editingDish"
          :dish="editingDish"
          @update-dish="updateDish"
          @cancel-edit-dish="hideForm"
        />

        <!-- Display Results -->
        <div v-else class="columns is-multiline">
          <div v-for="item in filteredDishList" class="column is-full" :key="`item-${item}`">
            <DishCard :dish="item" @edit-dish="editDish" @delete-dish="dishStore.deleteDish" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>

> [!IMPORTANT]
> Hi! This repo contains all of my code as I worked through the [TypeScript and Vue 3
](https://frontendmasters.com/courses/vue-typescript/) course on Frontend Masters.  Each batch of changes is loosely aligned with one of the course's exercises, but these changes are not identical to the course's content.
> 
> My approach to learning often involves following various rabbit holes when I want to understand something better, and cutting other corners when I think I understand them well enough.  While my code in this repo is public for all to see, I would recommend taking the course on Frontend Masters and finding your own rabbit holes to follow (and corners to cut!) to suit your own learning journey.
>
> *- Joe*

*Content below this line was preserved from the original README.*
<hr>

# TypeScript and Vue with Frontend Masters

Watch the full course on the [Frontend Masters website](https://frontendmasters.com/courses/vue-typescript).

## Prerequisites

- [Git](https://git-scm.com/)
- [Node LTS](https://nodejs.org/en/)
- [Volar VS Code Extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

## Installation Instructions

> Note: Make sure to change directories into the `app` directory before running `npm install`.

```bash
git clone https://github.com/bencodezen/typescript-and-vue-workshop.git
cd typescript-and-vue-workshop/app
npm install
```

To run the application, use:
```bash
npm run dev
```

## Course Errata

### Global State Management with Pinia
During the Global State Management with Pinia lesson, the user interface is not reactive. If you delete a restaurant or dish, you need to change views in order to see the updated UI. Follow the steps below to create a reactive interface:

In `RestaurantPage.vue`, import `storeToRefs` from Pinia:

```javscript
import { storeToRefs } from 'pinia'
```

Update the `restaurantList` array:

```javascript
const restaurantList = storeToRefs(restaurantStore).list
```

In the `filteredRestaurantList` computed property, update the `filter` method:
```javascript
return restaurantList.value.filter((restaurant) => { ... })
```


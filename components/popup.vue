<template>
  <UModal v-model="this.isOpen" prevent-close>
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            {{ this.dataToUp.label }}
          </h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="closePopup" />
        </div>
      </template>
      <div class="relative mb-4" v-for="field in dataToUp.fields">
        <label for="{{ field.label }}" class="text-sm leading-7 text-gray-400">{{ field.label[0].toUpperCase() + field.label.slice(1) }}</label>
        <div class="relative">
          <input
            v-if="field.tag == 'input'"
            :type="field.type"
            :id="field.label"
            :name="field.label"
            :placeholder="field.placeholder ? field.placeholder:'Please in input '+field.label"
            :value="field.value"
            :readonly="field.readonly"
            v-model="field.value"
            class="bg-opacity-20 w-full rounded border border-gray-600 bg-transparent py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out placeholder:text-gray-500 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-transparent"
          />
        </div>
      </div>
      <UButtonGroup class="flex justify-end">
        <UButton v-for="button in dataToUp.buttons" :icon="button.icon" :label="button.label" @click="$emit('actionFromButton', button.identify)" />
      </UButtonGroup>
    </UCard>
  </UModal>
</template>

<script>

export default {
    props: ['isOpen', 'closePopupCallback', 'dataToUp', 'actionFromButton'],
    methods: {
      closePopup() {
          this.$emit('closePopupCallback');
      },
    },
}
</script>
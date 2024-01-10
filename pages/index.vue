<script setup>
import dataTable from '../components/datatable.vue';
import popUp from '../components/popup.vue'

</script>

<template>
  <UContainer class="pt-6">
    <UButtonGroup class="flex justify-end" >
      <UButton
        icon="i-heroicons-plus-circle-16-solid"
        size="sm"
        color="blue"
        variant="solid"
        label="Add"
        :trailing="false"
        @click="startPopup('add')"
      />
    </UButtonGroup>
  </UContainer>
  <UContainer>
    <dataTable></dataTable>
  </UContainer>
  <popUp :isOpen="isOpen" @closePopupCallback="closePopUp" :dataToUp="popUpObject" @actionFromButton="actionFromButton"></popUp>
</template>
<script>
export default {
  data(){
    return {
      isOpen : ref(false),
      popUpObject:ref({}),
      createItem:{
        label:'Add Item',
        buttons:[
          {
            'label':'Save',
            'identify':'save-item',
            'icon':'i-heroicons-arrow-up-on-square-stack'
          }
        ],
        fields:[
          {
            'tag':'input',
            'type':'text',
            'label':'name',
            'value':''
          },
          {
            'tag':'input',
            'type':'text',
            'label':'title',
            'value':''
          }
        ]
      }
    }
  },
  methods: {
    closePopUp(){
      this.isOpen = false
    },
    startPopup(param){
      switch(param){
        case 'add':
          this.popUpObject = this.createItem;
          break;
      }
      this.isOpen = true
    },
    actionFromButton(btnIdentify){
      console.log(btnIdentify);
      console.log(this.createItem.fields);
      this.isOpen = false
    }
  }
}
</script>
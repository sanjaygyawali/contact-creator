<template>
  <q-page>
    <!-- <span>contacts</span> -->
    <!-- <span>{{ contacts }}</span> -->
    <button @click="convert">Convert</button>
    <pre> {{ contactObject }} </pre>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import parser from "vcard-parser";
import vCard from "vcf";
// import contacts from "assets/john-doe.vcf";
import contacts from "assets/sanjmobile_sep9.vcf";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      contacts: contacts,
      contactObject: [],
    };
  },
  methods: {
    convert() {
      let results = vCard.parse(this.contacts);
      // debugger;
      // results.forEach(item => {
        // let parsedItem = item;
        // debugger;
        // this.contactObject.push(item.parse());
      // })
      // this.contactObject = results;

      // let result = parser.parse(this.contacts);
      this.contactObject = results;
    },
  },
});
</script>

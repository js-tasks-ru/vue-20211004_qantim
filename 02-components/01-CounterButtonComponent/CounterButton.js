import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  props: ['count'],

  template: `<button type="button" @click="$emit('update:count', this.count + 1)">{{ count }}</button>`,
});

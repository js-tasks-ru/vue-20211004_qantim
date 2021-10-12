import { createApp } from './vendor/vue.esm-browser.js';

const app = createApp({
  data() {
    return {
      first: 0,
      second: 0,
      operator: 'sum',
      result: 0,
    };
  },
  computed: {
    calc() {
      switch (this.operator) {
        case 'sum':
          return this.first + this.second;
        case 'subtract':
          return this.first - this.second;
        case 'multiply':
          return this.first * this.second;
        case 'divide':
          return this.first / this.second;
        default:
          return null;
      }
    },
  },
}).mount('#app');

<script>
import { defineComponent } from 'vue';
 export default defineComponent({
  name: 'AppProvider',
  setup(props, { slots }) {
    return () => slots.default?.();
  },
  mounted() {
    console.log('mounted');
  }
 })
</script>
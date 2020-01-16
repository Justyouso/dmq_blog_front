<template>
  <section>
    <yqHeader/>
    <main>
      <router-view class="module-container" />
    </main>
  </section>
</template>

<script>
import yqHeader from './modules/header_ele'

export default {
    name: 'Layout',
    components: {
        yqHeader
    }
}
</script>

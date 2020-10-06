<template>
<div id="app">
    <navigation />

    <router-view class="main-wrapper"/>

    <footerMain />

</div>
</template>

<script>

import navigation from './components/navigation'
import footerMain from './components/footer'

export default {
    name: 'App',
    components: {
        navigation,
        footerMain
    }
}
</script>

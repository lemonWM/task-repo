<template>
    <div>
        <homeHeader />
        <homeChart />
        <homeContentDetails />
        <homeContentUsers />
        <homeContentWork />
    </div>
</template>

<script>

import homeHeader from './home/homeHeader'
import homeChart from './homeChart'
import homeContentDetails from './home/homeContentDetails'
import homeContentUsers from './home/homeContentUsers'
import homeContentWork from './home/homeContentWork'

export default {
    name: 'home',
    components: {
        homeHeader,
        homeChart,
        homeContentDetails,
        homeContentUsers,
        homeContentWork
    }
}
</script>
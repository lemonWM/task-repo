<template>
    <section>
        <div class="dashboard d-flex justify-content-center ">
            <div class="main-wrapper d-flex flex-column">        
                <div class="d-flex flex-row align-items-center justify-content-between top-side-menu">
                    <div>
                        <img src="/static/img/logoApp.png" alt="">
                    </div>
                    <nav>
                        <router-link :to="{name: 'login'}">Login</router-link>
                        <img src="/static/img/separator.png" alt="">
                        <router-link :to="{name: 'info'}">Info</router-link>
                        <img src="/static/img/separator.png" alt="">
                        <router-link :to="{name: 'stats'}">Stats</router-link>
                        <img src="/static/img/separator.png" alt="">
                        <router-link :to="{name: 'contacts'}">Users</router-link>
                    </nav>
                </div>
                <div class="d-flex flex-row">
                    <div class="nav-dashboard-vertical">
                        <nav class="d-flex flex-column align-items-center left-side-nav">
                            <router-link :to="{name: 'dashboard'}"><i class="far fa-compass"></i></router-link>
                            <router-link :to="{name: 'user'}"><i class="far fa-user"></i></router-link>
                            <router-link :to="{name: 'info'}"><i class="far fa-calendar-alt"></i></router-link>
                            <router-link :to="{name: 'stats'}"><i class="far fa-file"></i></router-link>
                            <router-link :to="{name: 'contacts'}"><i class="far fa-comments"></i></router-link>
                            <router-link :to="{name: 'history'}"><i class="far fa-trash-alt"></i></router-link>
                        </nav>
                        <div class="logged-user-img d-flex flex-column align-items-center">
                            <img src="/static/img/user_4.png" alt="">
                        </div>
                    </div>
                    <router-view class="dashboard-content-view"></router-view> 
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'chart'
}
</script>
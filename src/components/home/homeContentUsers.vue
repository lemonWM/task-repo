<template>
  <section>
    <div class="home-users-section">
        <div class="header-wrapper-user ">
            <div class="container d-flex flex-column justify-content-center align-items-center">
                <h3 class="user-title">“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. In magna tortor, imperdiet vel laoreet sit amet, tristique ut enim. Donec eleifend tortor id eros pulvinar convallis. Sed laoreet est eros, at facilisis nisi interdum a.”</h3>
                <p class="user-under-title">John Doe, Project manager</p>
                <button class="btn video-button">
                    <img src="/static/img/moviePlay_11.png" alt="">
                    <p>Play movie</p>
                </button>            
            </div>
        </div>
        <!--  Content Users-->
        <div class="container content-wrapper-user"> 
            <!-- User Icons Section -->
            <div class="row user-wrapper justify-content-center">
                <div class=" d-flex flex-column single-user">
                    <div class="single-img-shadow">
                        <img src="/static/img/user_1.png" alt="" class="top-img">
                        <div class="shadow"></div>
                    </div>
                    <img src="/static/img/user-underline.png" alt="">
                </div>
                <div class=" d-flex flex-column single-user">
                    <div class="single-img-shadow">
                        <img src="/static/img/user_2.png" alt="" class="top-img">
                        <div class="shadow"></div>
                    </div>
                    <img src="/static/img/user-underline.png" alt="">
                </div>
                <div class=" d-flex flex-column single-user">
                    <div class="single-img-shadow">
                        <img src="/static/img/user_3.png" alt="" class="top-img">
                        <div class="shadow"></div>
                    </div>
                    <img src="/static/img/user-underline.png" alt="">
                </div>
                <div class=" d-flex flex-column single-user">
                    <div class="single-img-shadow">
                        <img src="/static/img/user_4.png" alt="" class="top-img">
                        <div class="shadow"></div>
                    </div>
                    <img src="/static/img/user-underline.png" alt="">
                </div>
                <div class=" d-flex flex-column single-user">
                    <div class="single-img-shadow">
                        <img src="/static/img/user_5.png" alt="" class="top-img">
                        <div class="shadow"></div>
                    </div>
                    <img src="/static/img/user-underline.png" alt="">
                </div>            
            </div>
            <div class="d-flex flex-column text-content justify-content-center align-items-center">
                <h4 class="title">Donec nec diam pellentesque, tempor odio eget, pulvinar justo.</h4>
                <p class="text">Maecenas finibus accumsan eros vel elementum. Nam bibendum a ante in ornare. Aliquam non sodales risus. Donec nec diam pellentesque, tempor odio eget, pulvinar justo.</p>
                <p><span class="special">Nulla porta, lacus at porta tincidunt, sapien tellus tempor mauris, at ultrices sapien velit. </span> Empor odio eget, pulvinar justo. Maecenas finibus accumsan eros vel elementum. Nam bibendum a ante in ornare. Aliquam non sodales risus. Donec nec diam pellentesque, tempor odio eget, pulvinar justo.</p>
            </div>
        </div>     
    </div>
  </section>
</template>

<script>
export default {
    name: 'home-content-users'
}
</script>
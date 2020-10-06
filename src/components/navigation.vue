<template>
<nav class="navbar navbar-expand-lg navbar-light">
    <div class="container">
        <div class="mobile-nav-fixed">
            <a class="navbar-brand" href="/dashboard">
            <img src="../assets/logo_03.png" alt="logo" class="logo">
            </a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item input-area-mobile">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search our site" aria-label="Search">
                    <button class="btn"  type="submit" >
                        <i class="fa fa-search"></i>
                    </button>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/dashboard">Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle " href="/about-us" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pages
                    </a>
                    <div class="dropdown-menu dropdown-menu-right second-dropdown-menu">
                        <a class="nav-link dropdown-toggle about-link" href="#" data-toggle="dropdown">About us</a>
                            <ul class="dropdown-menu dropdown-menu-righ pull-right second-menu">
                                <li><a class="dropdown-item" href="/caseStudy">Case Study</a></li>
                                <li><a class="dropdown-item" href="resources">Resources</a></li>
                                <li><a class="dropdown-item" href="services">Services</a></li>
                                <li><a class="dropdown-item" href="product">Product</a></li>
                                <li><a class="dropdown-item" href="404">404</a></li>
                            </ul>
                        <a class="dropdown-item" href="caseStudy">Case Study</a>
                        <a class="dropdown-item" href="resources">Resources</a>
                        <a class="dropdown-item" href="services">Services</a>
                        <a class="dropdown-item" href="product">Product</a>
                        <a class="dropdown-item" href="404">404</a>
                        <a class="dropdown-item" href="privacePolicy">Privacy Policy</a>
                        <a class="dropdown-item" href="searchResult">Search Result</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/loading-mailing">Loading & Mailing</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/blog">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact</a>
                </li>
                <li class="nav-item social-mobile">
                    <a class="nav-link" href="/contact">Follow us</a>
                    <div class="row social-icons">
                        <button class="btn"><i class="fab fa-twitter"></i></button>
                        <button class="btn"><i class="fab fa-facebook-f"></i></button>
                        <button class="btn"><i class="fab fa-pinterest-p"></i></button>
                        <button class="btn"><i class="fab fa-linkedin-in"></i></button>
                        <button class="btn"><i class="fab fa-instagram"></i></button>
                    </div>  
                </li>
            </ul>
            <div @mouseover="show = true" class="search-media">
                <form class="form-inline my-2 my-lg-0"  >
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" v-if="show">
                    <button class="btn"  type="submit" >
                        <i class="fa fa-search"></i>
                    </button>
                </form>
            </div>
        </div>
    </div>
</nav>
</template>

<script>

export default {
  name: 'mainApp',
  data () {
    return {
      show: false
    }
  }
}
</script>
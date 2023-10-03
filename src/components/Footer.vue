<template>
    <footer class="mt-5">
        <div class="footer-content">
            <router-link to="/"><img id="footer-logo" src="../assets/logo_big.png" alt="Sec for tech logo"></router-link>
            <div class="links top">
                <ul class="links-list list-group list-unstyled">
                    <li v-for="link in links"><a>{{ link }}</a></li>
                </ul>
            </div>
            <div class="links bottom">
                <div>
                    <a class="link-light" href="https://github.com/etherlesss/S4T-web" target="_blank"><i
                            class="bi bi-github" style="font-size: 24px;"></i></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script src="../ts/footer.ts"></script>

<style>@import "/src/css/styles.less";</style>
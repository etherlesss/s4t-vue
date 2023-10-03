<template>
    <div class="products left-container d-flex flex-column gap-1 w-100 w-md-75">
        <div class="product-labels px-3">
            <ul class="row mt-4 list-unstyled">
                <li class="col-3">Producto</li>
                <li class="col-2">Precio</li>
                <!--"Cantidad" for larger screens -->
                <li class="col-2 d-none d-md-block">Cantidad</li>
                <!--"Cant." for smaller screens -->
                <li class="col-2 d-md-none">Cant.</li>
                <li class="col-2">Total</li>
                <!--Icon for smaller screens-->
                <li class="col-1 d-md-none"><i class="bi bi-trash3"></i></li>
                <!--Text for larger screens-->
                <li class="col-2 d-none d-md-block">Remover</li>
            </ul>
        </div>
        <div class="product-cards">
            <ul class="row mt-4 list-unstyled px-3" v-for="product in products">
                <li class="col-3">
                    <h5 class="card-title fs-6 fw-bold">{{ product.nombre }}</h5>
                </li>
                <li class="col-2">
                    <p class="card-text">{{ product.precio }}</p>
                </li>
                <li class="col-2">
                    <p class="card-text">{{ product.cantidad }}</p>
                </li>
                <li class="col-2">
                    <p class="card-text">{{ product.total }}</p>
                </li>
                <!--Icon for smaller screens-->
                <li class="col-1 d-md-none">
                    <a onclick="" style="color: red;"><i class="bi bi-trash3"></i></a>
                </li>
                <!--Text for larger screens-->
                <li class="col-2 d-none d-md-block">
                    <a onclick="" style="color: red;">Remover</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script src="../ts/products.ts"></script>

<style>@import '../css/cart.less';</style>
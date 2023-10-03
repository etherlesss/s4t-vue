<template>
    <div class="cards d-flex flex-wrap gap-5 justify-content-center row-cols-5">
        <div class="card" v-for="producto in productos" style="width: 18rem;">
            <img src="https://www.si-analytics.com/Image%20Library/sample-images/Placeholder-500x500.png"
                class="card-img-top" alt="..."> <!--AQUI IDEALMENTE AGREGAR {{ producto.img }}-->
            <div class="card-body">
                <h5 class="card-title">{{ producto.titulo }}</h5>
                <h5 class="card-subtitle fw-bold">{{ producto.precio }}</h5>
                <p class="card-text">{{ producto.descripcion }}</p>
                <div class="d-flex flex-column gap-1">
                    <a href="#" class="btn btn-primary main-btn">Ver detalles</a>
                    <a href="#" class="btn btn-primary secondary-btn">Agregar al carro</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="../ts/cards.ts"></script>
<template>
  <div>
    <h1>{{ photoTitle }}</h1>
    <img :src="photoUrl" alt="Photographie" width="400">
  </div>
</template>

<script>
export default {
  data() {
    return {
      photoTitle: "Photographie de paysage",
      photoUrl: "/cola.jpg" // Mettez le chemin relatif correct ici
    };
  }
};
</script>

<style>
/* Styles CSS pour le composant */
h1 {
  font-size: 24px;
  color: #333;
}

img {
  margin-top: 10px;
}
</style>

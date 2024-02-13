<template>
    <div class="photo-gallery">
      <h2 class="section-title">Série de Photos et Commentaires</h2>
      <div v-for="(photo, index) in photos" :key="index" class="photo-card">
        <h3 class="photo-title">{{ photo.title }}</h3>
        <img :src="photo.image" alt="Photographie" class="photo-image">
        <p class="photo-comment">{{ photo.comment }}</p>
        <div class="comment-details">
          <p><span class="detail-label">Photographe :</span> {{ photo.photographer }}</p>
          <p><span class="detail-label">Date de création :</span> {{ photo.date }}</p>
          <p><span class="detail-label">Lieu :</span> {{ photo.location }}</p>
          <p><span class="detail-label">Technique utilisée :</span> {{ photo.technique }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        photos: [
          {
            title: "Mariée Traditionnelle",
            image: "/alliance.jpg",
            comment: "Cette photo capture la beauté de la tradition dans un contexte moderne. Le mariage traditionnel est représenté avec des détails exquis, mettant en valeur les vêtements, les bijoux et les coutumes locales. Le contraste entre la tradition et la modernité est clairement visible, créant une esthétique visuellement captivante.",
            photographer: "Ishola Akpo",
            date: "2015",
            location: "Bénin",
            technique: "Photographie numérique"
          },
          {
            title: "La Cérémonie",
            image: "/camera.jpg",
            comment: "Ici, Ishola Akpo saisit un moment de cérémonie avec des couleurs vibrantes. La photographie capture l'énergie de la cérémonie, avec des participants vêtus de manière traditionnelle. Les couleurs vives et l'expressivité des visages reflètent la joie et la signification de l'événement.",
            photographer: "Ishola Akpo",
            date: "2015",
            location: "Bénin",
            technique: "Photographie numérique"
          },
          {
            title: "Le Marié Moderne",
            image: "/cola.jpg",
            comment: "Le marié moderne est présenté avec une esthétique contemporaine. Cette photo met en lumière la fusion entre la tradition et la modernité. Le marié, habillé de manière moderne, reste enraciné dans les coutumes anciennes. Cela reflète la manière dont la culture évolue tout en préservant ses racines.",
            photographer: "Ishola Akpo",
            date: "2015",
            location: "Bénin",
            technique: "Photographie numérique"
          },
          {
            title: "Féminité et Tradition",
            image: "/cadeaux.jpg",
            comment: "Cette photo explore la féminité et la tradition dans un contexte changeant. Les détails subtils de la photographie mettent en évidence la beauté et l'élégance des femmes participant à la cérémonie. Les traditions culturelles continuent d'être une source de fierté et de signification pour les femmes de la communauté.",
            photographer: "Ishola Akpo",
            date: "2015",
            location: "Bénin",
            technique: "Photographie numérique"
          },
          // Ajoutez d'autres photos et commentaires
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  .photo-gallery {
    text-align: center;
    padding: 20px;
  }
  
  .section-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .photo-card {
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin: 20px 0;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .photo-title {
    font-size: 18px;
    margin-top: 10px;
  }
  
  .photo-image {
    max-width: 100%;
    height: auto;
    margin: 20px 0;
  }
  
  .photo-comment {
    font-size: 16px;
  }
  
  .comment-details {
    font-size: 14px;
  }
  
  .detail-label {
    font-weight: bold;
    margin-right: 5px;
  }
  </style>
  
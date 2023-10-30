<!-- <template>
    <div>
      <h1>Bienvenue sur mon site d'analyse photographique</h1>
      <p>Ishola Akpo est un artiste multimédia et photographe béninois dont le travail explore la frontière entre réalité et fiction.</p>
      <p>Dans ce devoir, nous examinerons sa série de photos intitulée 'Les Mariés de Notre Époque'.</p>
    </div>
  </template>
   -->
   <template>
    <div class="component">
      <div class="background-image"></div>
      <h1 class="title">Bienvenue sur mon site d'analyse photographique</h1>
      <p class="description">
        Ishola Akpo est un artiste multimédia et photographe béninois dont le travail explore la frontière entre réalité et fiction.
      </p>
      <p class="description">
        Dans ce devoir, nous examinerons sa série de photos intitulée 'Les Mariés de Notre Époque'.
      </p>
  
      <div class="btn-container">
        <router-link to="/photos" class="nav-btn">Voir la série de photos</router-link>
        <router-link to="/context" class="nav-btn">En savoir plus sur le contexte</router-link>
        <router-link to="/conclusion" class="nav-btn">Lire la conclusion</router-link>
      </div>
    </div>
  </template>
  
  <style scoped>
  .component {
    text-align: center;
    background-color: #f9f9f9;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  
  .background-image {
    background-image: url('/public/camera.jpg'); /* Remplacez par le chemin de votre image de caméra */
    background-size: cover;
    background-position: center;
    height: 300px; /* Ajustez la hauteur en fonction de votre image */
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  .title {
    font-size: 28px;
    color: #333;
    margin-top: 20px;
  }
  
  .description {
    font-size: 18px;
    color: #555;
    margin-bottom: 10px;
  }
  
  .nav-btn {
    display: inline-block;
    padding: 12px 20px;
    background-color: #007BFF;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    margin: 15px;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  
  .nav-btn:hover {
    background-color: #0056b3;
  }
  </style>
  
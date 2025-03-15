document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    fetch("https://picsum.photos/v2/list?limit=10")
    .then(response => response.json())
    .then(photos => {
        const gallery = document.getElementById("gallery"); 
        gallery.innerHTML = "";

        photos.forEach(photo => {
            const imgElement = document.createElement("img");
            imgElement.src = photo.download_url; // Nueva API
            imgElement.alt = "Imagen aleatoria";
            imgElement.style.width = "200px"; 

            const caption = document.createElement("p");
            caption.textContent = "Imagen de Lorem Picsum";

            const container = document.createElement("div");
            container.appendChild(imgElement);
            container.appendChild(caption);

            gallery.appendChild(container);
        });
    })
    .catch(error => console.error("Error al cargar imágenes:", error));

  
});

const input = document.getElementById("imageUrl");
const addBtn = document.getElementById("addImageBtn");
const deleteBtn = document.getElementById("deleteImageBtn");
const gallery = document.getElementById("gallery");

let selectedImage = null;

// Agregar imagen
addBtn.addEventListener("click", () => {
  const url = input.value.trim();
  if (!url) return;

  const img = document.createElement("img");
  img.src = url;

  // Al hacer clic, se selecciona esa imagen
  img.addEventListener("click", () => {
    if (selectedImage) {
      selectedImage.classList.remove("selected");
    }
    img.classList.add("selected");
    selectedImage = img;
  });

  gallery.appendChild(img);
  input.value = "";
});

// Eliminar imagen seleccionada
deleteBtn.addEventListener("click", () => {
  if (selectedImage) {
    gallery.removeChild(selectedImage);
    selectedImage = null;
  }
});


// Funcion para validar el formulario

export const validateForm = (formData) => {
    const errors = [];

    // Validación del titulo
    if(formData.title.length < 2){
      errors.push("Tittle must be at least 2 characters.");
    }

    // Validación de la reseña
    if(formData.review.length < 8 || formData.review.length > 240){
      errors.push("Review must be between 8 and 240 characters.");
    }

    // Validación de la URL de la portada
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(formData.cover)) {
      errors.push("Invalid cover URL.");
    }
    
    return errors;
};

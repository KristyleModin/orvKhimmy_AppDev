document.addEventListener("DOMContentLoaded", function() {
    // Get the image gallery container
    const imageGallery = document.getElementById("image-gallery");
    
    // Add event listener to the image gallery container
    imageGallery.addEventListener("click", function(event) {
        // Check if the clicked element is an image
        if (event.target.tagName === "IMG") {
            // Get the index of the clicked image
            const imageIndex = event.target.getAttribute("data-index");
            // Perform actions based on the image index
            switch (imageIndex) {
                case "1":
                    // Action for the first image
                    console.log("Clicked on Kim Dokja 1");
                    break;
                case "2":
                    // Action for the second image
                    console.log("Clicked on Kim Dokja 2");
                    break;
                case "3":
                    // Action for the third image
                    console.log("Clicked on Kim Dokja 3");
                    break;
                case "4":
                    console.log("Clicked on Kim Dokja 4");
                    break;
                case "5":
                    console.log("Clicked on Kim Dokja 5");
                    break;    
                default:
                    break;
            }
        }
    });

    // Get the image gallery container
    const images = document.querySelectorAll('#image-gallery img');

    // Add click event listener to each image
    images.forEach(function(image, index) {
        image.addEventListener('click', function() {
            // Scroll to the next image
            const nextIndex = (index + 1) % images.length;
            const nextImage = images[nextIndex];
            nextImage.scrollIntoView({ behavior: 'smooth', inline: 'center' });
        });
    });
});

var artworks = document.querySelectorAll('.artwork');
var currentIndex = 0;

artworks.forEach(function(artwork, index) {
    artwork.addEventListener('click', function() {
        currentIndex = index;
        openImage(artwork.querySelector('img').src);

    });
});

document.getElementById('close').addEventListener('click', closeImage);

document.getElementById('prev-left').addEventListener('click', function(e) {
    e.stopPropagation();
    navigate(-1);
});

document.getElementById('next-right').addEventListener('click', function(e) {
    e.stopPropagation();
    navigate(1);
});

document.getElementById('overlay').addEventListener('click', function(e) {
    if (e.target.id === 'overlay') {
        closeImage();
    }
});

function openImage(src) {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'block';

    var fullImage = document.getElementById('fullImage');
    fullImage.src = src;

    updateNavigationButtons();
}

function closeImage() {
    document.getElementById('overlay').style.display = 'none';
}

function navigate(direction) {
    var newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < artworks.length) {
        currentIndex = newIndex;
        var fullImage = document.getElementById('fullImage');
        fullImage.src = artworks[currentIndex].querySelector('img').src;
    }
    updateNavigationButtons();
}

function updateNavigationButtons() {
    var prevLeftButton = document.getElementById('prev-left');
    var nextRightButton = document.getElementById('next-right');
    var prevRightButton = document.getElementById('prev-right');
    var nextLeftButton = document.getElementById('next-left');

    prevLeftButton.style.display = currentIndex > 0 ? 'block' : 'none';
    nextRightButton.style.display = currentIndex < artworks.length - 1 ? 'block' : 'none';
    prevRightButton.style.display = currentIndex > 0 ? 'block' : 'none';
    nextLeftButton.style.display = currentIndex < artworks.length - 1 ? 'block' : 'none';
    
    // Hide the appropriate set of navigation buttons when reaching the ends
    if (currentIndex === 0) {
        prevLeftButton.style.display = 'none';
        prevRightButton.style.display = 'none';
    } else if (currentIndex === artworks.length - 1) {
        nextRightButton.style.display = 'none';
        nextLeftButton.style.display = 'none';
    }
        
}
// Add event listeners for buttons
document.getElementById('add-image-btn').addEventListener('click', addImage);
document.getElementById('delete-image-btn').addEventListener('click', deleteImage);

// Function to add an image
function addImage() {
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function() {
            var newArtwork = document.createElement('div');
            newArtwork.classList.add('artwork');
            newArtwork.innerHTML = '<img src="' + reader.result + '" alt="New Artwork">';
            document.querySelector('.gallery').appendChild(newArtwork);
            artworks = document.querySelectorAll('.artwork');
            attachArtworkListeners();
        };
        reader.readAsDataURL(file);
    };
    input.click();
}

// Function to delete an image
function deleteImage() {
    if (currentIndex >= 0 && currentIndex < artworks.length) {
        artworks[currentIndex].remove();
        artworks = document.querySelectorAll('.artwork');
        updateNavigationButtons();
    }
}

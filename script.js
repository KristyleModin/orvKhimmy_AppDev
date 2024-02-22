// Script.js
document.addEventListener("DOMContentLoaded", function() {
    var aboutPages = document.querySelectorAll('.about-page');
    var currentPageIndex = 0; 
    

    function showNextPage() {
        aboutPages[currentPageIndex].classList.remove('active');
        currentPageIndex = (currentPageIndex + 1) % aboutPages.length;
        aboutPages[currentPageIndex].classList.add('active');
        event.preventDefault();
    }
    
    document.querySelectorAll('.about-button').forEach(function(button) {
        button.addEventListener('click', showNextPage);
    });

    document.querySelectorAll('#navbar ul li a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            var navbarHeight = document.getElementById('navbar').offsetHeight;
            var targetOffset = targetSection.offsetTop - navbarHeight;
            window.scrollTo({ top: targetOffset, behavior: 'smooth' });
        });
    });

    
    document.addEventListener("DOMContentLoaded", function() {
        const characterCarousel = document.querySelector('.character-carousel');
        const leftButton = document.getElementById('scroll-left');
        const rightButton = document.getElementById('scroll-right');
        const scrollDistance = 300; 
    
        leftButton.addEventListener('click', function() {
            characterCarousel.scrollBy(-scrollDistance, 0);
        });
    
        rightButton.addEventListener('click', function() {
            characterCarousel.scrollBy(scrollDistance, 0);
        });
    }); 

    });

    document.addEventListener("DOMContentLoaded", function() {
        var characterPages = document.querySelectorAll('.character-page');
        var currentPageIndex = 0;
    
        function showNextCharacterPage() {
            characterPages[currentPageIndex].classList.remove('active');
            currentPageIndex = (currentPageIndex + 1) % characterPages.length;
            characterPages[currentPageIndex].classList.add('active');
            updateButtonStates();
            event.preventDefault();
        }
    
        function showPreviousCharacterPage() {
            characterPages[currentPageIndex].classList.remove('active');
            currentPageIndex = (currentPageIndex - 1 + characterPages.length) % characterPages.length;
            characterPages[currentPageIndex].classList.add('active');
            updateButtonStates();
            event.preventDefault();
        }
    
        function updateButtonStates() {
            var prevButton = document.querySelector('.prev-character-page');
            var nextButton = document.querySelector('.next-character-page');
    
            prevButton.disabled = currentPageIndex === 0;
            nextButton.disabled = currentPageIndex === characterPages.length - 1;
        }
    
        document.querySelector('.next-character-page').addEventListener('click', showNextCharacterPage);
        document.querySelector('.prev-character-page').addEventListener('click', showPreviousCharacterPage);

        updateButtonStates();
    });


    document.addEventListener("DOMContentLoaded", function() {
        const videoCarousel = document.querySelector('.video-carousel');
        const videoTitle = document.querySelector('.video-title');
        const leftButton = document.getElementById('video-scroll-left');
        const rightButton = document.getElementById('video-scroll-right');
        const scrollDistance = 580; 
        
        leftButton.addEventListener('click', function() {
            videoCarousel.scrollBy(-scrollDistance, 0);
        });
        
        rightButton.addEventListener('click', function() {
            videoCarousel.scrollBy(scrollDistance, 0);
        });
        
        videoCarousel.addEventListener('scroll', function() {
            const videoContainers = document.querySelectorAll('.video-container');
            const carouselRect = videoCarousel.getBoundingClientRect();
            const carouselCenter = carouselRect.left + carouselRect.width / 2;
    
            videoContainers.forEach((container, index) => {
                const containerRect = container.getBoundingClientRect();
                const containerCenter = containerRect.left + containerRect.width / 2;
                const distance = Math.abs(containerCenter - carouselCenter);
                
                if (distance < carouselRect.width / 4) {
                    container.classList.add('active');
                    videoTitle.textContent = container.getAttribute('data-title');
                } else {
                    container.classList.remove('active');
                }
            });
        });
    });
    

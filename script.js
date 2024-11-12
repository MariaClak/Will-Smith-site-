document.addEventListener('DOMContentLoaded', () => {
    const flashcards = document.querySelectorAll('.flashcard');
    
    flashcards.forEach(flashcard => {
        flashcard.addEventListener('click', () => {
            flashcard.querySelector('.card').classList.toggle('flip');
        });
    });
});


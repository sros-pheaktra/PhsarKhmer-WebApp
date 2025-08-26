document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            const answer = this.querySelector('.answer');
            const icon = this.querySelector('i');
            const isOpen = answer.classList.contains('max-h-[1000px]');

            // Close all answers
            faqItems.forEach(otherItem => {
                otherItem.querySelector('.answer').classList.remove('max-h-[1000px]');
                otherItem.querySelector('i').classList.remove('rotate-180');
            });

            // Open this one if it was closed
            if (!isOpen) {
                answer.classList.add('max-h-[1000px]'); // big enough for content
                icon.classList.add('rotate-180');
            }
        });
    });
});

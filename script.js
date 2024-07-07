document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.image').forEach(image => {
        image.addEventListener('click', () => {
            modal.style.display = 'block';
            modalImage.src = image.src;
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});



    
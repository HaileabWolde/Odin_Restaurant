import backgroundImage from './image/Background.jpg';
const image = document.createElement('img');
image.src = backgroundImage;
const contactPage = (function () {
    const newDiv = document.createElement('div');
    newDiv.classList.add('contact');
     newDiv.id = 'contact-page';
    newDiv.innerHTML = `
        <h1>Welcome to Odin Restaurant And Contact Me</h1>
        <p>Experience the best culinary delights crafted with passion and expertise.</p>
        <p>Explore our menu, contact us for reservations, or simply enjoy the ambiance.</p>
        <img src="${image.src}" alt="Restaurant Background" class="background-image">
    `;
   
    return {
        render: () => {
            const content = document.getElementById('content');
            content.innerHTML = ''; // Clear previous content
            content.appendChild(newDiv);
        }
    };
})();
export default contactPage;
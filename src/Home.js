import backgroundImage from './image/Background.jpg';
const image = document.createElement('img');
image.src = backgroundImage;
const HomePage = (function () {
    const newDiv = document.createElement('div');
    newDiv.classList.add('home');
    newDiv.id = 'home-page';
    // Adding a unique ID for easier targeting
    newDiv.innerHTML = `
        <h1>Welcome to Odin Restaurant</h1>
        <p>Experience the best culinary delights crafted with passion and expertise.</p>
        <p>Explore our menu, contact us for reservations, or simply enjoy the ambiance.</p>
        <img src="${image.src}" alt="Restaurant Background" class="background-image">
    `;
   
    return {
        render: () => {
            const content = document.getElementById('content');
            content.innerHTML = ''; // Clear previous content
            content.appendChild(newDiv);
        },
        getElement: () => newDiv
    };
})();
export default HomePage;
const createHeader = () => {
    const header = document.createElement('header');
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('flex', 'md:flex-col', 'items-center', 'justify-between', 'p-4', 'bg-grey-800', 'text-white');
    logoContainer.innerHTML = `
        <div class="flex items-center">
            <div class="text-2xl font-bold tracking-wide">Taskify</div>
        </div>
        <button id="toggleMenu" class="lg:hidden flex items-center focus:outline-none">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>`;

    const mobileMenu = document.createElement('div');
    mobileMenu.classList.add('lg:hidden', 'fixed', 'top-0', 'left-0', 'right-0', 'bottom-0', 'bg-gray-800', 'hidden');
    mobileMenu.innerHTML = `
        <button id="closeMenu" class="p-2 absolute top-4 right-2 text-gray-300 focus:outline-none">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>
        <ul class="flex flex-col items-center mt-16 space-y-4">
            <li><a class="text-white hover:text-blue-500">All Tasks</a></li>
            <li><a class="text-gray-300 hover:text-blue-500">Today</a></li>
            <li><a class="text-gray-300 hover:text-blue-500">This week</a></li>
            <li><a class="text-gray-300 hover:text-blue-500">Priority</a></li>
            <li><a class="text-gray-300 hover:text-blue-500">Completed</a></li>
        </ul>`;

    header.appendChild(logoContainer);
    header.appendChild(mobileMenu);

    const toggleMenuButton = header.querySelector('#toggleMenu');
    const closeMenuButton = mobileMenu.querySelector('#closeMenu');

    toggleMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    closeMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });

    return header;
};

export default createHeader;

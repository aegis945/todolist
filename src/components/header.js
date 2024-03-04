const createHeader = () => {
    const header = document.createElement('header');
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('flex', 'md:flex-col', 'items-center', 'justify-between', 'py-5', 'px-8', 'text-sky-200');
    logoContainer.innerHTML = `
        <div class="flex items-center">
            <div class="text-4xl font-bold tracking-wide text-sky-200">Task</div>
            <div class="text-4xl font-bold tracking-wide text-sky-600">ify</div>
        </div>
        <button id="toggleMenu" class="lg:hidden flex items-center focus:outline-none">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>`;

    const mobileMenu = document.createElement('div');
    mobileMenu.classList.add('lg:hidden', 'fixed', 'top-0', 'left-0', 'right-0', 'bottom-0', 'bg-sky-950', 'hidden');
    mobileMenu.innerHTML = `
        <button id="closeMenu" class="p-2 absolute top-4 right-2 text-sky-200 focus:outline-none">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                   d="M6 18L18 6M6 6l12 12"></path>
            </svg>
        </button>

        <div class="mt-24 text-center py-3 text-lg font-bold text-sky-600">Filters</div>
        <div class="flex flex-col py-4 space-y-4 px-4">
            <div class="flex justify-between border border-sky-200 rounded-md p-2">
                <div><a class="text-sky-200">All Tasks</a></div>
                <img src="/src/icons/all-tasks.svg" alt="All Tasks" class="w-6 h-6">
            </div>
            <div class="flex justify-between border border-sky-200 rounded-md p-2">
                <div><a class="text-sky-200">Today</a></div>
                <img src="/src/icons/today.svg" alt="Today" class="w-6 h-6">
            </div>
            <div class="flex justify-between border border-sky-200 rounded-md p-2">
                <div><a class="text-sky-200">This week</a></div>
                <img src="/src/icons/this-week.svg" alt="This Week" class="w-6 h-6">
            </div>
            <div class="flex justify-between border border-sky-200 rounded-md p-2">
                <div><a class="text-sky-200">Priority</a></div>
                <img src="/src/icons/priority.svg" alt="Priority" class="w-6 h-6">
            </div>
            <div class="flex justify-between border border-sky-200 rounded-md p-2">
                <div><a class="text-sky-200">Completed</a></div>
                <img src="/src/icons/completed.svg" alt="Completed" class="w-6 h-6">
            </div>
        </div>`;

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

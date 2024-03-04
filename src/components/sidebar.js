const createSidebar = () => {
    const sidebar = document.createElement('div');
    sidebar.classList.add('hidden', 'md:block', 'md:w-1/5', 'text-white', 'bg-sky-900', 'border-solid', 'rounded-lg', 'ml-2', 'mt-10');

    sidebar.innerHTML = `
        <div class="text-center py-3 text-lg font-bold text-sky-600">Filters</div>
        <div class="flex flex-col py-4 space-y-4 px-4">
            <div class="flex justify-between border border-sky-200 rounded-md p-2 hover:bg-blue-500 transition duration-300">
                <div><a class="text-sky-200">All Tasks</a></div>
                <img src="/src/icons/all-tasks.svg" alt="All Tasks" class="w-6 h-6">
            </div>
            <div class="flex justify-between border border-sky-200 rounded-md p-2 hover:bg-blue-500 transition duration-300">
                <div><a class="text-sky-200">Today</a></div>
                <img src="/src/icons/today.svg" alt="Today" class="w-6 h-6">
            </div>
            <div class="flex justify-between border border-sky-200 rounded-md p-2 hover:bg-blue-500 transition duration-300">
                <div><a class="text-sky-200">This week</a></div>
                <img src="/src/icons/this-week.svg" alt="This Week" class="w-6 h-6">
            </div>
            <div class="flex justify-between border border-sky-200 rounded-md p-2 hover:bg-blue-500 transition duration-300">
                <div><a class="text-sky-200">Priority</a></div>
                <img src="/src/icons/priority.svg" alt="Priority" class="w-6 h-6">
            </div>
            <div class="flex justify-between border border-sky-200 rounded-md p-2 hover:bg-blue-500 transition duration-300">
                <div><a class="text-sky-200">Completed</a></div>
                <img src="/src/icons/completed.svg" alt="Completed" class="w-6 h-6">
            </div>
        </div>`;

    return sidebar;
};

export default createSidebar;

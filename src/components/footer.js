const createFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('fixed', 'bottom-0', 'flex', 'gap-2', 'items-center', 'justify-center', 'w-full', 'h-12', 'text-center', 'text-white', 'bg-sky-900', 'border-solid', 'rounded-lg');
    footer.innerHTML = 'Built by<a href="https://github.com/aegis945"target="_blank"><img src="/src/icons/github-mark.png" alt="GitHub Logo" width="30" height="30"></a> | <a href="https://github.com/aegis945/project-library" target="_blank">Source Code</a>';

    return footer;
};

export default createFooter;

import createHeader from "./components/header";
import createSidebar from "./components/sidebar";

const renderDOM = () => {
    document.body.classList.add("bg-sky-950", "font-body");
    const mainContent = document.querySelector('#content');
    const headerElement = createHeader();
    const sidebarElement = createSidebar();

    mainContent.appendChild(headerElement);
    mainContent.appendChild(sidebarElement);
};

export default renderDOM;

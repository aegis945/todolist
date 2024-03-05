import createHeader from "./components/header";
import createSidebar from "./components/sidebar";
import createFooter from "./components/footer";

const renderDOM = () => {
    document.body.classList.add("bg-sky-950", "font-body");
    const mainContent = document.querySelector('#content');
    const headerElement = createHeader();
    const sidebarElement = createSidebar();
    const footerElement = createFooter();

    mainContent.appendChild(headerElement);
    mainContent.appendChild(sidebarElement);
    mainContent.appendChild(footerElement);
};

export default renderDOM;

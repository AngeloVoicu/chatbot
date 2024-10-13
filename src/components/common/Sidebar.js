import Link from "./Link";

function Sidebar() {
    const links = [
        {
            label: "Home", path: "/home", icon: "pi pi-home"
        },
        {
            label: "Chatbot", path: "/chatbot", icon: "pi pi-comments"
        }
    ];

    const renderedLinks = links.map((link) => {
        return <Link key={link.label} to={link.path} icon={link.icon} className="mb-2 sidebar-content-links"
            activeClassName="sidebar-content-active-links">
            {link.label}
        </Link>
    })
    return (
        <div className="sticky top-0 flex flex-col items-start border-r-4">
            {renderedLinks}
        </div>
    )

}

export default Sidebar;
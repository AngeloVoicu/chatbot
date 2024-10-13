import useNavigation from "../../hooks/use-navigation"
import classNames from "classnames";

function Link({ to, children, icon, className, activeClassName }) {
    const { navigate, currentPath } = useNavigation();
    const classes = classNames(
        className,
        currentPath === to & activeClassName
    );
    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    };
    return (
        <a className={`${classes} inline-flex`} href={to} onClick={handleClick}>
            {icon && <i className={`${icon} mr-2`} style={{ paddingTop: "10px" }}></i>}
            <p className="pt-1">{children}</p>
        </a>
    )
};

export default Link;

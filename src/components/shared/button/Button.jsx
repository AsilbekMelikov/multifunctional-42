import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({
  navigation = "/courses",
  alt = "ZapIcon",
  className = "base-semibold btn inline-flex-center text-light800_dark300 h-11 rounded-md px-8 transition-all duration-200 ease-in-out hover:bg-opacity-90 md:py-8",
  children = "Ishtirok etish",
  notlightning,
}) => {
  return (
    <div>
      <Link to={navigation} className={className}>
        {!notlightning && (
          <img
            alt={alt}
            loading="lazy"
            width="24"
            height="24"
            decoding="async"
            className="mr-2"
            srcSet="https://42.uz/_next/image?url=%2Fanimated%2FZapIcon-64.gif&w=32&q=75"
            src="https://42.uz/_next/image?url=%2Fanimated%2FZapIcon-64.gif&w=32&q=75"
          />
        )}

        {children}
      </Link>
    </div>
  );
};

Button.propTypes = {
  navigation: PropTypes.string, // Define the shape of navigation if possible
  alt: PropTypes.string,
  className: PropTypes.string,
  notlightning: PropTypes.bool,
  children: PropTypes.node.isRequired, // Example of another prop
};

export default Button;

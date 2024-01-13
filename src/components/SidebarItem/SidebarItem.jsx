import PropTypes from "prop-types";

const SidebarItem = ({ itemName, logo, notification }) => {
  return (
    <li>
      <a className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
        {logo}
        <span className="flex-1 ms-3 whitespace-nowrap">{itemName}</span>
        {notification}
      </a>
    </li>
  );
};

SidebarItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  logo: PropTypes.node.isRequired, // Assuming logo is a React node, adjust if needed
  notification: PropTypes.node, // Assuming notification is optional
};

export default SidebarItem;

const Navbar = ({ setCategory, activeCategory, setActiveCategory }) => {
  const handleClick = (category) => {
    setCategory(category);
    setActiveCategory(category);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="badge bg-light text-dark">NewsMag</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {['technology', 'business', 'health', 'science', 'sports', 'entertainment'].map(category => (
              <li className="nav-item" key={category}>
                <div
                  className={`nav-link nav-link-hover ${activeCategory === category ? 'active-category' : ''}`}
                  onClick={() => handleClick(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

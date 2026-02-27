import {
  Navbar,
  Nav,
  Container,
  Button,
  Badge,
  Form,
  FormControl,
  NavDropdown
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { AppContext } from "../context/AppContext";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

function NavbarComp() {
  const { theme, toggleTheme } = useContext(AppContext);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  // Redux state
  const items = useSelector((state) => state.cart.items);
  const totalQty = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/shop?search=${search}`);
    setSearch("");
  };

  return (
    <Navbar
      bg={theme === "dark" ? "dark" : "light"}
      variant={theme === "dark" ? "dark" : "light"}
      expand="lg"
      sticky="top"
      className="shadow-sm py-3"
    >
      <Container>

        {/* Brand */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-4"
        >
          🛍 MyShop
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">

          {/* Search Bar */}
          <Form
            className="d-flex mx-auto w-50"
            onSubmit={handleSearch}
          >
            <FormControl
              type="search"
              placeholder="Search products..."
              className="me-2"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button type="submit" variant="outline-success">
              Search
            </Button>
          </Form>

          <Nav className="ms-auto align-items-center">

            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/analytics">Analytics</Nav.Link>

            {/* Categories Dropdown */}
            <NavDropdown title="Categories" id="categories-dropdown">
              <NavDropdown.Item as={Link} to="/shop?category=Electronics">
                Electronics
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop?category=Fashion">
                Fashion
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/shop?category=Home">
                Home
              </NavDropdown.Item>
            </NavDropdown>

            {/* Shop Link */}
            <Nav.Link
              as={Link}
              to="/shop"
              className="fw-semibold position-relative"
            >
              <FaShoppingCart size={18} />
              {totalQty > 0 && (
                <Badge
                  bg="danger"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {totalQty}
                </Badge>
              )}
            </Nav.Link>

            {/* User Dropdown */}
            <NavDropdown
              title={<FaUserCircle size={20} />}
              id="user-dropdown"
              align="end"
            >
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/orders">
                Orders
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Logout
              </NavDropdown.Item>
            </NavDropdown>

            {/* Theme Toggle */}
            <Button
              variant={theme === "dark" ? "light" : "dark"}
              size="sm"
              className="ms-3"
              onClick={toggleTheme}
            >
              {theme === "dark" ? "Light" : "Dark"}
            </Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NetflixNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="w-100">
      <Container fluid>
        <Navbar.Brand href="#" style={{ color: "red", fontWeight: "bold" }}>
          <img src="assets/logo.png" alt="Netflix Logo" style={{ width: "100px", height: "55px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />{" "}
        <Navbar.Collapse id="navbarSupportedContent">
          {" "}
          <Nav className="me-auto">
            {" "}
            <Nav.Link href="#" className="fw-bold active">
              Home
            </Nav.Link>{" "}
            <Nav.Link href="#" className="fw-bold">
              TV Shows
            </Nav.Link>{" "}
            <Nav.Link href="#" className="fw-bold">
              Movies
            </Nav.Link>{" "}
            <Nav.Link href="#" className="fw-bold">
              Recently Added
            </Nav.Link>{" "}
            <Nav.Link href="#" className="fw-bold">
              My List
            </Nav.Link>{" "}
          </Nav>
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-search text-white" style={{ fontSize: "1.5rem" }}></i>
            <div className="fw-bold text-white">KIDS</div>
            <i className="bi bi-bell text-white" style={{ fontSize: "1.5rem" }}></i>
            <i className="bi bi-person-circle text-white" style={{ fontSize: "1.5rem" }}></i>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NetflixNavbar;

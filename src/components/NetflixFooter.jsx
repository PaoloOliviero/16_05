import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NetflixFooter = () => {
  return (
    <footer style={{ backgroundColor: "black" }} className="text-white py-4 text-center">
      <Container fluid>
        <Row className="justify-content-center mb-3">
          {["facebook", "instagram", "twitter-x", "youtube"].map((platform) => (
            <Col key={platform} xs="auto">
              <i className={`bi bi-${platform} footer-icon me-2`} style={{ fontSize: "2rem" }}></i>
            </Col>
          ))}
        </Row>

        <Row className="justify-content-center text-center row-cols-1 row-cols-sm-2 row-cols-md-4">
          {[
            ["Audio and Subtitles", "Media Center", "Privacy", "Contact Us"],
            ["Audio Description", "Investor Relations", "Legal Notices"],
            ["Help Center", "Jobs", "Cookie Preferences"],
            ["Gift Cards", "Terms of Use", "Corporate Information"],
          ].map((list, index) => (
            <Col key={index}>
              {list.map((item) => (
                <p key={item} className="footer-links">
                  <a href="#" alt="footer link" className="text-white">
                    {item}
                  </a>
                </p>
              ))}
            </Col>
          ))}
        </Row>

        <Row className="justify-content-center mt-3">
          <Col xs="auto">
            <Button variant="secondary" size="sm" className="footer-button rounded-0">
              Service Code
            </Button>
          </Col>
        </Row>

        <Row className="justify-content-center mt-2">
          <Col xs="auto" className="copyright">
            © 1997-2023 Netflix, Inc.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default NetflixFooter;

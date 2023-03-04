import { Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {SiEpicgames} from 'react-icons/si'

function TopBar({ cartItem }) {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="danger" variant="dark" className="py-4">
        <Container fluid>
          <span
            className="text-white"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <SiEpicgames size={42}/>
          </span>
          <span className="text-white fs-3 fw-bold"><em>Gaming Spot</em></span>
          <span
            className="text-white"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/cart")}
          >
            <FaShoppingCart size={28} />{" "}
            {cartItem ? <sup className="fs-5">{cartItem.length}</sup> : ""}
          </span>
        </Container>
      </Navbar>
    </>
  );
}

export default TopBar;

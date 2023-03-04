import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import game from "../game-data";

function Home({ setCartItem }) {
  const navigate = useNavigate();

  return (
    <div className="d-flex mt-3 justify-content-evenly flex-wrap gap-3">
      {game.map((game, id) => {
        return (
          <Card key={id} style={{ width: "16rem" }}>
            <Card.Img variant="top" src={game.image} alt="pic" height="300vh" />
            <Card.Body style={{ backgroundColor: "#c5d5ed" }}>
              <Card.Title className="fs-6">{game.title}</Card.Title>
              <Card.Text>Rs. {game.price}/-</Card.Text>
              <span className="d-flex justify-content-between">
                <Button
                  variant="primary"
                  onClick={() => {
                    setCartItem((prev) => [
                      ...prev,
                      {
                        id: game.id,
                        image: game.image,
                        price: game.price,
                        qty: game.qty,
                        review: game.review,
                        description: game.description,
                      },
                    ]);
                  }}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="warning"
                  className="w-50"
                  onClick={() => {
                    setCartItem((prev) => [
                      ...prev,
                      {
                        id: game.id,
                        image: game.image,
                        price: game.price,
                        qty: game.qty,
                        review: game.review,
                        description: game.description,
                      },
                    ]);
                    navigate("/cart");
                  }}
                >
                  Buy
                </Button>
              </span>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Home;

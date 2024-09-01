import { Col, Container,  Row } from "react-bootstrap";
import ArticleItems from "../../compounents/arricle/ArticleItems";
import MyNavbar from "../../compounents/navbar/MyNavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Article from "../article/Article";

function Home() {
 const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/articles")
      .then((response) => setArticles(response.data));
  }, [])
  return (
    <>
      <MyNavbar />
      <Container>
        <h1 style={{ marginTop: "20px" }}>لیست مقالات</h1>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 py-3">
          {articles.map((items) => (
            <Col key={items.id}>
              <ArticleItems {...items} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  ); 
}

export default Home;

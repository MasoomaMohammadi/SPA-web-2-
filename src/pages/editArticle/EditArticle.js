import { useParams } from "react-router-dom";
import MyNavbar from "../../compounents/navbar/MyNavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";

function EditArticle() {
  const articleIds = useParams().articleId;
  const [editArticleData, setEditArticleData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/articles/${articleIds}`)
      .then((response) => setEditArticleData(response.data));
  }, []);

  const editArticleHandler = () => {
    axios.put(`http://localhost:5000/articles/${articleIds}`, editArticleData);
    Swal.fire({
      title: "مقاله با موفقیت ویرایش شد",
      timer: "2000",
      timerProgressBar: true,
      showCancelButton: false,
    });
  };

  const formHandler = (e) => {
    setEditArticleData({ ...editArticleData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <MyNavbar />
      <div className="fromContainer">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              value={editArticleData.title}
              name="title"
              onChange={formHandler}
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              value={editArticleData.desc}
              name="desc"
              onChange={formHandler}
              type="text"
              placeholder="یه توضیح کوتاه در مورد مقاله وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              value={editArticleData.writter}
              name="writter"
              onChange={formHandler}
              type="text"
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              value={editArticleData.category}
              name="category"
              onChange={formHandler}
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              value={editArticleData.image}
              name="image"
              onChange={formHandler}
              type="text"
              placeholder="عکس مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control
              value={editArticleData.readingTime}
              name="readingTime"
              onChange={formHandler}
              type="number"
              placeholder=""
            />
          </Form.Group>

          <Button
            onClick={editArticleHandler}
            variant="primary"
            type="button"
            className="mb-5"
          >
            ویرایش مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}

export default EditArticle;

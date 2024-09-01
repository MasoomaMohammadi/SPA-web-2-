import MyNavbar from "../../compounents/navbar/MyNavbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddArticle.css";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function AddArticle() {
  const [addForm, setAddForm] = useState({});

  const resetFormData = () => {
    setAddForm({
      title: "",
      desc: "",
      image: "",
      writter: "",
      category: "",
      readingTime: "",
    });
  };

  const addArticleHandler = () => {
    axios
      .post("http://localhost:3000/articles", addForm)
      .then((response) => {
        if (response.status === 201) {
          Swal.fire({
            title: "مقاله جدید با موفقیت ساخته شد",
            timer: 3000,
            timerProgressBar: true,
          });
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "مقاله ساخته نشد",
          timer: 3000,
          icon: "error",
          timerProgressBar: true,
        });
      });
    resetFormData();
  };

  const formHandler = (e) => {
    setAddForm({ ...addForm, [e.target.name]: e.target.value });
  };
  return (
    <>
      <MyNavbar />
      <div className="fromContainer">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              value={addForm.title}
              name="title"
              onChange={formHandler}
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              value={addForm.desc}
              name="desc"
              onChange={formHandler}
              type="text"
              placeholder="یه توضیح کوتاه در مورد مقاله وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>نویسنده مقاله</Form.Label>
            <Form.Control
              value={addForm.writter}
              name="writter"
              onChange={formHandler}
              type="text"
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>موضوع مقاله</Form.Label>
            <Form.Control
              value={addForm.category}
              name="category"
              onChange={formHandler}
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              value={addForm.image}
              name="image"
              onChange={formHandler}
              type="text"
              placeholder="عکس مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>مدت زمان خواندن</Form.Label>
            <Form.Control
              value={addForm.readingTime}
              name="readingTime"
              onChange={formHandler}
              type="number"
              placeholder=""
            />
          </Form.Group>

          <Button onClick={addArticleHandler} variant="primary" type="button" className="mb-5">
            ساخت مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddArticle;

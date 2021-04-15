import { Component } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import axios, { post } from "axios";
import { FormGroup, Label, Input, Col } from "reactstrap";
import base_url from "../api/baseapi"
class ModifyProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: "",
      type: "",
      description: "",
      price: "",
      gender: "Male",
      quantity: "",
      size: "S",
      color: "",
      imageData: null,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.callingUpload = this.callingUpload.bind(this);
  }

  validate(values) {
    let error = {};
    if (!values.description) {
      error.description = "Enter a Description";
    } else if (values.description.length < 5) {
      error.description = "Enter Atleast 5 Characters in Description";
    }
    return error;
  }
  onSubmit(values) {
    if (this.state.id === "-1") {
      console.log(values);
      const formData = new FormData();
      var data = {
        id: "",
        name: this.state.name,
        type: this.state.type,
        description: this.state.description,
        price: this.state.price,
        gender: this.state.gender,
        quantity: this.state.quantity,
        size: this.state.size,
        color: this.state.color,
        imagePath: "",
      };
      console.log(data);

      formData.append("file", this.state.imageData);
      formData.append("admin", JSON.stringify(data));
      this.callingUpload(formData).then((response) => {
        console.log(response);
        this.props.history.push("/products");
      });
    } else {
      axios
        .put("http://localhost:8080/product", values)
        .then(() => this.props.history.push("/admin"));
      console.log(values);
    }
  }
  callingUpload(data) {
    console.log("Sending");
    const url = `${base_url}/product/`;
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return post(url, data, config);
  }

  componentDidMount() {
    this.setState({ id: this.props.match.params.id });
    if (this.state.id === "-1") {
      return;
    }
    axios
      .get(`http://localhost:8080/product/${this.state.id}`)
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          type: response.data.type,
          description: response.data.description,
          price: response.data.price,
          gender: response.data.gender,
          quantity: response.data.quantity,
          size: response.data.size,
          color: response.data.color,
        });
      });
  }
  render() {
    let {
      id,
      name,
      type,
      description,
      price,
      gender,
      quantity,
      size,
      color,
      imageData,
    } = this.state;
    return (
      <div className="container" style={{marginBottom:"100px",height:"1000px"}}>
      <h2>Product Form</h2>
        <Formik
          initialValues={{
            id,
            name,
            type,
            description,
            gender,
            price,
            quantity,
            size,
            color,
            imageData,
          }}
          onSubmit={this.onSubmit}
          validateOnBlur={false}
          validate={this.validate}
          enableReinitialize={true}
        >
          {(props) => (
            <Form>
              <ErrorMessage
                name="description"
                component="div"
                className="alert alert-warning"
              ></ErrorMessage>

              <fieldset className="form-group">
                <label for="name" style={{ float: "left" }}>
                  Product Name :
                </label>
                <Field
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => {
                    this.setState({ name: e.target.value });
                  }}
                />
              </fieldset>

              <fieldset className="form-group">
                <label for="type" style={{ float: "left" }}>
                  Product Type :
                </label>
                <Field
                  className="form-control"
                  type="text"
                  name="type"
                  id="type"
                  onChange={(e) => {
                    this.setState({ type: e.target.value });
                  }}
                />
              </fieldset>

              <fieldset className="form-group">
                <label for="description" style={{ float: "left" }}>
                  Description
                </label>
                <Field
                  className="form-control"
                  type="text"
                  name="description"
                  id="description"
                  onChange={(e) => {
                    this.setState({ description: e.target.value });
                  }}
                />
              </fieldset>

              <fieldset className="form-group">
                <label for="price" style={{ float: "left" }}>
                  Product Price :
                </label>
                <Field
                  className="form-control"
                  type="text"
                  name="price"
                  id="price"
                  onChange={(e) => {
                    this.setState({ price: e.target.value });
                  }}
                />
              </fieldset>
              <fieldset className="form-group">
                <label for="gender" style={{ float: "left" }}>
                  Gender :
                </label>
                <select
                  className="custom-select"
                  name="gender"
                  id="gender"
                  style={{ float: "left", marginLeft: "7px" }}
                  value={gender}
                  onChange={(e) => {
                    this.setState({ gender: e.target.value });
                  }}
                >
                  <option value="Male" name="gender">
                    Male
                  </option>
                  <option value="Female" name="gender">
                    Female
                  </option>
                  <option value="Other" name="gender">
                    Other
                  </option>
                </select>
              </fieldset>

              <fieldset className="form-group">
                <label for="price" style={{ float: "left" }}>
                  Product Quantity :
                </label>
                <Field
                  className="form-control"
                  type="text"
                  name="quantity"
                  id="quantity"
                  onChange={(e) => {
                    this.setState({ quantity: e.target.value });
                  }}
                />
              </fieldset>

              <FormGroup row>
                <Label for="exampleFile" sm={2}>
                  Upload Product Image
                </Label>
                <Col sm={10}>
                  <Input
                    type="file"
                    id="imagePath"
                    name="imagePath"
                    onChange={(e) => {
                      this.setState({ imageData: e.target.files[0] });
                    }}
                  />
                </Col>
              </FormGroup>

              <fieldset className="form-group">
                <label for="gender" style={{ float: "left" }}>
                  Select Size :
                </label>
                <select
                  className="custom-select"
                  name="size"
                  id="size"
                  onChange={(e) => {
                    this.setState({ size: e.target.value });
                  }}
                >
                  <option value="S" name="size">
                    S
                  </option>
                  <option value="M" name="size">
                    M
                  </option>
                  <option value="L" name="size">
                    L
                  </option>
                </select>
              </fieldset>

              <fieldset className="form-group">
                <label for="color" style={{ float: "left" }}>
                  Product Color :
                </label>
                <Field
                  className="form-control"
                  type="text"
                  name="color"
                  id="color"
                  onChange={(e) => {
                    this.setState({ color: e.target.value });
                  }}
                />
              </fieldset>

              <button className="btn btn-success" type="submit">
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default ModifyProducts;

import React from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import env from "react-dotenv";

const URL = env.URL;
const API_KEY = env.API_KEY;

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.service = this.props.service;
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      status: "Send email",
      categoryList: this.props.categories,
      speciesList: [],
      isSearch: false,
      category: null,
      species: null,
      breed: null,
      petName: null,
    };
    this.toggleSearch = this.toggleSearch.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSpeciesChange = this.handleSpeciesChange.bind(this);
    this.handleBreedChange = this.handleBreedChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  toggleSearch() {
    this.setState({ ...this.state, isSearch: !this.state.isSearch });
  }

  handleCategoryChange(event) {
    this.setState({
      ...this.state,
      category: event.target.value,
      species: null,
      breed: null,
      petName: null,
    });
  }

  handleSpeciesChange(event) {
    this.setState({
      ...this.state,
      species: event.target.value,
      breed: null,
      petName: null,
    });
  }

  handleBreedChange(event) {
    this.setState({
      ...this.state,
      breed: event.target.value,
      petName: null,
    });
  }

  handleNameChange(event) {
    this.setState({ ...this.state, petName: event.target.value });
  }

  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "phone") {
      this.setState({ phone: event.target.value });
    } else if (field === "category") {
      this.setState({ category: event.target.value });
    } else if (field === "species") {
      this.setState({ species: event.target.value });
    } else if (field === "breed") {
      this.setState({ breed: event.target.value });
    } else if (field === "petName") {
      this.setState({ petName: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ ...this.state, status: "Sending" });
    axios({
      method: "POST",
      url: URL,
      headers: {
        apikey: API_KEY,
      },
      data: this.state,
    })
      .then((response) => {
        if (response.data.status === "sent") {
          alert("Message Sent");
          this.setState({
            name: "",
            email: "",
            phone: "",
            category: "",
            species: "",
            breed: "",
            petName: "",
            message: "",
            status: "Submit",
          });
        } else if (response.data.status === "failed") {
          console.log(response);
          alert("Message Failed");
        }
      })
      .catch((err) => {
        console.log(err.response.status, "Wrong API KEY!");
        alert(err.response.data);
      });
  }

  render() {
    let buttonText = this.state.status;
    return (
      <div className="contact-page">
        <h4>Need help? Ask about either an animal or what interests you!</h4>
        <Form onSubmit={this.handleSubmit.bind(this)} method="POST">
          <Form.Group>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange.bind(this)}
              required
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              id="email"
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
              required
            />
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone number"
              id="phone"
              value={this.state.phone}
              onChange={this.handleChange.bind(this)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="switch"
              id="pet-switch"
              label="Ask about pet?"
              checked={this.state.isSearch ? "checked" : null}
              onClick={this.toggleSearch}
            />
            <div className={this.state.isSearch ? null : "hidden"}>
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                name="categorySelect"
                defaultValue={this.state.category || "All categories"}
                onChange={this.handleCategoryChange}
                id="category"
                value={this.state.category}>
                <option>All categories</option>
                {this.state.categoryList.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </Form.Control>
              <div className={this.state.category ? null : "hidden"}>
                <Form.Label>Species</Form.Label>
                <Form.Control
                  as="select"
                  name="speciesSelect"
                  value={this.state.species || "All Species"}
                  onChange={this.handleSpeciesChange}
                  id="species">
                  <option>All Species</option>
                  {this.service
                    .getSpeciesByCategory(this.state.category)
                    .map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                </Form.Control>
              </div>
              <div className={this.state.species ? null : "hidden"}>
                <Form.Label>Breed</Form.Label>
                <Form.Control
                  as="select"
                  name="breedSelect"
                  value={this.state.breed || "All Breed"}
                  onChange={this.handleBreedChange}
                  id="breed">
                  <option>All Breed</option>
                  {this.service
                    .getBreedBySpecies(this.state.species)
                    .map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                </Form.Control>
              </div>
              {!this.state.breed ? null : (
                <div>
                  <Form.Label>Pet Name</Form.Label>
                  <Form.Control
                    as="select"
                    name="petName"
                    value={this.state.petName}
                    onChange={this.handleNameChange}
                    id="petName">
                    <option value={null} disabled selected hidden>
                      Choose the name of the pet...
                    </option>
                    {this.service
                      .getNamesByBreedAndSpecies(
                        this.state.breed,
                        this.state.species
                      )
                      .map((item) => (
                        <option value={item}>{item}</option>
                      ))}
                  </Form.Control>
                </div>
              )}
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Ask something</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              id="message"
              value={this.state.message}
              onChange={this.handleChange.bind(this)}
              required
            />
          </Form.Group>
          <Button variant="outline-light large" block type="submit">
            {buttonText}
          </Button>
        </Form>
      </div>
    );
  }
}

export default Contact;

import React, { Component } from "react";

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: [],
      active: 0
    };

    // If we use normal function
    this.handleIndexClick = this.handleIndexClick.bind(this);
  }

  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  handleIndexClick(e) {
    //this here is window or undefined
    // its not right
    this.setState({ active: +e.target.dataset.index });
  }

  // This of arrow function is this where it is written
  // This of normal function is where it is invoked
  // handleIndexClick = e => {
  //   this.setState({ active: +e.target.dataset.index });
  // };

  render() {
    const { photos, active } = this.state;
    console.log(photos);
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

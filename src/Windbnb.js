import React, { useState } from "react";
import data from "./files/stays.json";
import {
  FaStar,
  FaSearch,
  FaTimes,
  FaMapMarkerAlt,
  FaRegMinusSquare,
  FaRegPlusSquare,
} from "react-icons/fa";
import { Link } from "react-scroll";

export const Windbnb = () => {
  const [stays, setStays] = useState(data);
  const [isModalOpan, setIsModalOpen] = useState(false);
  const [location, setLocation] = useState([]);
  const [guests, setGuests] = useState(0);
  const [adult, setAdult] = useState(0);
  const [searchActive, setSearchActive] = useState(true);
  const [children, setChildren] = useState(0);

  const handleAdultAdd = () => {
    setAdult(adult + 1);
    setGuests(guests + 1);
  };
  const handleAdultSub = () => {
    setAdult(adult - 1);
    setGuests(guests - 1);
  };
  const handleChildrenAdd = () => {
    setChildren(children + 1);
    setGuests(guests + 1);
  };
  const handleChildrenSub = () => {
    setChildren(children - 1);
    setGuests(guests - 1);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpan);
  };

  const filtered = location
    ? stays.filter((stay) => stay.city.toLowerCase().includes(location))
    : stays;

  return (
    <section className="app-container">
      <div className="discover" onClick={handleModal}>
        <div className="locations" onClick={handleModal}>
          <p>Helsinki, Finland</p>
        </div>
        <div className="guests">
          <p>Add guests</p>
        </div>
        <div className="search">
          <FaSearch style={{ color: "rgba(235, 87, 87, 0.72)" }} />
        </div>
      </div>

      <div className="stays-header">
        <h1>{`${location ? `Stays in  ${location}` : "Stays in Finland"}`}</h1>
        <p>12+ stays</p>
      </div>
      <section className="all-stay">
        <div
          className={`${isModalOpan ? "lightbox show-lightbox" : "lightbox"}`}
          onClick={handleModal}
        ></div>
        <div className={`${isModalOpan ? "modal show-modal" : "modal"}`}>
          <div className="modal-nav">
            <p>Edit your search</p>
            <FaTimes onClick={handleModal} />
          </div>
          <div className="inner-search">
            <div
              className="inner-search-location"
              onClick={() => setSearchActive(true)}
            >
              <label htmlFor="location">Location</label>
              <input
                type="text"
                name="location"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div
              className="inner-search-guests"
              onClick={() => setSearchActive(false)}
            >
              <label htmlFor="guests">Guests</label>
              <input
                type="number"
                name="guests"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
          </div>
          <div
            className={`${
              searchActive
                ? "modal-locations show-modal-locations"
                : "modal-locations"
            }`}
          >
            <div
              className="inner-location"
              onClick={() => {
                handleModal();
                setLocation("helsinki");
              }}
            >
              <FaMapMarkerAlt />
              <p>Helsinki, Finland</p>
            </div>
            <div
              className="inner-location"
              onClick={() => {
                setLocation("turku");
                handleModal();
              }}
            >
              <FaMapMarkerAlt />
              <p>Turku, Finland</p>
            </div>
            <div
              className="inner-location"
              onClick={() => {
                setLocation("oulu");
                handleModal();
              }}
            >
              <FaMapMarkerAlt />
              <p>Oulu, Finland</p>
            </div>
            <div
              className="inner-location"
              onClick={() => {
                setLocation("vaasa");
                handleModal();
              }}
            >
              <FaMapMarkerAlt />
              <p>Vaasa, Finland</p>
            </div>
          </div>

          <div
            className={`${
              searchActive ? "guest-num" : "show-guest-num guest-num"
            }`}
          >
            <div className="num">
              <h1>Adults</h1>
              <p>Ages 13 or above</p>
              <div className="num-size">
                <FaRegMinusSquare onClick={handleAdultSub} />
                <p>{adult}</p>
                <FaRegPlusSquare onClick={handleAdultAdd} />
              </div>
            </div>
            <div className="num">
              <h1>Children</h1>
              <p>Ages 2 - 12</p>
              <div className="num-size">
                <FaRegMinusSquare onClick={handleChildrenSub} />
                <p>{children}</p>
                <FaRegPlusSquare onClick={handleChildrenAdd} />
              </div>
            </div>
          </div>

          <button className="btn" onClick={handleModal}>
            <FaSearch /> Search
          </button>
        </div>

        {filtered.map((stay) => {
          const {
            city,
            country,
            superHost,
            title,
            rating,
            maxGuests,
            type,
            beds,
            photo,
            id,
          } = stay;
          return (
            <div key={id} className="stays">
              <img src={photo} alt="" id="photos" />
              <div className="stay-details">
                <span className={`${superHost ? "super-host" : "hide-super"}`}>
                  {superHost ? "SUPER HOST" : ""}
                </span>
                <p>{type}</p>
                <p>{`${
                  beds && beds > 1
                    ? beds + " beds"
                    : beds && beds === 1
                    ? beds + " bed"
                    : ""
                }`}</p>
                <div className="ratings">
                  <FaStar style={{ color: "#EB5757", fontSize: "15px" }} />
                  <p>{rating}</p>
                </div>
              </div>
              <div>
                <h1 id="title">{title}</h1>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

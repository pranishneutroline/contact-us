import React from "react";
import Card from "./Card";
import { IconContext } from "react-icons";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaRegBuilding } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import "./cards.css";

function Cards() {
  return (
    <div className="card-container">
      <h1>Get in Touch</h1>
      <p>Want to find out more about our company? Let's talk.</p>
    <div className="cards-section">
      
      <IconContext.Provider value={{ className: "card-icons" }}>
        <Card
          icon={<HiOutlineMail />}
          heading="Email"
          desc="info@neutroline.com"
        />
        <Card
          icon={<AiOutlineClockCircle />}
          heading="Working hours"
          desc="Open Sunday to Friday" 
          desc_opt="10:00AM - 6:00PM"
          className="mt-3"
        />
        <Card
          icon={<FaRegBuilding />}
          heading="HeadQuarters"
          desc="Shitalnagar, Devdaha-7," 
          desc_opt="Rupandehi, Nepal"
        />
        <Card
          icon={<BsChatDots />}
          heading="Live Chat"
          desc="Live Chat with our"
          desc_opt="company 24 * 7"
        />
      </IconContext.Provider>
    </div>
    </div>
  );
}

export default Cards;

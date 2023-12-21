import React from "react";
import DaySection from "../components/DaySection";
import { Ceremony } from "../components/Ceremony";
import Guests from "../components/Guests";
import { ConfirmAssist } from "../components/ConfirmAssist";
import { DressCode } from "../components/DressCode";
import { Instagram } from "../components/Instagram";
import { Information } from "../components/Information";
import { Welcome } from "../components/Welcome";

const Classic = ({ name1, name2, invitationStyle }) => {
  return (
    <>
      <Welcome invitationStyle={invitationStyle} name1={name1} name2={name2} />
      <DaySection invitationStyle={invitationStyle} />
      <Ceremony invitationStyle={invitationStyle}/>
      <Guests invitationStyle={invitationStyle}/>
      <ConfirmAssist />
      <DressCode />
      <Instagram />
      <Information />
    </>
  );
};

export default Classic;

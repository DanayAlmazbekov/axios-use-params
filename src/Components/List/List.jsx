import React, { useEffect } from "react";
import ContactCard from "../Card/Card";

const List = ({ getContacts, contacts, deleteContact }) => {
  // console.log(products);
  useEffect(() => {
    getContacts();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}>
      {contacts.map(item => (
        <ContactCard key={item.id} item={item} deleteContact={deleteContact} />
      ))}
    </div>
  );
};

export default List;

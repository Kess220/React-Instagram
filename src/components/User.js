import React, { useState } from "react";

function User() {
  const [username, setUsername] = useState("catanacomics");
  const [imageUrl, setImageUrl] = useState("assets/img/catanacomics.svg");

  const handleEditClick = () => {
    const newUsername =
      prompt("Digite o novo nome de usuário:", username) || username;
    setUsername(newUsername);
  };

  const editImg = () => {
    const newImageUrl =
      prompt("Digite o link da nova imagem:", imageUrl) || imageUrl;

    setImageUrl(newImageUrl);
  };

  return (
    <div className="usuario">
      <img
        data-test="profile-image"
        onClick={editImg}
        src={imageUrl}
        alt="imagem de perfil"
      />
      <div data-test="name" className="texto">
        <span>
          <strong>{username}</strong>
          <ion-icon
            data-test="edit-name"
            className="edit"
            name="pencil"
            onClick={handleEditClick}
          ></ion-icon>
        </span>
      </div>
    </div>
  );
}

export default User;

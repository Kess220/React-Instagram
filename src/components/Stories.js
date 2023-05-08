import React from "react";

import Posts from "./Posts";
import SideBar from "./SideBar";

function Storys() {
  const nomes = ["meowed", "barked", "respondeai", "wawawicomics"];

  const imagens = {
    barked: "assets/img/barked.svg",
    meowed: "assets/img/meowed.svg",
    respondeai: "assets/img/respondeai.svg",
    wawawicomics: "assets/img/wawawicomics.svg",
  };

  return (
    <>
      <div className="corpo">
        <div className="esquerda">
          <div className="stories">
            {nomes.map((nome) => (
              <div className="story" key={nome}>
                <div className="imagem">
                  <img src={imagens[nome]} alt={nome} />
                </div>
                <div className="usuario">{nome}</div>
              </div>
            ))}
            <div className="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>

          <div className="posts">
            <Posts />
          </div>
        </div>
        <SideBar />
      </div>
    </>
  );
}

export default Storys;

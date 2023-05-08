import { useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([
    {
      usuario: "meowed",
      imagemUsuario: "assets/img/meowed.svg",
      imagemPost: "assets/img/gato-telefone.svg",
      curtidoPor: "respondeai e outras ",
      curtidas: 123575,
    },
    {
      usuario: "barked",
      imagemUsuario: "assets/img/barked.svg",
      imagemPost:
        "https://th.bing.com/th/id/R.504318e7ff620d26bac52c1b2d64d50e?rik=2oGY7HtI9pwwIw&pid=ImgRaw&r=0",
      curtidoPor: "adorable_animals e outras ",
      curtidas: 73315,
    },
    {
      usuario: "respondeai",
      imagemUsuario: "assets/img/respondeai.svg",
      imagemPost:
        "https://th.bing.com/th/id/R.8b31a0326ce1e285dc408c9272706948?rik=csBAvW2SjjJU%2bw&pid=ImgRaw&r=0",
      curtidoPor: "meowed e outras",
      curtidas: 80142,
    },
  ]);
  function curtir(index) {
    const novosPosts = [...posts];
    novosPosts[index].curtidas += novosPosts[index].curtiu ? -1 : 1;
    novosPosts[index].curtiu = !novosPosts[index].curtiu;
    setPosts(novosPosts);

    const iconeCoracao = document.querySelector(
      `.post:nth-of-type(${index + 1}) .icone-coracao`
    );

    iconeCoracao.setAttribute("name", "heart");

    if (novosPosts[index].curtiu) {
      iconeCoracao.classList.add("coracao-ativo");
    } else {
      iconeCoracao.classList.remove("coracao-ativo");
    }
  }

  return (
    <>
      {posts.map((post, index) => (
        <div key={index} className="post">
          <div className="topo">
            <div className="usuario">
              <img src={post.imagemUsuario} alt={post.usuario} />
              {post.usuario}
            </div>
            <div className="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div className="conteudo">
            <img
              onDoubleClick={() => curtir(index)}
              className="img-post"
              src={post.imagemPost}
              alt={post.usuario}
            />
          </div>

          <div className="fundo">
            <div className="acoes">
              <div>
                <ion-icon
                  onClick={(e) => {
                    curtir(index);
                  }}
                  name={post.curtiu ? "heart" : "heart-outline"}
                  class="icone-coracao"
                ></ion-icon>

                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon
                  onClick={(event) => {
                    event.target.name =
                      event.target.name === "bookmark"
                        ? "bookmark-outline"
                        : "bookmark";
                  }}
                  name="bookmark-outline"
                  class="bookmark-outline"
                ></ion-icon>
              </div>
            </div>

            <div className="curtidas">
              <img src="assets/img/respondeai.svg" alt="respondeai" />
              <div className="texto">
                Curtido por <strong>{post.curtidoPor}</strong>{" "}
                <strong>{post.curtidas}</strong> pessoas
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Posts;

import React from "react";

import Layout from "../components/Layout/Layout";
import ArtistBio from "../components/ArtistBio/ArtistBio";

const bio = `<p>Laura Gallagher-Doucette is a cofounder of Probably Theatre Collective and co-curator of Probably Poetry performance series. They hold a Master of Divinity from Emmanuel College, a certificate in Creative Writing from Humber College, and a combined-honours in Theatre Studies and Early Modern Studies from the University of King's College. They are pursuing ordination in the United Church of Canada and work as a student minister in Toronto.</p>`;

const LauraGallagherDoucette = () => {
  return (
    <Layout>
      <section>
        <h1>Laura Gallagher-Doucette</h1>
        <div>
          <div>
            <h2>Poem 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam voluptatum voluptatibus commodi porro reiciendis, magni
              quia quaerat odio. Perspiciatis sunt quaerat cum a illum tempore
              provident consequuntur exercitationem, ex, officiis, quas minima
              iure consectetur ut est. Eos, rerum autem totam, natus ducimus
              iste delectus quaerat voluptatum et ipsum culpa quas.
            </p>
          </div>
          <div>
            <h2>Poem 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
              natus dicta enim quo sapiente adipisci dolore quasi eaque rem.
              Autem quod corporis laboriosam quidem repudiandae tempora
              explicabo fugiat nobis soluta harum fugit possimus aliquid officia
              veritatis deleniti nam dignissimos exercitationem pariatur ipsum,
              eum ducimus? Quasi commodi ipsam ex maiores deserunt.
            </p>
          </div>
        </div>
        <div>
          <h3>Accompanying Essay</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            itaque. Recusandae amet impedit illum possimus dolor eveniet
            temporibus facere vel aut quod quasi delectus inventore consequatur
            tempora, enim sed excepturi velit illo accusamus. Aut, veritatis.
            Mollitia aliquam delectus optio dolore tempora, officiis doloribus
            eius a vel nam ipsa labore earum accusantium exercitationem
            excepturi commodi ex inventore, iste enim culpa? Temporibus aliquid
            fugiat quae ducimus laborum, aperiam illum! Consequuntur velit nemo,
            optio quaerat quis voluptas veritatis illo eaque earum minima
            repudiandae id at? Temporibus blanditiis consequuntur quas
            perspiciatis, sint facilis ipsa neque autem dolorem, cumque eos
            itaque laborum ut odit quos. Fugit non aliquam tenetur ipsum ea
            dignissimos similique officia vel eos, optio ut aut impedit odio
            eveniet, beatae molestias, pariatur ab sequi! Cupiditate quia
            dignissimos ullam itaque ipsum, sed vel, possimus architecto ipsam
            commodi hic mollitia necessitatibus natus delectus ipsa eveniet
            aspernatur. Aperiam laborum obcaecati minus ea dolore harum dolorem.
          </p>
        </div>
      </section>
      <ArtistBio bio={bio} />
    </Layout>
  );
};

export default LauraGallagherDoucette;

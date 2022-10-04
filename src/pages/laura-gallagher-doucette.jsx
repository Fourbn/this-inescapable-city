import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import ArtistBio from "../components/ArtistBio/ArtistBio";
import ArtistPageH1 from "../components/ArtistPageH1/ArtistPageH1";

import {
  hero,
  cityPoem,
  lakePoem,
  poemWrapper,
  backgroundImg,
  essaySection,
  citationNum,
  citation,
  annotations,
} from "./laura-gallagher-doucette.module.scss";

const bio = `<p>Laura Gallagher-Doucette is a cofounder of Probably Theatre Collective and co-curator of Probably Poetry performance series. They hold a Master of Divinity from Emmanuel College, a certificate in Creative Writing from Humber College, and a combined-honours in Theatre Studies and Early Modern Studies from the University of King's College. They are pursuing ordination in the United Church of Canada and work as a student minister in Toronto.</p>`;

const LauraGallagherDoucette = ({ data }) => {
  const { artistName, nameImage, images } = data.contentfulArtistPage;
  console.log(images);

  return (
    <Layout>
      <section className={hero}>
        <ArtistPageH1 image={nameImage} name={artistName} />
      </section>
      <section className={cityPoem}>
        <div className={backgroundImg}>
          <div className={poemWrapper}>
            <h2>The City</h2>
            <p>
              There is The City. The City is the same difference. Languages of
              longing. Florid and gleaming through airwaves, buds reblooming,
              lip gloss. Here, leaves underfoot. Autumn or not, outside a
              season, The City edges and drops against the pavement, drops
              against the pavement, and rises crystalline. Here, the curve of
              College Street. Here, Avenue’s straight line.
            </p>
            <p>
              There is the pace of it, cycling, tangled stereos, a speed of
              still time, perfume of mangoes and streetlights, a slice of
              nightlife ripens. There is The City. There is The City. There,
              elevators and cortados. There, linen and walls. The City. Blocks
              and blocks. There it is. There it is. There it is.
            </p>
            <p>
              The City is lush where watered. It is appointments and olives.
              Westbound, eastbound, DVP. Bridge-glimpsed broccoli crowns of
              trees. There are suburban boulevards somewhere, deep and tall with
              oaks. There are mansions. There is air freshener. There is The
              City you can’t afford.
            </p>
            <p>
              Bunches of weather without an awning. There are entirely different
              streets, there are paths, different portals. There are whole
              neighbourhoods back to back, like talkless lovers. There is
              leather. There are driveways. There are peonies like exhausted
              ladies. They undo themselves on the lawn. Here is The City.
            </p>
            <p>
              Bloor, Dixon, Lakeshore, Finch, Dovercourt, Eglinton, Brock. There
              is garbage early in the morning and the click of shoes. The City
              where you least expect it. Efficient, porous, and tilting.
              Directions agenda asphalt.
            </p>
            <p>
              There is always down the street, hydro wires, and your thoughts
              spangling everywhere, yes, everywhere you look. Your thoughts
              shimmer, reminding you, reminding you, of your body here in The
              City’s folds. You live inside The City. Don’t you think to
              yourself,{" "}
              <span className="italics">does The City live in me?</span>
            </p>
            <p>
              The City is and is not itself. You know this. The City is
              tremendous, rebar and rented. You sicken sometimes when you think
              of it. So don’t. There’s not much more to say.
            </p>
            <p>
              Still, the people on the Dufferin bus, the people on the Dufferin
              bus, plastic bags and bangles, someone praying, someone yelling,
              someone else. There, pigeons like a school of fish swirl up the
              sky. There is one copper one. There is one copper one. Murals and
              the smell of exhaust. A pint, a pocket, a plying, a plying, a
              plying at your coat.
            </p>
            <p>
              Cul-de-sacs and crescents, the light of living rooms.
              Temperatures, a desire path, brittle grass underfoot. Starlings,
              seasonally, starlings. Passersby, residential, commercial, you
              sense scent. Wardrobes of it. These routes, sickle and spoil,
              buckles bend in streetcar routes. Instructions fluoresce. A
              transfer.
            </p>
            <p>
              The City is quite something. Alleyway and rivered brick. It
              sticks. This something. Something. In your throat, the edge of
              release, release, the springload of desire. Somewhere, a ravine.
              There, where songbirds embroider. Even there, The City towers.
            </p>
            <p>
              There is a timeless timeless weather, whole days of morning, whole
              days of 3pm. Darkness startles now - you only know the milk-sky of
              smog, the ceiling of light the clouds return to electricity
              nightly.
            </p>
          </div>
        </div>
      </section>
      <section className={lakePoem}>
        <div className={backgroundImg}>
          <div className={poemWrapper}>
            <h2>Lake</h2>
            <p>
              At the base of The City, there is water. At the heart of it, river
              veins.
            </p>
            <p>
              The place, this base, a Lake. Its name holds something of a clue,
              a darkness and collection of sounds in a single syllable: Lake. It
              laps, it shades. Evaporation lingers, the long light slanted heavy
              and gold across your gaze, the sharp light of silver slivering the
              water, a coin, a figment, a fragment. Waves fracture sudden and
              easy, foam and release like a seagull’s cry. Airy and white.
              Tumbling and tearing, specks of itself, it speaks to itself, it
              speaks to itself, it speaks to you, these waves.
            </p>
            <p>
              There is an opening, closing hard around softening blue. Fading
              plumes of afternoon. Evening. There, where the water’s ache finds
              its sooth, it edges over. Sails, smooth, glass and ragged. Lake,
              this place water whispers, unspools, says{" "}
              <span className="italics">stay stay stay</span>, with spray
              drowned out by speed.
            </p>
            <p>
              Clouds translate the water, through interruption, interruption,
              the waves and the waves on the breakwater break the highway’s
              rush. Break its hush. A clatter drifting clouds and clouds and
              your own self carried over the wind. A returning returning.
            </p>
            <p>
              It hardens what it touches. The Lake is by contrast. Lake to
              shore. To Lakeshore. Ice scrapes its still surface and even then,
              the Gardiner. Even then, portraiture. Even then. Even though.
              Picture this. There it hangs. There it is. You have it, it has
              you, gazing, grazing your hair, your jacket, chapped lips. In its
              glazes. Sand hushes plink of pebbles. The silent sound of stones.
            </p>
            <p>
              Night herons, grocery carts, skylines the other side. Billboards
              and air-conditioned air leaking Lakeward. There you are, there, by
              the lake’s side, its breathing body. This body, water. Restless,
              sleepless, still. Wriggling life in waves. There is a lesson here,
              there is a lesson here, you don’t know how to know.
            </p>
            <p>
              This is the Lake we bike to, young and late. This is the Lake
              commuters, tourists, ambulances speed by, stroll by. Asters,
              algae, boulders, trains, construction, construction, over there.
              In here, the lake whispers, sinking, rolling, reaching, riding,
              waves and waves and waves.
            </p>
            <p>
              A Lake that makes the lakeshore what it is. What it is. What it
              is. There it is.
            </p>
          </div>
        </div>
      </section>
      <section className={essaySection}>
        <h2>
          I Thought This Would be an Essay About Gertrude Stein, but is that
          What I Wrote
        </h2>
        <p>
          This past summer, away from this city and this lake, I caught covid. I
          was staying with loved ones, who made me chicken soup and bought me a
          volume of Gertrude Stein called{" "}
          <span className="italics">Look at Me Now and Here I Am.</span> The
          work includes lectures and writings of Stein’s.
        </p>
        <p>
          Fevered, I couldn’t focus. I couldn’t find my way into much of the
          work, but the portraits Stein made of her friends, Picasso and
          Matisse, caught my attention. I wanted to make portraits of Lily,
          Miranda, and Anne (the makers of soup and buyers of Stein).
        </p>
        <p>
          And so I made their portraits one day while they were out, an
          automatic sort of writing that still seemed to stir something for
          them, the readers. (Perhaps that is always the case when it is a
          portrait of oneself.)
        </p>
        <p>
          The City and Lake made less automatic subjects. This surprised me; we
          at Probably have been, in a sense, making portraits of The City and
          Lake for the five years of our existence. In fact, in all the work we
          have collectively compiled, The City and Lake have been the scenes and
          characters we’ve attempted to offer our audiences, again and again. We
          have tried to tell the same story another way, another time for
          another group.{" "}
          <span className="italics">This is the same story but different</span>,
          said the characters of{" "}
          <span className="italics">Underwater Overwater</span>,
          <span className={citationNum}>1</span>{" "}
          interrupting and clarifying, contradicting and complementing each
          other, weaving past and future into a present tense, some glimpse of
          this place, some impression.
        </p>
        <p>
          Here again, the same story but different. I’ve tried to make The City
          and Lake fit into momentary scales. There is The City. There’s the
          Lake. In little letters, black and white. Maybe even, in your mind’s
          eye.
        </p>
        <p>
          I thought this would be an essay about Gertrude Stein. It doesn’t seem
          to me. Yet: let me briefly say of her lectures on portraits I read
          once rid of fever…
        </p>
        <p>
          Stein insists there is no repetition, no such thing as repetition;
          there is only insistence.<span className={citationNum}>2</span> She
          insists with great emphasis in her lecture, insisting with the word
          insisting again and again. She says,{" "}
          <span className="quote">
            No matter how often what happened had happened any time any one told
            anything there was no repetition.
          </span>
          <span className={citationNum}>3</span> And this, she emphasizes, is
          how portraits are made: portraits are not repetition of the subject
          they depict. They are themselves.
          <span className={citationNum}>4</span> Stein writes that{" "}
          <span className="quote">
            in order to [make a portrait] there must be no remembering,
            remembering is repetition, remembering is also confusion.
          </span>
          <span className={citationNum}>5</span> Insistence–insistence–on the
          other hand, is clarity.
        </p>
        <p>
          Insistence is genius: it is listening and talking at once: two in one
          and one in two.<span className={citationNum}>6</span>
        </p>
        <p>
          For Stein, nothing changes, but there is emphasis, which is movement.
          <span className={citationNum}>7</span>{" "}
          We recognize existence by its movement, and so, for the portrait to
          exist, to exist with emphasis and live, it must contain no repetition,
          which is confusion and memory.
        </p>
        <p>
          I think, perhaps, the reason why these portraits, these portraits of
          The City and Lake were not so automatic was how much I felt I needed
          to remember in order to write them for you. A whole childhood of this
          city. A poetry of lakewater. Some system. Inescapable amounts.
        </p>
        <p>
          Because so much of what I look out at in The City are places loss
          took. I want the losses of this city recorded. I want to measure what
          is gone, what will be gone, what has been gone.
        </p>
        <p>(And the lake, the lake, the lake.)</p>
        <p>
          <span className="quote">
            Is there repetition or is there insistence.
          </span>
          <span className={citationNum}>8</span>
        </p>
        <p>
          Do any of these fragments–mine, yours, theirs on these other
          pages–repeat anything or do they insist. The City and Lake. There it
          is. There they are. There.{" "}
        </p>
        <p>Lost, returning, tidal, vibrant, present in collapse.</p>
        <p>
          Two in one and one in two, moving, genius, gone. Reappearing. As in a
          dream.
        </p>
        <p>Fevered, automatic, elsewhere.</p>
        <div className={annotations}>
          <ol>
            <li>
              <span className={citation}>
                <span className="quote">
                  <span className="italics">
                    No matter how often you tell the same story if there is
                    anything alive in the telling the emphasis is different
                  </span>
                  ,
                </span>{" "}
                (emphasis mine) says Stein (Getrude Stein,{" "}
                <span className="quote">Portraits and Repetition,</span> in{" "}
                <span className="italics">Look at Me Now and Here I Am</span>,
                ed. Patricia Meyerowitz (Middlesex: Penguin Books, 1967), 100).
              </span>
            </li>
            <li>
              <span className={citation}>
                Stein, <span className="italics">ibid</span>, 101
              </span>
            </li>
            <li>
              <span className={citation}>
                Stein, <span className="italics">ibid</span>, 101
              </span>
            </li>
            <li>
              <span className={citation}>
                Interestingly, Stein notes that a portrait is, in a sense, two
                things (its subject and itself). She describes this as{" "}
                <span className="quote">a bother,</span>{" "}
                but does not dwell on it. (Stein,{" "}
                <span className="italics">ibid</span>, 105).
              </span>
            </li>
            <li>
              <span className={citation}>
                Stein, <span className="italics">ibid</span>, 106
              </span>
            </li>
            <li>
              <span className={citation}>
                Stein, <span className="italics">ibid</span>, 108
              </span>
            </li>
            <li>
              <span className={citation}>
                Stein, <span className="italics">ibid</span>, 97
              </span>
            </li>
            <li>
              <span className={citation}>
                Stein, <span className="italics">ibid</span>, 100
              </span>
            </li>
          </ol>
        </div>
      </section>
      <ArtistBio bio={bio} />
    </Layout>
  );
};

export default LauraGallagherDoucette;

export const query = graphql`
  query {
    contentfulArtistPage(slug: { eq: "laura-gallagher-doucette" }) {
      artistName
      nameImage {
        gatsbyImageData
        description
      }
      images {
        url
      }
    }
  }
`;

export { Head } from "../components/Head/Head";

import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/Layout";
import ArtistBio from "../components/ArtistBio/ArtistBio";
import ArtistPageH1 from "../components/ArtistPageH1/ArtistPageH1";

import {
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

  return (
    <Layout>
      <ArtistPageH1 image={nameImage} name={artistName} />
      <section className={cityPoem}>
        <div className={backgroundImg}>
          <div className={poemWrapper}>
            <h2>The City</h2>
            <p>
              There is The City. Ragged and neat. There it is. Concrete, chrome.
              Glasses, glances, drinks, and languages. Longing. Gleaming,
              reblooming, lip gloss. Airwaves, quick. Nails scraping. Here,
              leaves underfoot. Autumn or not, outside a season, The City edges
              and drops against the pavement. It rises crystalline. Here, the
              curve of College Street. Here Avenue’s straight line.
            </p>
            <p>
              There is the pace of it, cycling. Tangled stereos, a speed of
              still time, perfume of mangoes and streetlights. A slice of
              nightlife ripens. There is The City. There is The City. There,
              elevators and cortados. There, linen and walls. The City. Blocks
              and blocks. There it is. There it is. There it is.
            </p>
            <p>
              The City is parched and lush. Appointments, olives. Westbound,
              eastbound, DVP. The crowns of bridge-glimpsed trees. There are
              suburban boulevards somewhere, catalpas deep and tall.
            </p>
            <p>
              There are bunches of weather without awnings. There is beauty
              pressed and pressed for time. Entirely different streets and there
              are paths, different portals. Whole neighbourhoods stacked back to
              back like talkless lovers. There is leather. There are driveways.
              There are peonies like magenta taffeta undoing themselves on
              lawns.
            </p>
            <p>
              There is Bloor, Dixon, Lakeshore, Finch, Dovercourt, and Brock.
              There is the click of shoes here again and again and The City.
              Here, where you least expect it. Handfuls of underpass. Tufts of
              seeded burrs beneath hydro wires, beneath sky. Porous and tilting,
              The City edges in, dealing in efficiencies, directions, agenda,
              asphalt.
            </p>
            <p>
              There is always down the street. Your thoughts spangled
              everywhere, yes, everywhere you look. They shimmer, reminding you,
              reminding you, of your body neat in The City’s folds. Your coat
              buttoned against October and still the brightness of Dahlias, the
              tenacity of oak leaves. Against the train tracks, beneath the arch
              of Dundas, the poplars rustle and rustle.
            </p>
            <p>
              You know The City is, is not, itself. The City is tremendous,
              rented, rebar. You sicken sometimes when you think of it. The way
              The City swallows, is swallowed. Don’t think of the figures.
              Don’t. Still, the people on the Dufferin bus, the people on the
              Dufferin bus, plastic bags and bangles. Someone praying, someone
              yelling, someone else. There, pigeons like a school of fish swirl
              up the sky. There is one copper one. There is one copper one.
              Murals and the smell of exhaust.
            </p>
            <p>
              Cul-de-sac crescents, the light of living rooms. Starlings,
              seasonally, starlings. Passersby and their wardrobes, their gazes,
              their cups of coffee. There are these routes that sickle and
              spoil, spool and undo you. Buckles bend in streetcar lines.
              Instructions fluoresce. And transfer.
            </p>
            <p>
              The City is quite something. Rivers brick. Goldenrod, stands of
              aster. Cedar and the smell of santo palo. Whole days of morning.
              Whole days 3pm. Somewhere, a ravine. There, where songbirds
              embroider. Even there, The City towers.
            </p>
            <p>
              Something sticks in your throat. You have swallowed accumulation.
              And though you feel the edge of release, the edge of release, The
              City doesn’t. Darkness startles now. You only know the milk-sky of
              smog, the ceiling of light that the clouds return to electricity
              nightly. There is no time like the present and it presses its
              point into you. There is a kind of beauty here. There it is. You
              can feel it. You can touch.
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
              <br />
              This place, this base, a Lake.
              <br />
              Its name holds something of a clue. A darkness and collection of
              sounds.
            </p>
            <p>
              In a single syllable.
              <br />
              Laps and shades. Evaporates and lingers. The long light slants
              heavy gold across your gaze.
              <br />
              The sharp light of silver slivers the water, a coin, a fragment.
              <br />
              Waves fracture sudden and easy, foam and release, foam and
              release, the cry of a gull.
              <br />
              Airy and white. Tumbling and tearing, specks of itself, it speaks
              to itself, it speaks to itself.
              <br />
              Opening and closing hard around softening blue. Fading plumes of
              afternoon. Evening. There, where the water’s ache finds its
              soothe. It edges over.
              <br />
              Sails, smooth, glass and rugged. Lake, this place water whispers,
              unspools to the highway’s rush.
            </p>
            <p>
              Do you see yourself? Wind palming your back. By comparison your
              jean jacket, untrue to colour. Here where taupe, grey, lavenders,
              the beginning of blue, the shade of sunlight.
            </p>
            <p>
              Clouds translate the water, through interruption, interruption.
              The waves and the waves on the breakwater break the smoothness of
              commuting. A clatter of clouds cloud your impression of this
              place.
            </p>
            <p>
              Night herons, grocery carts, skylines brilliant with daybreak.
              Billboards and the leak of air-conditioned air outside. There you
              are. There, by the lake’s rippling side. There you are by her
              breathing body. Water. Restless, sleepless, still. Wriggling life
              in waves. There is a lesson here, a lesson here, you don’t know
              how to know.
            </p>
            <p>
              The Lake is by contrast. It hardens what it touches.
              <br />
              Lake to shore. To Lakeshore. Ice scrapes its still surface and
              even then, the Gardiner.
              <br />
              Even then, an image, moving. Even then. Even though. There it
              hangs. Picture this.
              <br />
              There it is. You have it. It has you.
            </p>
            <p>
              Gazing, grazing your hair, your hands, your lips chapped and
              speechless. In its glazes.
              <br />
              Sand hushes pebbles. The plink of stones. These silent sounds,
              moving and mauve. All that won’t lend itself to collection stuffed
              in your pockets like you could take this freedom home and hand it
              to someone you love. Beer bottle brown smothered smooth.
            </p>
            <p>
              Here, algae, cranes, the river mouths.
              <br />
              In here, the lake whispers. Sinking, rolling, reaching, riding,
              waves and waves and waves.{" "}
              <span className="italics">I wish you knew how to answer</span>,
              you think, barely noticing you’re reabsorbed already. Back in The
              City. Still, some part of you, tidal, ebbs south always. To the
              tug of what makes The City what it is. Its open border. An
              unmistakable body. Flowing hard against all this work.
            </p>
          </div>
        </div>
      </section>
      <section className={essaySection}>
        <h2>
          I Thought This Would be an Essay About Gertrude Stein, but is that
          What I Wrote: <span>a reflection of these poems?</span>
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
          automatic sort of writing, tumbled words. These portraits seemed to
          stir something for them, the readers, and so, with{" "}
          <span className="italics">This Inescapably City</span> on the horizon
          I thought, “great, I have a form for my piece. These portraits work.”
          (Though perhaps this feeling of something stirred is always the case
          when one “sees” a portrait of oneself.)
        </p>
        <p>
          But The City and Lake made less automatic subjects. This surprised me;
          we at Probably have been, in a sense, making portraits of The City and
          Lake for the five years of our existence. In fact, in all the work we
          have collectively compiled, The City and Lake have been the scenes and
          characters we’ve attempted to offer our audiences. We have tried to
          cast these same characters another way another time for another group
          again and again.{" "}
          <span className="italics">This is the same story but different</span>,
          said the characters of{" "}
          <span className="italics">Underwater Overwater</span>,
          <span className={citationNum}>1</span> interrupting and clarifying,
          contradicting and complementing each other as they wove past and
          future into a present tense, grasping some glimpse of this place.
        </p>
        <p>
          Here again, the same story but different. I’ve tried to make The City
          and Lake fit into momentary scales. There is The City. There’s the
          Lake. In words on a screen. Hopefully also in your mind’s eye, with
          words or wordlessly, some impression of where you are has formed.
        </p>
        <p>
          I thought this would be an essay about Gertrude Stein. It doesn’t seem
          to be. Yet: let me briefly say of her lectures on portraits I read
          once the fever left me.
        </p>
        <p>
          Stein insists there is no repetition, no such thing as repetition;
          there is only insistence.<span className={citationNum}>2</span> She
          insists with great emphasis in her lecture, insisting with the word
          “insisting” again and again. She says,{" "}
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
          <span className={citationNum}>5</span> Insistence–
          <span className="italics">insistence</span>–on the other hand, is
          clarity.
        </p>
        <p>
          Insistence is genius: it is listening and talking at once: two in one
          and one in two.<span className={citationNum}>6</span>
        </p>
        <p>
          For Stein, nothing changes, but there is emphasis, which is movement.
          <span className={citationNum}>7</span> We recognize existence by its
          movement, and so, for the portrait to exist, to exist with emphasis
          and live, it must contain no repetition, which is confusion and
          memory.
        </p>
        <p>
          I think, perhaps, the reason why these portraits, these portraits of
          The City and Lake were not so automatic was how much I felt I needed
          to remember in order to write them: a whole childhood of this city, a
          poetry of lakewater. Some system, inescapable amounts.
        </p>
        <p>
          When I look out at The City, so much of what I want to reassemble is
          what I no longer see: I want the losses of this city recorded, I want
          to capture its changes, perhaps in some attempt to halt something. I
          want to measure what is gone, what will be gone, what has been gone.
          Surely this is memory. Stein would say then, I am wading into
          confusion. I am not giving what is living.
        </p>
        <p>
          And the Lake. The Lake. The Lake.{" "}
          <span className="quote">
            Is there repetition or is there insistence.
          </span>
          <span className={citationNum}>8</span>
        </p>
        <p>
          Do any of these fragments–mine, yours, all collected here–repeat
          anything or do they insist. The City and Lake.
        </p>
        <p>
          There it is. There they are. There. Lost, returning, tidal, vibrant,
          present in collapse.{" "}
        </p>
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
                <span className="quote">a bother,</span> but does not dwell on
                it. (Stein, <span className="italics">ibid</span>, 105).
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

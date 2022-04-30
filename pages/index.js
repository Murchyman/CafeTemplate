/*
    You are a worthless, bitch ass nigga. Your life literally is as valuable as a summer ant. I'm just gonna stomp you and you're gonna keep coming back, imma seal up all my cracks, you're gonna keep coming back. Why? Cause you smellin the syrup. You worthless bitch ass nigga.

    You gonna stay on my dick until you die. You serve no purpose in life. Your purpose in life is to be on my stream sucking on my dick daily. Your purpose in life is to be in that chat blowing the dick daily.

    Your life is nothing, you serve zero purpose.

    You should kill yourself, NOW.

    And give somebody else a piece of that oxygen, and ozone layer, that's covered up so that we can breathe inside this blue trash bubble.

    Cause what are you here for? To worship me? Kill yourself. I mean that, with a 100%, with a 1000%. I've never seen somebody so worthless in my life. Im deadass. I've not seen such a more worthless nigga, in my life.

    If he has kids? Oh my god, Imagine if a nigga like that has kids. Like imagine. Imagine if somebody like that actually has kids. I would feel so sorry for his children cause the nigga literally serves no fucking purpose.

    Imagine a father, now we got lots of niggas with, wives and kids and shit that suck my dick daily on the internet. But imagine if this nigga actually had children. This nigga is devoting the time he could be spending with his kids, checking out a black man on stream, cucking over him relentlessly. It's crazy.

    I've never seen someone so relentless to be seen. Somebody, somebody, somebody's value so worthless that they'll come into a fucking stream, and keep coming in this bitch over and over and over and over and over and over again. We keep banning you. Nigga let me, let me, let's do you a favor.

    Let's go to the 99-cent store, let's pick out a rope together. I'm gonna give you an assisted suicide. Let's pick out a rope together right, and we're gonna take all the greatest troll clips, put a TV screen right in front of you. Im gonna hang that rope on top of the motherfucking garage.

    We're gonna force feed you. Pry your eyes open. Probably dont need to do that cause you're already on my dick daily. We're gonna pry your eyes open, until you consistenly watch clips over and over and over and over and over again. Till you're gonna be like "oh this is fucking torture". You're gonna start going crazy, you're gonna start feeling crazy. Just, your eyes are gonna bleed, the retinas are gonna just start pouring out, pouring out blood and crack open veins, and the reitnas are just going to start engaging and bulging.

    Then im gonna grab that rope and say are you ready? And you're gonna say yes and im just gonna PULL IT. While you BEG me, BEG me and I mean BEG me to kill you. And choke you, choke the worthless life out of your sorry ass.
*/

import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuItem from "../components/MenuItem";
import MenuNav from "../components/MenuNav";
import globalStyles from "../styles/global.js";
import HomeModule from "../styles/HomeModule";
import Menu from "../components/Menu";
import useFetch from "../hooks/useFetch";
export default function Home() {
  const { data: RawJSON, loading } = useFetch(process.env.NEXT_PUBLIC_S3URL);


  const retrieveMenuSection = (section) => {
    return section?.map((item, index) => {
      return (
        <div key={index + "maindiv"}>
          {/* would prefer it if this did not exist when not being displayed  */}
          <h1 key={"h1" + index} className="menuHeading">
            {item?.Heading}
          </h1>
          <MenuItem
            key={index}
            keynum={index}
            ItemName={item?.ItemName}
            ItemDescription={item?.ItemDescription}
            ItemPrice={item?.ItemPrice}
          />
        </div>
      );
    });
  };

  //retrieve a JSON doc containing the menu, deliniated by menu section, pass each array into it's own state.


  return (
    <>
      <style jsx global>
        {globalStyles}
      </style>

      {/* //if data is not loaded don't display unpopulated menu */}
      <style jsx>{`
        .menuContainer {
          ${loading ? "display: none;" : ""}
        }
      `}</style>
      <style jsx>{HomeModule}</style>


      <div className="container">
        <div className="main">
          <p>
            160 Mudjimba Beach Road - phone{" "}
            {process.env.NEXT_PUBLIC_PhoneNumber}
          </p>
          <div className="hero">
            <div className="heading">
              <p>{process.env.NEXT_PUBLIC_Name}</p>
              <p>{process.env.NEXT_PUBLIC_HeroSubtitle}</p>
            </div>

            <div className="subHeading">
              <p>OPEN FOR DINE IN AND TAKEOUT</p>
            </div>

            <div className="heroText">
              <p>{process.env.NEXT_PUBLIC_heroText}</p>
            </div>

            <div className="button">
              <Button
                href={"tel:" + process.env.NEXT_PUBLIC_PhoneNumber}
                fullWidth
                size="large"
                variant="contained"
                endIcon={<ArrowForwardIcon />}
              >
                CONTACT US NOW
              </Button>
            </div>
            <div className="times">
              <span>TODAY&apos;S HOURS</span>
              <br />
              <br />

              {/*the 2nd(1st) index of the array is an array of elements, each of the 2nd dimention elements contains the times the store is open on the day of the week which the index corrosponds to
        IE 0 = Sunday = the time the store is open on Sunday
        It is important to note that we start on Sunday not monday */}

              <span>{RawJSON?.[1]?.[new Date().getDay()]}</span>
            </div>
            <div className="heroFoot">
              <a href="#Info" className="rowItem">
                CATERING
              </a>
              <a href="#Info" className="rowItem">
                TIMETABLE
              </a>
              <a href="#Info" className="rowItem">
                EVENTS
              </a>
              <a href="#Info" className="rowItem">
                RESERVATIONS
              </a>
            </div>
          </div>
          <div className="menuContainer">
            <div className="MenuNav">
              <MenuNav Menu={RawJSON?.[0]} />
            </div>
            <div className="menu">
              {/* the first (0th) index of the array is the menu, and the 2nd dimention elements are the section of the menu */}
              {/* we retrieve the menu sections then pump them into a map that returns react elements, used as props in the component */}
              <Menu
                MenuSection1={retrieveMenuSection(RawJSON?.[0]?.[0])}
                MenuSection2={retrieveMenuSection(RawJSON?.[0]?.[1])}
                MenuSection3={retrieveMenuSection(RawJSON?.[0]?.[2])}
                MenuSection4={retrieveMenuSection(RawJSON?.[0]?.[3])}
                // the second (1st) index of the array is the time table, passed into the component
                OpenHours={RawJSON?.[1]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

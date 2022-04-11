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

import Head from "next/head";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuItem from "../components/MenuItem";
import { useEffect, useState } from "react";
import MenuNav from "../components/MenuNav";
import globalStyles from "../styles/global.js";
import HomeModule from "../styles/HomeModule";
import Menu from "../components/Menu";
export default function Home() {
  const [hours, setHours] = useState("");

  //This is really fucking stupid.....
  //Basicaly, the menu nav has an undefined error because it's trying to access a third dimensional element but before the program reads the s3 bucket it's undefined.
  //so it throws an error, thus I initialise the state and having a null element at [0][0] so it doesn't throw an error...... god help me.
  //I also have empty elements at each of the other four indexes for the other menu headings.
  //this is so messy and I'm sure I'll read this in a year with a better understanding of asyncronous programming and laugh my head off at the retardation.
  const [RawJSON, setRawJSON] = useState(
    [[[[]], [[]], [[]], [[]]]],
    [[], [], [], [], [], [], []]
  );

  //need to find a way to do this so that I can have an undefined amount of sections, IE one section 100 sections
  //I need to make it programatic in that way rather than manualy defining each section and having an empty section at the end that makes me want to scream.
  const [MenuSection1, setMenuSection1] = useState([]);
  const [MenuSection2, setMenuSection2] = useState([]);
  const [MenuSection3, setMenuSection3] = useState([]);
  const [MenuSection4, setMenuSection4] = useState([]);
  const [TimeTable, setTimeTable] = useState([]);
  //prevents pop in by displaying nothing before data is loaded
  var [MenuIsLoaded, setMenuIsLoaded] = useState(false);
  useEffect(() => {
    //Looks up the s3 JSON file and perpetuates the data throughout the program, read function for more deets
    sendQuery();
  }, []);

  const retrieveMenuSection = (section) => {
    return section.map((item, index) => {
      return (
        <div key={index + "maindiv"}>
          {/* would prefer it if this did not exist when not being displayed  */}
          <h1 key={"h1" + index} className="menuHeading">
            {item.Heading}
          </h1>
          <MenuItem
            key={index}
            keynum={index}
            ItemName={item.ItemName}
            ItemDescription={item.ItemDescription}
            ItemPrice={item.ItemPrice}
          />
        </div>
      );
    });
  };

  //retrieve a JSON doc containing the menu, deliniated by menu section, pass each array into it's own state.
  const sendQuery = () => {
    fetch(
      // add to env variable
      process.env.S3URL
    )
      .then((res) => res.json())
      .then((data) => {
        //used by the navigator side bar
        setRawJSON(data);
        //would like to refactor this to work independantly of the actual number of sections rather than hard coded as I have done today
        //Sends each section to it's own state which is then passed to the menu component and displayed there-in
        setMenuSection1(retrieveMenuSection(data[0][0]));
        setMenuSection2(retrieveMenuSection(data[0][1]));
        setMenuSection3(retrieveMenuSection(data[0][2]));
        setMenuSection4(retrieveMenuSection(data[0][3]));
        setTimeTable(data[1]);
        //prevents pop in of menu when page loads
        setMenuIsLoaded(true);
        const day = new Date().getDay();
        //the 2nd(1st) index of the array is an array of elements, each of the 2nd dimention elements contains the times the store is open on the day of the week which the index corrosponds to
        //IE 0 = Sunday = the time the store is open on Sunday
        //It is important to note that we start on Sunday not monday
        setHours(data[1][day]);
      });
  };

  return (
    <>
      <style jsx global>
        {globalStyles}
      </style>
      <style jsx>{`
        .menuContainer {
          margin-top: 2em;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          width: 100%;
          height: 100%;
          //if data is not loaded display nothing
          ${MenuIsLoaded ? "" : "display: none;"}
        }
      `}</style>
      <style jsx>{HomeModule}</style>

      <Head>
        <title>{process.env.Name}</title>
        <meta name="description" content={process.env.WebDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="main">
          <p>
            {" "}
            {process.env.test}
            160 Mudjimba Beach Road - phone {process.env.PhoneNumber}
          </p>
          <div className="hero">
            <div className="heading">
              <p>{process.env.Name}</p>
              <p>{process.env.HeroSubtitle}</p>
            </div>

            <div className="subHeading">
              <p>OPEN FOR DINE IN AND TAKEOUT</p>
            </div>

            <div className="heroText">
              <p>{process.env.heroText}</p>
            </div>

            <div className="button">
              <Button
                href={"tel:" + process.env.PhoneNumber}
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
              <span>{hours}</span>
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
              <MenuNav Menu={RawJSON[0]} />
            </div>
            <div className="menu">
              <Menu
                MenuSection1={MenuSection1}
                MenuSection2={MenuSection2}
                MenuSection3={MenuSection3}
                MenuSection4={MenuSection4}
                OpenHours={TimeTable}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

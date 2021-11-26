import LayoutWithHeaderBar from "@/layouts/LayoutWithHeaderBar";
import { Box, Grid, ButtonBase } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import bg2 from "@/assets/svg/bg2.svg";
import bg3 from "@/assets/svg/bg3.svg";

import Image from "next/image";
import ourStory from "@/assets/svg/ourstory.svg";
import ourVision from "@/assets/svg/ourvision.svg";

import maleModal from "@/assets/svg/male.svg";
import femaleModal from "@/assets/svg/female.svg";

import fbIcon from "@/assets/images/fb_icon.png";
import igIcon from "@/assets/images/ig_icon.png";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 160,
  },
  comingSoonContainer: {
    marginTop: "calc((100vh - 94px) / 5)",
    textAlign: "center",
  },
  comingSoonTxt: {
    fontWeight: 700,
    fontSize: 144,
    lineHeight: "140px",
  },
  helloContainer: {
    textAlign: "center",
    padding: "0 194px",
  },
  helloTxt: {
    fontWeight: 700,
    fontSize: 55,
    lineHeight: "82.5px",
  },
  descriptionTxt: {
    fontSize: 15,
    fontWeight: 400,
    lineHeight: "30px",
  },
  bg2: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  secondPage: {
    padding: "4% 8%",
  },
  ourStory: {
    fontWeight: 700,
    fontSize: 55,
    lineHeight: "60px",
    marginTop: 0,
    marginBottom: 0,
    top: 30,
    left: 15,
    position: "absolute",
  },
  ourVision: {
    fontWeight: 700,
    fontSize: 55,
    lineHeight: "60px",
    top: -10,
    left: 15,
    position: "absolute",
  },
  bg3: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
}));

const ComingSoon = () => {
  const classes = useStyles();
  // return null
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <LayoutWithHeaderBar>
                <Box sx={{ flexGrow: 1 }}>
                  <p className={classes.comingSoonContainer}>
                    <span className={classes.comingSoonTxt}>Coming</span>
                    <br />
                    <span className={classes.comingSoonTxt}>Soon</span>
                  </p>
                </Box>
              </LayoutWithHeaderBar>
              <div className={classes.bg2}>
                <Image src={bg2} alt="background_2" />
              </div>
            </div>
            <div className="section">
              <Grid container spacing={2} className={classes.secondPage}>
                <Grid item md={7}>
                  <div style={{ position: "relative" }}>
                    <Image src={ourStory} alt="our_story" />
                    <span className={classes.ourStory}>
                      Our
                      <br />
                      story
                    </span>
                  </div>
                  <p
                    style={{
                      width: "31%",
                      marginTop: -30,
                      position: "absolute",
                    }}
                  >
                    Planté is a service business with the mission to cultivate
                    green living habits in urban areas. Through implementing
                    innovative technologies, we aim to give customers a simple
                    and
                    <br />
                    compelling planting experience. Everyone can start their own
                    garden!
                  </p>
                  <div
                    style={{
                      textAlign: "right",
                      position: "absolute",
                      bottom: 50,
                      marginLeft: 20,
                    }}
                  >
                    <Image src={femaleModal} alt="female_modal" />
                  </div>
                </Grid>
                <Grid item md={5}>
                  <div style={{ textAlign: "right", position: "relative" }}>
                    <Image src={maleModal} alt="our_story" />
                  </div>
                  <div style={{ marginTop: -60, position: "relative" }}>
                    <Image src={ourVision} alt="our_vision" />

                    <span className={classes.ourVision}>
                      Our
                      <br />
                      vision
                    </span>
                    <div
                      style={{
                        width: "90%",
                        position: "absolute",
                        top: 140,
                        left: 40,
                      }}
                    >
                      <p>
                        Planté’s vision is to provide a range of products,
                        including plant care systems and smart gardening kits
                        that can be connected to your smartphones. Therefore,
                        you can have full control over your mini gardens
                        wherever you are.
                      </p>
                      <p>
                        In many of the planet’s big cities, the city air is
                        converted into authentic clouds of smog. The PM 2.5
                        level worldwide exceeds the limit for human safety. Air
                        pollution on the global agenda severely affects human
                        health and living standards. With that in mind, Planté
                        was founded to create solutions to the environmental
                        crisis and inspire a green lifestyle.
                      </p>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
            <div className="section">
              <div className={classes.bg3}>
                <Image src={bg3} alt="background_3" />
              </div>
              <div
                style={{
                  paddingTop: "5%",
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    paddingTop: 20,
                    paddingLeft: 30,
                    paddingRight: 30,

                    borderRadius: 12,
                    paddingBottom: 40,
                    display: "inline-block",
                    border: "1px solid black",
                  }}
                >
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: 55,
                      lineHeight: "60px",
                      marginBottom: 30,
                    }}
                  >
                    Grow
                    <br />
                    with us!
                  </p>
                  <p
                    style={{
                      fontWeight: 400,
                      fontSize: 15,
                      lineHeight: "20px",
                      marginBottom: 30,
                    }}
                  >
                    Join our list and get updates
                    <br />
                    about our upcoming products
                  </p>
                  <input
                    className="inputText"
                    style={{
                      width: "55%",
                      border: "none",
                      background: "#F0F2F5",
                      padding: 15,
                      borderRadius: 12,
                      marginBottom: 30,
                    }}
                    placeholder="First Name"
                  />
                  <input
                    className="inputText"
                    style={{
                      width: "55%",
                      border: "none",
                      background: "#F0F2F5",
                      padding: 15,
                      borderRadius: 12,
                      marginBottom: 30,
                    }}
                    placeholder="Last Name"
                  />
                  <input
                    className="inputText"
                    style={{
                      width: "55%",
                      border: "none",
                      background: "#F0F2F5",
                      padding: 15,
                      borderRadius: 12,
                      marginBottom: 30,
                    }}
                    placeholder="Email"
                  />
                  <br />
                  <ButtonBase
                    style={{
                      paddingTop: 12,
                      paddingBottom: 12,
                      borderRadius: 1000,
                      paddingLeft: 25,
                      paddingRight: 25,
                      backgroundColor: "#5AB282",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 16,
                        fontWeight: 600,
                        color: "#FAFCFE",
                      }}
                    >
                      Subscribe
                    </span>
                  </ButtonBase>
                </div>
                <div>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: 15,
                      lineHeight: "30px",
                      marginBottom: 4,
                    }}
                  >
                    Find us
                  </p>
                  <p
                    style={{
                      fontWeight: 700,
                      fontSize: 15,
                      lineHeight: "30px",
                      marginTop: 0,
                      marginBottom: 12,
                    }}
                  >
                    @theplante.co
                  </p>
                  <div
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        marginRight: 15,
                        display: "inline-block",
                        height: 25,
                        width: 25,
                      }}
                    >
                      <Image src={fbIcon} alt="fbIcon" />
                    </div>
                    <div
                      style={{
                        marginLeft: 15,
                        display: "inline-block",
                        height: 25,
                        width: 25,
                      }}
                    >
                      <Image src={igIcon} alt="igIcon" />
                    </div>
                  </div>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: 15,
                      lineHeight: "30px",
                      marginTop: 12,
                      marginBottom: 4,
                    }}
                  >
                    Phone: (+84 )946 677 027
                  </p>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: 15,
                      lineHeight: "30px",
                      marginTop: 4,
                      marginBottom: 12,
                    }}
                  >
                    Email: contact@theplante.co
                  </p>
                </div>
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default ComingSoon;

import Header from "@/components/Header";
import React from "react";
import bg1 from "@/assets/svg/bg1.svg";
import Image from "next/image";
import { makeStyles } from "@mui/styles";

const LayoutWithHeaderBar: React.FC<{}> = ({ children }) => {
  const classes = useStyles();
  return (
    <>
      <div>
        <Header />
        <div className={classes.bg1}>
          <Image src={bg1} alt="background_1" />
        </div>
      </div>
      <div>{children}</div>
    </>
  );
};

const useStyles = makeStyles({
  bg1: {
    position: "absolute",
    left: 0,
    top: 0,
  },
});

export default LayoutWithHeaderBar;

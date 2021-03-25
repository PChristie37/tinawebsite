import React from "react";
import Section from "components/Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "components/SectionHeader";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  itemsContainer: {
    marginTop: 60,
  },
  row: {
    // Reverse every other row
    "&:nth-of-type(even)": {
      flexDirection: "row-reverse",
    },

    // Spacing between rows
    "&:not(:last-child)": {
      marginBottom: `${theme.spacing(3)}px`,
    },
  },
  figure: {
    maxWidth: 300,
    margin: "30px auto",
  },
  image: {
    height: "auto",
    maxWidth: "100%",
  },
}));

function FeaturesSection(props) {
  const classes = useStyles();

  const items = [
    
    {
      title: "Education",
      subtitle: "Grand Canyon University - Master of Business Administration - MBA, Project Management 2018 – 2020",
      description: "Arizona State University - Bachelor's of Fine Arts - Digital Culture (Media Processing) 2013 – 2016",
      image: "https://uploads.divjoy.com/undraw-balloons_vxx5.svg",
    },
    
    {
      title: "Audio Buyer & Marketplace Manager",
      subtitle: "Walts TV",
      description:
        "Managing teams for pricing and marketplaces such as Amazon, Walmart, eBay, etc. As well as buying and negotiating deals on audio products, product forecasting, inventory turns, and enhance product sell-through. ",
      image: "https://uploads.divjoy.com/undraw-mind_map_cwng.svg",
    },
    {
      title: "Lead Instructor",
      subtitle: "iD Tech",
      description:
        "Taught at an overnight summer camp for 2 years for 7 weeks at a time teaching Game Programming with Unity, Intro to Java with Minecraft, Photography and Web-Design with Photoshop and Muse, and Intro to Programming with Python. Ages 7-16",
      image: "https://uploads.divjoy.com/undraw-personal_settings_kihd.svg",
    },
    {
      title: "Ticket Seller",
      subtitle: "Arizona State University",
      description:
        "Customer facing front line sales including problem resolution to ensure excellent service.",
      image: "https://uploads.divjoy.com/undraw-having_fun_iais.svg",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Container
          maxWidth="md"
          disableGutters={true}
          className={classes.itemsContainer}
        >
          {items.map((item, index) => (
            <Grid
              className={classes.row}
              container={true}
              item={true}
              alignItems="center"
              spacing={4}
              key={index}
            >
              <Grid item={true} xs={12} md={6}>
                <Box
                  textAlign={{
                    xs: "center",
                    md: "left",
                  }}
                >
                  <Typography variant="h5" gutterBottom={true}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {item.subtitle}
                  </Typography>
                  <Typography variant="subtitle1">
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
              <Grid item={true} xs={12} md={6}>
                <figure className={classes.figure}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={classes.image}
                  />
                </figure>
              </Grid>
            </Grid>
          ))}
        </Container>
      </Container>
    </Section>
  );
}

export default FeaturesSection;

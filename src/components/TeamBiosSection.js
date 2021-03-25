import React from "react";
import Section from "components/Section";
import Container from "@material-ui/core/Container";
import SectionHeader from "components/SectionHeader";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  avatarWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

function TeamBiosSection(props) {
  const classes = useStyles();

  const items = [
    {
      avatar: "https://media-exp1.licdn.com/dms/image/C5603AQG-5JBmaXIpnA/profile-displayphoto-shrink_400_400/0/1517359183532?e=1622073600&v=beta&t=HWttdylTxbFAFNICVNuHblLPbViu6GgeEVoq7iq7JBk",
      name: "Tina Marie Sherer Christie",
      role: "Life Hacker",
      bio:
        "Demonstrated history of working in the consumer electronics industry. Skilled in Market Analysis, Project Management, Customer Service, eCommerce, Purchasing, and Adobe Creative Suite. Professional with a Bachelor's degree focused in Digital Culture (Media Processing) from Arizona State University and a MBA with an emphasis in Project Management from GCU.",
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
        <Grid container={true} justify="center" spacing={4}>
          {items.map((item, index) => (
            <Grid item={true} xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card}>
                <CardContent>
                  <Box className={classes.avatarWrapper}>
                    <Avatar
                      src={item.avatar}
                      alt={item.name}
                      className={classes.avatar}
                    />
                  </Box>
                  <Box textAlign="center" pt={3}>
                    <Typography variant="body2" component="p">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.role}
                    </Typography>
                    <Box mt={2}>
                      <Typography variant="body1" component="p">
                        {item.bio}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default TeamBiosSection;

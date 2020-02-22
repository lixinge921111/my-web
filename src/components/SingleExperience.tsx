import React, { useState } from "react";
import { Experience } from "./Experience";
import { Collapse, CardBody, Card, CardTitle, CardSubtitle } from "reactstrap";
import Button from "@material-ui/core/Button";
import "../styles/SingleExperience.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

export type SinglePositionProps = {
  experience: Experience;
};

const SinglePosition = ({ experience }: SinglePositionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="single-position">
      <Card>
        <div className="single-position-img-and-title">
          <div className="single-position-img">
            <CardTitle>
              <img src={experience.logo} alt={experience.company + " logo"} />
            </CardTitle>
          </div>
          <div>
            <CardBody className="single-position-body">
              <CardTitle className="single-position-title">
                {experience.title}
              </CardTitle>
              <CardSubtitle className="single-position-subtitle">
                {experience.company}
              </CardSubtitle>
              <CardSubtitle className="single-position-subtitle-date">
                {experience.startDate} -{" "}
                {experience.endDate ? experience.endDate : "Present"}
              </CardSubtitle>
              <div className="single-position-text">
                <Collapse isOpen={isOpen}>
                  {experience.description &&
                    experience.description.map(descriptionParagraph => {
                      return (
                        <p key={descriptionParagraph}>{descriptionParagraph}</p>
                      );
                    })}
                  <div>
                    {experience.links &&
                      experience.links.map(link => {
                        return (
                          <ThemeProvider theme={theme}>
                            <Button key={link.title}>
                              <a
                                href={link.link}
                                style={{
                                  textDecoration: "none",
                                  color: "darkblue"
                                }}
                              >
                                {link.title}
                              </a>
                            </Button>
                          </ThemeProvider>
                        );
                      })}
                  </div>
                </Collapse>
                <ThemeProvider theme={theme}>
                  <Button
                    variant="text"
                    size="small"
                    className="single-position-button"
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  >
                    {!isOpen ? "Show more" : "Show less"}
                  </Button>
                </ThemeProvider>
              </div>
            </CardBody>
          </div>
        </div>
      </Card>
    </div>
  );
};

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      text: {
        borderRadius: 3,
        color: "darkblue",
        height: 32,
        padding: "5 5px",
        fontFamily: "Neucha"
      }
    }
  }
});

export default SinglePosition;

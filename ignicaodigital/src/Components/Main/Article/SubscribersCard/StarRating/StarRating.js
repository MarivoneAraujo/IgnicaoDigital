import React from "react";
import PropTypes from "prop-types";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@material-ui/icons/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@material-ui/icons/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import Box from "@material-ui/core/Box";
import { StarsGrid, Justify, CentralStyle } from "./styled.js";

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CustomizedRatings() {
  return (
    <div>
      <CentralStyle>
        <p
          style={{
            fontFamily: "Inter",
          }}
        >
          <strong>Avaliação</strong>
        </p>
      </CentralStyle>
      <StarsGrid>
        <div
          style={{
            marginBottom: "-30px",
          }}
        >
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating
              name="customized-empty"
              defaultValue={5}
              precision={0.5}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              size="small"
              style={{
                color: "#C4C4C4",
              }}
            />
          </Box>
        </div>

        <Justify>8500</Justify>

        <div
          style={{
            marginBottom: "-30px",
          }}
        >
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating
              name="customized-empty"
              defaultValue={4}
              precision={0.5}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              size="small"
              style={{
                color: "#C4C4C4",
              }}
            />
          </Box>
        </div>
        <Justify>3250</Justify>

        <div
          style={{
            marginBottom: "-30px",
          }}
        >
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating
              name="customized-empty"
              defaultValue={3}
              precision={0.5}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
              size="small"
              style={{
                color: "#C4C4C4",
              }}
            />
          </Box>
        </div>
        <Justify>1120</Justify>
      </StarsGrid>
    </div>
  );
}

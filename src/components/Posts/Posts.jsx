import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import useFetch from "../../../hooks/useFetch";
import { HOT, RANDOM, RISING, TRENDING } from "../../../urls";
import { Loader } from "../Loader/Loader";
import { PostCard } from "./PostCard";

export const Posts = ({ type, text }) => {
  const { response, error, loading } = useFetch(type);
  if (loading) {
    return <Loader />;
  }

  return (
    <Accordion>
      <AccordionSummary id={text}>
        <Typography>{text}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        {response?.data?.children.map((elem, index) => (
          <PostCard key={`${elem}_${index}`}>{elem.data.selftext}</PostCard>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

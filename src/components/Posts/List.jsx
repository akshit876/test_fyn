import { Divider } from "@mui/material";
import useFetch from "../../../hooks/useFetch";
import { HOT, RANDOM, RISING, TRENDING, TOP } from "../../../urls";
import { Loader } from "../Loader/Loader";
import { SearchPost } from "../Search/SearchPost";
import { PostCard } from "./PostCard";
import { Posts } from "./Posts";

export const Lists = () => {
  return (
    <section className="flex flex-col w-full gap-y-4">
      <SearchPost />
      <Divider />
      <Posts type={TRENDING} text="Trending" />
      <Divider />
      <Posts type={HOT} text="Hot" />
      <Divider />
      <Posts type={RISING} text="Rising" />
      <Divider />
      <Posts type={TOP} text="Top" />
      <Divider />
      <Posts type={RANDOM} text="Random" />
    </section>
  );
};

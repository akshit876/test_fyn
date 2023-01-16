import { Card } from "@mui/material";

export const PostCard = ({ children }) => {
  return (
    <Card className="p-3.5 m-1.5 text-justify w-full">
      {children.length ? children : "Sorry No Text in post"}
    </Card>
  );
};

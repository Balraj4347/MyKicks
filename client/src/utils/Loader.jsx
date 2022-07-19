import CircularProgress from "@mui/material/CircularProgress";

const LoaderStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Loader = () => {
  return (
    <div style={LoaderStyle}>
      <CircularProgress />
    </div>
  );
};

export default Loader;

import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  mainContainer: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    border: "1px solid blue",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 50px",
  },
  container: {
    diplay: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  [theme.breakpoints.down("sm")]: {
    appBar: {
      padding: "10px 20px",
    },
    heading: {
      display: "none",
    },
    userName: {
      display: "none",
    },
    image: {
      marginLeft: "5px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "flex-end",
      width: "160px",
    },
  },
  post: {
    width: "100% !important",
  },
  actionDiv: {
    textAlign: "center",
  },
}));

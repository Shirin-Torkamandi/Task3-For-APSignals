"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import DeleteIcon from "@mui/icons-material/Delete";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { purple, blue, pink, grey } from "@mui/material/colors";
import Divider from "@mui/material/Divider";
import { Dancing_Script } from "next/font/google";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import Zoom from "@mui/material/Zoom";
import FeedRoundedIcon from "@mui/icons-material/FeedRounded";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const dancingScript = Dancing_Script({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function InteractiveList({ questions }) {
  if (!questions || questions.length === 0) {
    return <p>No questions found.</p>;
  }
  const router = useRouter();
  const handleClick = () => {
    router.push("/addquestion");
  };

  const handleGenerateForm = () => {
    router.push("/generateform");
  };

  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmDelete = () => {
    console.log("Question deleted.");
    setOpenDialog(false);
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Grid container spacing={1}>
            <Grid item xs={12} sx={{ marginRight: "auto" }}>
              <Typography
                className={dancingScript.className}
                sx={{ mt: 4, mb: 2 }}
                variant="h6"
                component="p"
              >
                List Of Questions:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={2}>
                <Button onClick={handleGenerateForm} variant="outlined" endIcon={<FeedRoundedIcon />}>
                  Generate Form
                </Button>
                <Tooltip
                  followCursor
                  TransitionComponent={Zoom}
                  title="Add more questions"
                >
                  <Fab
                    onClick={handleClick}
                    size="medium"
                    color="secondary"
                    aria-label="add"
                  >
                    <AddIcon />
                  </Fab>
                </Tooltip>
              </Stack>
            </Grid>
          </Grid>

          <List
            sx={{
              py: 1,
              px: 0.5,
              maxWidth: 500,
              borderRadius: 5,
              border: "1px solid",
              borderColor: blue[500],
            }}
          >
            {questions.map((question, index) => (
              <React.Fragment key={question.id}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: blue[500] }}>
                      <QuestionMarkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={question.title} />
                  <Tooltip
                    Tooltip
                    title="Edit"
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 600 }}
                  >
                    <IconButton
                      edge="end"
                      aria-label="edit"
                      sx={{ color: pink[300], marginRight: 0, marginLeft: 2 }}
                    >
                      <AutoFixHighIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip
                    title="Delete"
                    TransitionComponent={Fade}
                    TransitionProps={{ timeout: 600 }}
                  >
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      sx={{ color: grey[600] }}
                      onClick={handleClickOpenDialog}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </ListItem>
                {index < questions.length - 1 && (
                  <Divider
                    variant="inset"
                    component="li"
                    sx={{ backgroundColor: purple[300] }}
                  />
                )}
              </React.Fragment>
            ))}
          </List>
        </Grid>
      </Grid>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">
          {"Are you sure you wanna delete this question?"}
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            This action cannot be undone. Please confirm if you want to delete
            this question.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog} sx={{ color: "#1976d2" }}>
            No, I'm not
          </Button>

          <Button
            onClick={handleConfirmDelete}
            sx={{ color: "#d32f2f" }}
            autoFocus
          >
            Yeah, I'm sure
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Question deleted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}

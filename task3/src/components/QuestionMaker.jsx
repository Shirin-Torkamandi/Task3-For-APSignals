"use client";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";
import { grey } from "@mui/material/colors";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useRouter } from "next/navigation";

export default function QuestionMaker() {
  const [selectedTab, setSelectedTab] = React.useState("short-answer");
  const handleChange = (event) => {
    setSelectedTab(event.target.value);
  };

  const [value, setValue] = React.useState("");
  const handleChangeValue = (event) => {
    setValue(event.target.value);
  };

  const [radioValue, setRadioValue] = React.useState({
    option1: "Option 1",
    option2: "Option 2",
    option3: "Option 3",
    option4: "Option 4",
  });
  const handleChangeRadio = (event) => {
    const { name, value } = event.target;
    setRadioValue({
      ...radioValue,
      [name]: value,
    });
  };

  const [checkedValue, setCheckedValue] = React.useState({
    option1: "checked1",
    option2: "checked2",
    option3: "checked3",
    option4: "checked4",
  });
  const [checked, setChecked] = React.useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCheckedValue({
      ...checkedValue,
      [name]: value,
    });
  };
  const handleCheckedChange = (event) => {
    const { name, checked } = event.target;
    setChecked((prevChecked) => ({
      ...prevChecked,
      [name]: checked,
    }));
  };

  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return (
    <Box sx={{ width: 600 }}>
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, sm: 7 }}>
          <Box
            component="form"
            sx={{ "& > :not(style)": { m: 1, width: "95%" } }}
            noValidate
            autoComplete="off"
          >
            <TextField
              sx={{
                backgroundColor: grey[100],
                borderTopLeftRadius: "30px",
                borderTopRightRadius: "10px",
              }}
              id="filled-basic"
              label="Question title"
              variant="filled"
              color="secondary"
            />
          </Box>
        </Grid>

        <Grid item size={{ xs: 12, sm: 5 }}>
          <FormControl sx={{ m: 1, width: "100%" }} size="small">
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={selectedTab}
              sx={{ backgroundColor: "#80deea", color: "black" }}
              onChange={handleChange}
            >
              <MenuItem value="short-answer">Short answer</MenuItem>
              <MenuItem value="multiple-choice">Multiple choice</MenuItem>
              <MenuItem value="checkboxes">Checkboxes</MenuItem>
            </Select>
            <FormHelperText sx={{ color: "#80deea" }}>
              Choose the Type of Question
            </FormHelperText>
          </FormControl>
        </Grid>

        <Grid item size={{ xs: 12, sm: 8 }}>
          <Box
            sx={{
              width: "100%",
              typography: "body1",
              color: "black",
            }}
          >
            {selectedTab === "short-answer" && (
              <TextField
                id="outlined-textarea"
                label="Answer input"
                placeholder="Maximum 255 characters"
                value={value}
                onChange={handleChangeValue}
                sx={{
                  inputProps: { maxLength: 255 },
                  width: "100%",
                  background:
                    "linear-gradient(285deg, rgba(156,228,237,1) 0%, rgba(231,231,231,1) 86%)",
                  borderRadius: "20px",
                }}
                error={value.length > 255}
                helperText={
                  value.length > 255 ? "Exceeded maximum character limit" : ""
                }
                multiline
              />
            )}
            {selectedTab === "multiple-choice" && (
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="option1"
                  name="radio-buttons-group"
                  sx={{
                    paddingLeft: "30px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      background:
                        "linear-gradient(285deg, rgba(156,228,237,1) 0%, rgba(231,231,231,1) 86%)",
                      borderRadius: "20px",
                      paddingRight: "10px",
                      marginBottom: "5px",
                    }}
                  >
                    <FormControlLabel
                      value="option1"
                      control={<Radio />}
                      label=""
                      sx={{ marginRight: 0, marginLeft: 0.5 }}
                    />
                    <TextField
                      name="option1"
                      variant="outlined"
                      size="small"
                      value={radioValue.option1}
                      onChange={handleChangeRadio}
                      sx={{ width: "100%" }}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      background:
                        "linear-gradient(285deg, rgba(156,228,237,1) 0%, rgba(231,231,231,1) 86%)",
                      borderRadius: "20px",
                      paddingRight: "10px",
                      marginBottom: "5px",
                    }}
                  >
                    <FormControlLabel
                      value="option2"
                      control={<Radio />}
                      label=""
                      sx={{ marginRight: 0, marginLeft: 0.5 }}
                    />
                    <TextField
                      name="option2"
                      variant="outlined"
                      size="small"
                      value={radioValue.option2}
                      onChange={handleChangeRadio}
                      sx={{ width: "100%" }}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      background:
                        "linear-gradient(285deg, rgba(156,228,237,1) 0%, rgba(231,231,231,1) 86%)",
                      borderRadius: "20px",
                      paddingRight: "10px",
                      marginBottom: "5px",
                    }}
                  >
                    <FormControlLabel
                      value="option3"
                      control={<Radio />}
                      label=""
                      sx={{ marginRight: 0, marginLeft: 0.5 }}
                    />
                    <TextField
                      name="option3"
                      variant="outlined"
                      size="small"
                      value={radioValue.option3}
                      onChange={handleChangeRadio}
                      sx={{ width: "100%" }}
                    />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      background:
                        "linear-gradient(285deg, rgba(156,228,237,1) 0%, rgba(231,231,231,1) 86%)",
                      borderRadius: "20px",
                      paddingRight: "10px",
                    }}
                  >
                    <FormControlLabel
                      value="option4"
                      control={<Radio />}
                      label=""
                      sx={{ marginRight: 0, marginLeft: 0.5 }}
                    />
                    <TextField
                      name="option4"
                      variant="outlined"
                      size="small"
                      value={radioValue.option4}
                      onChange={handleChangeRadio}
                      sx={{ width: "100%" }}
                    />
                  </Box>
                </RadioGroup>
              </FormControl>
            )}
            {selectedTab === "checkboxes" && (
              <FormControl
                sx={{
                  paddingLeft: "30px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background:
                      "linear-gradient(285deg, rgba(156,228,237,1) 0%, rgba(231,231,231,1) 86%)",
                    borderRadius: "20px",
                    paddingRight: "10px",
                    marginBottom: "5px",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked.option1}
                        onChange={handleCheckedChange}
                        name="option1"
                        sx={{ marginLeft: 1 }}
                      />
                    }
                    label=""
                    sx={{ marginRight: 0.5 }}
                  />
                  <TextField
                    name="option1"
                    variant="outlined"
                    size="small"
                    value={checkedValue.option1}
                    onChange={handleInputChange}
                    sx={{ width: "100%" }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background:
                      "linear-gradient(285deg, rgba(156,228,237,1) 0%, rgba(231,231,231,1) 86%)",
                    borderRadius: "20px",
                    paddingRight: "10px",
                    marginBottom: "5px",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked.option2}
                        onChange={handleCheckedChange}
                        name="option2"
                        sx={{ marginLeft: 1 }}
                      />
                    }
                    label=""
                    sx={{ marginRight: 0.5 }}
                  />
                  <TextField
                    name="option2"
                    variant="outlined"
                    size="small"
                    value={checkedValue.option2}
                    onChange={handleInputChange}
                    sx={{ width: "100%" }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background:
                      "linear-gradient(285deg, rgba(156,228,237,1) 0%, rgba(231,231,231,1) 86%)",
                    borderRadius: "20px",
                    paddingRight: "10px",
                    marginBottom: "5px",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked.option3}
                        onChange={handleCheckedChange}
                        name="option3"
                        sx={{ marginLeft: 1 }}
                      />
                    }
                    label=""
                    sx={{ marginRight: 0.5 }}
                  />
                  <TextField
                    name="option3"
                    variant="outlined"
                    size="small"
                    value={checkedValue.option3}
                    onChange={handleInputChange}
                    sx={{ width: "100%" }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background:
                      "linear-gradient(285deg, rgba(156,228,237,1) 0%, rgba(231,231,231,1) 86%)",
                    borderRadius: "20px",
                    paddingRight: "10px",
                    marginBottom: "5px",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked.option4}
                        onChange={handleCheckedChange}
                        name="option4"
                        sx={{ marginLeft: 1 }}
                      />
                    }
                    label=""
                    sx={{ marginRight: 0.5 }}
                  />
                  <TextField
                    name="option4"
                    variant="outlined"
                    size="small"
                    value={checkedValue.option4}
                    onChange={handleInputChange}
                    sx={{ width: "100%" }}
                  />
                </Box>
              </FormControl>
            )}
          </Box>
        </Grid>

        <Grid item size={{ xs: 12, sm: 4 }} sx={{ marginTop: "auto" }}>
          <Stack direction="row" spacing={2} width={"100%"}>
            <Button
              sx={{ color: "#80deea" }}
              variant="text"
              endIcon={<SendIcon />}
            >
              Create
            </Button>
            <Button
              sx={{ backgroundColor: grey[500] }}
              variant="contained"
              startIcon={<DeleteIcon />}
              onClick={handleClick}
            >
              Cancel
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

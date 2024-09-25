import styles from "../page.module.css";
import { Typography } from "@mui/material";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";
import { pink } from "@mui/material/colors";

const dancingScript = Dancing_Script({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Generate Form",
  description: "This is generate form Page",
};

export default function GenerateForm() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Typography
          variant="h4"
          component="p"
          className={dancingScript.className}
          sx={{ display: "inline-block", ml: 1 }}
          color="secondary"
        >
          Generate Form is still in progress...
        </Typography>
        <Typography
          variant="body1"
          component={Link}
          href="/"
          sx={{
            textDecoration: "wavy underline",
            color: pink[700],
            '&:hover': {
              color: pink[500],
            },
            cursor: 'pointer',
          }}
        >
          Go to Home Page?
        </Typography>
      </main>
      <footer className={styles.footer}>
        <div>
          3rd Task for APS by
          <Typography
            variant="h5"
            component="p"
            className={dancingScript.className}
            sx={{ display: "inline-block", ml: 1 }}
            color="secondary"
          >
            Shirin
          </Typography>
        </div>
      </footer>
    </div>
  );
}

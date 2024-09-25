import styles from "../page.module.css";
import { Typography } from "@mui/material";
import { Dancing_Script } from "next/font/google";
import QuestionMaker from "@/components/QuestionMaker";
const dancingScript = Dancing_Script({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Add More ❔s",
  description: "This is second Page",
};

export default function AddQuestion() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <QuestionMaker />
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

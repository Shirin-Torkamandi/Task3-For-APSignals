import styles from "./page.module.css";
import InteractiveList from "@/components/List";
import { Typography } from "@mui/material";
import { Dancing_Script } from "next/font/google";
const dancingScript = Dancing_Script({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Home Page (List Of ❓s)",
  description: "This is Main Page",
};

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/v1/questions", {
    next: { tags: ["question"] },
  });
  const questions = await res.json();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <InteractiveList questions={questions} />
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

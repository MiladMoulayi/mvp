import Link from "next/link";
import classes from "./main-header.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Next.jokes</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/jokes">See All Jokes!</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;

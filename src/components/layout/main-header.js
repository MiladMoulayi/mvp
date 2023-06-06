import Link from "next/link";
import classes from "./main-header.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Pokemon Next</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/pokemon">Browse All Pokemon!</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;

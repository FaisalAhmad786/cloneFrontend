import Link from "next/link";
import styles from "./Navbar.module.scss";
import { useState } from "react";
import ManageBooking from "./ManageBooking";

export default function Navbar() {
  const [manageBookingMenu, setmanageBookingMenu] = useState(false);
  const [ProfileMenu, setProfileMenu] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.LogoBrandName}>
        <Link href={"/"}>
          <img className={styles.logo} src="/bus-128.png" />
        </Link>

        <Link href={"/"}>
          <span className={styles.BrandName}>Green Bus</span>
        </Link>
      </div>
      <div className={styles.NavbarItems}>
        <ul className={styles.NavbarItemsNav}>
          <li className={styles.NavbarItemsNav}>Help</li>
          <li
            onClick={() => {
              setmanageBookingMenu(!manageBookingMenu);
              setProfileMenu(false);
            }}
            className={styles.NavbarItemsNav}
          >
            Manage Booking
            <img src="/dropdown-24.png" />
          </li>
          <li
            onClick={() => {
              setmanageBookingMenu(false);
              setProfileMenu(!ProfileMenu);
            }}
            className={styles.NavbarItemsNav}
          >
            Profile <img src="/dropdown-24.png" />
          </li>
        </ul>
        {manageBookingMenu && <ManageBooking />}
      </div>
    </div>
  );
}

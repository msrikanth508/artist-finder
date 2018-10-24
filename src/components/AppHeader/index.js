import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  Badge,
  DropdownItem,
  Dropdown
} from "reactstrap";
import styles from "../../styles/index.module.scss";
import { FaBell, FaUserCircle } from "react-icons/fa";
import logo from "../../logo.svg";
import constants from "../../constants/";
import { cache } from "../../utils/";

const { notifications, NOTIFICATIONS_SEEN } = constants;

/**
 * AppHeader component
 */
export default class AppHeader extends React.PureComponent {
  state = {
    isOpen: false,
    notifications,
    isNotificationOpened: false,
    isTouched: cache.has(NOTIFICATIONS_SEEN) ? true : false,
    animateNotificationIcon: false
  };

  componentDidMount() {
    // start animating ring icon
    this.startStopNotificationIconAnimation();
    // stop animation
    setTimeout(() => {
      this.startStopNotificationIconAnimation();
    }, 1000);
  }
  /**
   *
   * Toggle button event for hamburg menu on small resolutions
   */
  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  /**
   *
   * Perform animation on notification icon
   * @memberof AppHeader
   */
  startStopNotificationIconAnimation() {
    requestAnimationFrame(() => {
      this.setState(prevState => ({
        animateNotificationIcon: !prevState.animateNotificationIcon
      }));
    });
  }
  /**
   *
   * Handle notification click event
   */
  handleToggle = () => {
    cache.setItem(NOTIFICATIONS_SEEN, true);
    this.setState(prevState => ({
      isTouched: true,
      isNotificationOpened: !prevState.isNotificationOpened
    }));
  };

  render() {
    return (
      <div>
        <Navbar light expand="md" className={styles.header}>
          <NavbarBrand href="/">
            <img src={logo} alt="My logo" className={styles["app-logo"]} />
            Artist Finder
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Dropdown
                isOpen={this.state.isNotificationOpened}
                toggle={this.handleToggle}
                nav
                inNavbar
              >
                <DropdownToggle
                  nav
                  data-toggle="dropdown"
                  aria-expanded={this.state.isNotificationOpened}
                >
                  <FaBell
                    className={
                      this.state.animateNotificationIcon ? "animate_bell" : ""
                    }
                  />
                  {!this.state.isTouched ? (
                    <Badge
                      color="primary"
                      className={`${styles["header__badge"]} ${
                        styles["header__badge--red"]
                      }`}
                    >
                      2
                    </Badge>
                  ) : null}
                </DropdownToggle>
                <DropdownMenu right>
                  {this.state.notifications.map(notifcation => (
                    <DropdownItem key={notifcation.id}>
                      {notifcation.text}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <FaUserCircle />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>User123</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

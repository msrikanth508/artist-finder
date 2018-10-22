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
import logo from '../../logo.svg';

export default class AppHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isNotificationOpened: false,
      isTouched: false
    };
  }
  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };
  handleToggle = () => {
    this.setState(prevState => ({
      isTouched: true,
      isNotificationOpened: !prevState.isNotificationOpened
    }));
  };
  render() {
    return (
      <div>
        <Navbar light expand="md" className={styles.header}>
          <NavbarBrand href="/"><img src={logo} alt="My logo" className={styles['app-logo']} />Artist Finder</NavbarBrand>
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
                  <FaBell />
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
                  <DropdownItem>
                    Hurry up! New events have been added.
                  </DropdownItem>
                  <DropdownItem>
                    Get 50% off on every ticket booking.
                  </DropdownItem>
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

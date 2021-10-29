// For more information See material ui documentation
// https://material-ui.com

import React, { useEffect, useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    zIndex: "11",
  },
  paper: {
    marginRight: theme.spacing(2),
    left: "20px",
  },
  btn: {
    color: "#fff",
    backgroundColor: "trasnparent",
    fontSize: "1rem",
    cursor: "pointer",
    fontFamily: "Roboto Condensed, sans-serif",
    padding: "0 1rem",
    "&:hover": {
      color: "red",
    },
  },
  MuiButtonBase: {
    disableRipple: true, // No more ripple, on the whole application
  },
}));

export default function MenuListComposition({ linkName, innerLink, route }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const innerLinks = [...innerLink];
  const routes = [...route];

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <Button
          className={classes.btn}
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {linkName}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    style={{
                      width: "150px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    {innerLinks.map((link, idxL) => {
                      routes.map((route, idxR) => {
                        if (idxL !== idxR) {
                          return null;
                        }
                        return route;
                      });
                      return (
                        <MenuItem
                          key={uuidv4()}
                          component={Link}
                          to={routes[idxL]}
                          onClick={(e) => {
                            setOpen(false);
                          }}
                        >
                          {link}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

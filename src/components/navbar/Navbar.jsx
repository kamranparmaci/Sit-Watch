import React, { useState, useEffect, useRef } from "react";
import MenuListComposition from "../nav-btn/NavBtn";
import SearchBar from "../search/SearchBar";
import {
  ResponsiveMenuItemWrapper,
  FlexItems,
  ResponsiveMenu,
  Nav,
  HamIcon,
  ResponsiveTitle,
  ResponsiveMenuWrapper,
  ItemWrapper,
  ItemLink,
} from "./NavbarStyles";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [show, setShow] = useState();
  const [responsiveMenu, setResponsiveMenu] = useState();
  let prevScrollPos = window.pageYOffset;
  const refSearchBar = useRef("");

  const hideNavbar = (show) => {
    setShow(show);
  };

  // Hide and show navbar on scroll down and up
  const navbarControl = () => {
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      const searchbarStat = refSearchBar.current.searchBarState();
      if (prevScrollPos > currentScrollPos) {
        if (searchbarStat) {
          setShow(true);
          refSearchBar.current.handleShowSearchFromParent(true);
        } else {
          refSearchBar.current.handleShowSearchFromParent(false);
          setShow(false);
        }
      } else {
        if (searchbarStat) {
          setShow(true);
          refSearchBar.current.handleShowSearchFromParent(true);
        } else {
          setShow(true);
          refSearchBar.current.handleShowSearchFromParent(false);
        }
      }
      prevScrollPos = currentScrollPos;
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarControl);
    return () => window.removeEventListener("scroll", navbarControl);
  });

  // For any devices under 1024px show and hide menu on hamburger menu click
  const getResponsiveMenu = () => {
    if (responsiveMenu) {
      setResponsiveMenu(false);
    } else {
      setResponsiveMenu(true);
    }
  };

  return (
    <>
      <Nav visibil={show}>
        <div className="container">
          <FlexItems>
            <ItemLink to="/">
              <h1>SIT-WATCH</h1>
            </ItemLink>

            <ResponsiveMenu showResponsiveMenu={responsiveMenu}>
              <ResponsiveMenuWrapper>
                <ResponsiveMenuItemWrapper>
                  <ResponsiveTitle>Movies</ResponsiveTitle>
                  <ItemWrapper>
                    <ItemLink to="/movies/popular">Popular</ItemLink>
                    <ItemLink to="/movies/upcoming">Upcoming</ItemLink>
                    <ItemLink to="/movies/now-playing">Now Playing</ItemLink>
                    <ItemLink to="/movies/top-rated">Top Rated</ItemLink>
                  </ItemWrapper>
                </ResponsiveMenuItemWrapper>
                <ResponsiveMenuItemWrapper>
                  <ResponsiveTitle>Tv Shows</ResponsiveTitle>
                  <ItemWrapper>
                    <ItemLink to="/tv/tv-popular">Popular</ItemLink>
                    <ItemLink to="/tv/tv-airing-today">Airing Today</ItemLink>
                    <ItemLink to="/tv/tv-on-air">On Air</ItemLink>
                    <ItemLink to="/tv/tv-top-rated">Top Rated</ItemLink>
                  </ItemWrapper>
                </ResponsiveMenuItemWrapper>
                <ResponsiveMenuItemWrapper>
                  <ResponsiveTitle>person</ResponsiveTitle>
                  <ItemLink to="/person/popular">Popular</ItemLink>
                </ResponsiveMenuItemWrapper>
              </ResponsiveMenuWrapper>
            </ResponsiveMenu>
            <ul>
              <MenuListComposition
                linkName="Movies"
                innerLink={["Popular", "Upcoming", " Now Playing", "Top Rated"]}
                route={[
                  "/movies/popular",
                  "/movies/Upcoming",
                  "/movies/now-playing",
                  "/movies/top-rated",
                ]}
              />
              <MenuListComposition
                linkName="Tv Shows"
                innerLink={["Popular", "Airing Today", "On Air", "Top Rated"]}
                route={[
                  "/tv/tv-popular",
                  "/tv/tv-airing-today",
                  "/tv/tv-on-air",
                  "/tv/tv-top-rated",
                ]}
              />
              <MenuListComposition
                linkName="person"
                innerLink={["Popular"]}
                route={["/person/popular"]}
              />
            </ul>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <SearchBar ref={refSearchBar} show={show} setShow={hideNavbar} />
              <HamIcon
                className="hamIcon"
                icon={faBars}
                onClick={getResponsiveMenu}
              />
            </div>
          </FlexItems>
        </div>
      </Nav>
    </>
  );
};

export default Navbar;

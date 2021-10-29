import {
  FooterBackground,
  FooterContainer,
  FooterLi,
  FooterLinks,
  FooterText,
  FooterTitles,
  FooterUl,
  FormButton,
  FormInput,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterBackground>
      <div className="container">
        <FooterContainer>
          <div>
            <FooterTitles color="color">Site Watch</FooterTitles>
            <FooterText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              laudantium beatae pariatur, a incidunt molestiae!
            </FooterText>
            <FooterUl display="display">
              <li>
                <FooterLinks
                  as="a"
                  target="_blank"
                  rel="noreferrer"
                  style
                  href="https://www.facebook.com"
                >
                  <i className="fab fa-facebook fa-2x"></i>
                </FooterLinks>
              </li>
              <li>
                <FooterLinks
                  as="a"
                  target="_blank"
                  rel="noreferrer"
                  style
                  href="https://www.instagram.com"
                >
                  <i className="fab fa-instagram fa-2x"></i>
                </FooterLinks>
              </li>
              <li>
                <FooterLinks
                  as="a"
                  target="_blank"
                  rel="noreferrer"
                  style
                  href="https://www.twitter.com"
                >
                  <i className="fab fa-twitter fa-2x"></i>
                </FooterLinks>
              </li>
              <li>
                <FooterLinks
                  as="a"
                  target="_blank"
                  rel="noreferrer"
                  style
                  href="https://www.facebook.com"
                >
                  <i className="fab fa-facebook fa-2x"></i>
                </FooterLinks>
              </li>
            </FooterUl>
          </div>
          <div>
            <FooterTitles>Stay Connected</FooterTitles>
            <FooterText>Subscribe use for more news</FooterText>
            <form>
              <FormInput type="text" placeholder="Enter Username" />
              <FormButton>Subcribe</FormButton>
            </form>
          </div>
          <div>
            <FooterTitles>Directions</FooterTitles>
            <FooterUl>
              <FooterLi>
                <FooterLinks to="/">Collections</FooterLinks>
              </FooterLi>
              <FooterLi>
                <FooterLinks to="/">What To Watch</FooterLinks>
              </FooterLi>
              <FooterLi>
                <FooterLinks to="/">Celebs Born Today</FooterLinks>
              </FooterLi>
              <FooterLi>
                <FooterLinks to="/">Streaming Now</FooterLinks>
              </FooterLi>
            </FooterUl>
          </div>
          <div>
            <FooterTitles>About Us</FooterTitles>
            <FooterUl>
              <FooterLi>Address : Lorem ipsum dolor sit amet.</FooterLi>
              <FooterLi>Phone : (555) 5555 5555</FooterLi>
              <FooterLi>Email : example@example.com</FooterLi>
            </FooterUl>
          </div>
        </FooterContainer>
      </div>
    </FooterBackground>
  );
};

export default Footer;

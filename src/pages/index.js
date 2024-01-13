import * as React from "react";
import { useCallback } from "react";
import { navigate } from "gatsby";
import FacebookIcon from "../components/facebook-icon";
import LinkedinIcon from "../components/linkedin-icon";
import Item from "../components/item";
import * as styles from "./index.module.css";

const Home = () => {
  const onItemContainerClick = useCallback(() => {
    navigate("/login");
  }, []);

  const onItemContainer1Click = useCallback(() => {
    navigate("/sign-up");
  }, []);

  const onItemContainer3Click = useCallback(() => {
    navigate("/login");
  }, []);

  const onFrameContainerClick = useCallback(() => {
    navigate("/inscription");
  }, []);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/membres");
  }, []);

  const onItemContainer2Click = useCallback(() => {
    navigate("/");
  }, []);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, []);

  return (
    <div className={styles.home}>
      <img
        className={styles.bannierelivres1Icon}
        alt=""
        src="/bannierelivres-1@2x.png"
      />
      <div className={styles.alumni}>
        <span>{` `}</span>
        <span className={styles.a}>A</span>
        <span>LU</span>
        <span className={styles.a}>M</span>
        <span>NI</span>
      </div>
      <div
        className={styles.inscriptionWrapper}
        onClick={onFrameContainerClick}
      >
        <div className={styles.inscription}>Inscription</div>
      </div>
      <img className={styles.removal1Icon} alt="" src="/removal-1@2x.png" />
      <div className={styles.homeChild} />
      <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
      <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
      <div className={styles.membresWrapper} onClick={onFrameContainer1Click}>
        <div className={styles.membres}>Membres</div>
      </div>
      <FacebookIcon
        dimensions="/facebook.svg"
        propHeight="4.88%"
        propWidth="3.47%"
        propTop="89.26%"
        propRight="43.54%"
        propBottom="5.86%"
        propLeft="52.99%"
      />
      <LinkedinIcon
        dimensions="/linkedin.svg"
        propHeight="4.88%"
        propWidth="3.47%"
        propTop="89.26%"
        propRight="50.21%"
        propBottom="5.86%"
        propLeft="46.32%"
      />
      <div className={styles.contacterNous}>Contacter-nous</div>
      <img
        className={styles.messageFillIcon}
        alt=""
        src="/message-fill@2x.png"
      />
      <img className={styles.sendFillIcon} alt="" src="/send-fill@2x.png" />
      <Item
        searchResultText="Log in"
        showItem
        itemTop="47px"
        itemLeft="1023px"
        itemWidth="130px"
        itemHeight="40px"
        itemBorderRadius="16px"
        itemBorder="1px solid var(--color-mediumpurple-100)"
        itemBoxSizing="border-box"
        itemCursor="pointer"
        itemBackgroundColor="unset"
        propFontSize="20px"
        propTextAlign="center"
        propAlignItems="center"
        propJustifyContent="center"
        propColor="#000"
        onItemContainer3Click={onItemContainerClick}
      />
      <Item
        searchResultText="Sign up"
        showItem
        itemTop="47px"
        itemLeft="1187px"
        itemWidth="130px"
        itemHeight="40px"
        itemBorderRadius="16px"
        itemBorder="1px solid var(--color-mediumpurple-100)"
        itemBoxSizing="border-box"
        itemCursor="pointer"
        itemBackgroundColor="#7579d6"
        propFontSize="20px"
        propTextAlign="center"
        propAlignItems="center"
        propJustifyContent="center"
        propColor="#f5f5f5"
        onItemContainer3Click={onItemContainer1Click}
      />
      <div className={styles.item} onClick={onItemContainer2Click}>
        <div className={styles.item1}>Home</div>
      </div>
      <Item
        searchResultText="Rechrcher ...."
        showItem={false}
        itemTop="47px"
        itemLeft="784px"
        itemWidth="200px"
        itemHeight="40px"
        itemBorderRadius="16px"
        itemBorder="1px solid var(--color-mediumpurple-100)"
        itemBoxSizing="border-box"
        itemCursor="pointer"
        itemBackgroundColor="unset"
        propFontSize="36px"
        propTextAlign="left"
        propAlignItems="unset"
        propJustifyContent="unset"
        propColor="#000"
        onItemContainer3Click={onItemContainer3Click}
      />
      <div className={styles.search}>Search</div>
      <img className={styles.homeFillIcon} alt="" src="/home-fill@2x.png" />
      <div className={styles.about} onClick={onAboutTextClick}>
        About
      </div>
      <img className={styles.removal4Icon} alt="" src="/removal-4@2x.png" />
    </div>
  );
};

export default Home;

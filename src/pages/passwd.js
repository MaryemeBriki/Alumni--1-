import * as React from "react";
import { useState, useCallback } from "react";
import { navigate } from "gatsby";
import FacebookIcon from "../components/facebook-icon";
import LinkedinIcon from "../components/linkedin-icon";
import Item from "../components/item";
import * as styles from "./passwd.module.css";

const Passwd = () => {
  const [frameInputValue, setFrameInputValue] = useState("");
  const [frameInput1Value, setFrameInput1Value] = useState("");
  const [frameInput2Value, setFrameInput2Value] = useState("");

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
    navigate("/login");
  }, []);

  const onItemContainer2Click = useCallback(() => {
    navigate("/");
  }, []);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, []);

  return (
    <div className={styles.passwd}>
      <div className={styles.changerVotreMot}>Changer votre mot de passe!!</div>
      <input
        className={styles.passwdChild}
        type="email"
        value={frameInputValue}
        onChange={(event) => setFrameInputValue(event.target.value)}
      />
      <input
        className={styles.passwdItem}
        type="password"
        value={frameInput1Value}
        onChange={(event) => setFrameInput1Value(event.target.value)}
      />
      <input
        className={styles.passwdInner}
        type="password"
        value={frameInput2Value}
        onChange={(event) => setFrameInput2Value(event.target.value)}
      />
      <div className={styles.email}>EMAIL</div>
      <div className={styles.nouveauMotDe}>Nouveau mot de passe</div>
      <div className={styles.confirmerVotreMot}>
        Confirmer votre mot de passe
      </div>
      <div className={styles.confirmerWrapper} onClick={onFrameContainerClick}>
        <div className={styles.confirmer}>CONFIRMER</div>
      </div>
      <img className={styles.oublie1Icon} alt="" src="/oublie-1@2x.png" />
      <div className={styles.rectangleDiv} />
      <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
      <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
      <FacebookIcon
        dimensions="/facebook.svg"
        propHeight="4.91%"
        propWidth="3.43%"
        propTop="90.66%"
        propRight="45.13%"
        propBottom="4.42%"
        propLeft="51.44%"
      />
      <LinkedinIcon
        dimensions="/linkedin.svg"
        propHeight="4.91%"
        propWidth="3.43%"
        propTop="90.66%"
        propRight="51.72%"
        propBottom="4.42%"
        propLeft="44.85%"
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
        itemTop="23px"
        itemLeft="1046px"
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
        itemTop="24px"
        itemLeft="1216px"
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
        itemTop="23px"
        itemLeft="762px"
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
      <img className={styles.removal5Icon} alt="" src="/removal-5@2x.png" />
    </div>
  );
};

export default Passwd;

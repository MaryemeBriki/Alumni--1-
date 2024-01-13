import * as React from "react";
import { useState, useCallback } from "react";
import { navigate } from "gatsby";
import Item from "../components/item";
import * as styles from "./sign-up.module.css";

const SignUp = () => {
  const [rectangleInputValue, setRectangleInputValue] = useState("");
  const [rectangleInput1Value, setRectangleInput1Value] = useState("");
  const [rectangleInput2Value, setRectangleInput2Value] = useState("");

  const onItemContainerClick = useCallback(() => {
    navigate("/login");
  }, []);

  const onRectangle1Click = useCallback(() => {
    navigate("/login");
  }, []);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, []);

  return (
    <header className={styles.signUp}>
      <div className={styles.signUpChild} />
      <input
        className={styles.signUpItem}
        type="email"
        value={rectangleInputValue}
        onChange={(event) => setRectangleInputValue(event.target.value)}
      />
      <input
        className={styles.signUpInner}
        type="password"
        value={rectangleInput1Value}
        onChange={(event) => setRectangleInput1Value(event.target.value)}
      />
      <div className={styles.motDePasse}>Mot de passe</div>
      <input
        className={styles.rectangleInput}
        type="text"
        value={rectangleInput2Value}
        onChange={(event) => setRectangleInput2Value(event.target.value)}
      />
      <div className={styles.userFill} />
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-5.svg"
        onClick={onRectangle1Click}
      />
      <div className={styles.adresseEMail}>Adresse e-mail</div>
      <div className={styles.nomComplet}>Nom complet</div>
      <div className={styles.signUp1}>Sign up</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.signUp2}>Sign up</div>
      <div className={styles.signUpChild1} />
      <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
      <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
      
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
        onItemContainer3Click={onItemContainerClick}
      />
      <div className={styles.item} onClick={onItemContainerClick}>
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
        onItemContainer3Click={onItemContainerClick}
      />
      <div className={styles.search}>Search</div>
      <img className={styles.homeFillIcon} alt="" src="/home-fill@2x.png" />
      <div className={styles.about} onClick={onAboutTextClick}>
        About
      </div>
      <img className={styles.removal4Icon} alt="" src="/removal-4@2x.png" />
      <img className={styles.removal5Icon} alt="" src="/removal-5@2x.png" />
    
    </header>
    
  );
};


export default SignUp;

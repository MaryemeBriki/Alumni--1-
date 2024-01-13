import * as React from "react";
import { useCallback } from "react";
import { navigate } from "gatsby";
import Item from "../components/item";
import * as styles from "./membres.module.css";

const Membres = () => {
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
    navigate("/laureat");
  }, []);

  const onItemContainer2Click = useCallback(() => {
    navigate("/");
  }, []);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, []);

  return (
    <div className={styles.membres}>
      <div className={styles.membresChild} />
      <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
      <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
      <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
      <img className={styles.linkedinIcon} alt="" src="/linkedin.svg" />
      <div className={styles.contacterNous}>{`Contacter-nous  `}</div>
      <img
        className={styles.messageFillIcon}
        alt=""
        src="/message-fill@2x.png"
      />
      <img className={styles.sendFillIcon} alt="" src="/send-fill@2x.png" />
      <div
        className={styles.informatiqueWrapper}
        onClick={onFrameContainerClick}
      >
        <div className={styles.informatique}>Informatique</div>
      </div>
      <div className={styles.mathWrapper}>
        <div className={styles.math}>Math</div>
      </div>
      <div className={styles.anglaisWrapper}>
        <div className={styles.math}>Anglais</div>
      </div>
      <div className={styles.physiqueWrapper}>
        <div className={styles.math}>Physique</div>
      </div>
      <div className={styles.tmwWrapper}>
        <div className={styles.math}>TMW</div>
      </div>
      <div className={styles.smerWrapper}>
        <div className={styles.math}>SMER</div>
      </div>
      <div className={styles.svtWrapper}>
        <div className={styles.svt}>SVT</div>
      </div>
      <div className={styles.franaisWrapper}>
        <div className={styles.math}>Français</div>
      </div>
      <div className={styles.ecoleNormaleSuperiere}>
        Ecole Normale Superiere De Rabat
      </div>
      <div className={styles.choisissezLeDpartementContainer}>
        <p className={styles.choisissezLeDpartement}>
          Choisissez le département dans lequel vous souhaitez voir les inscrits
        </p>
        <p className={styles.choisissezLeDpartement}>​</p>
      </div>
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

export default Membres;

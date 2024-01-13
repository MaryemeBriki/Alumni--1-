import * as React from "react";
import { useCallback } from "react";
import { navigate } from "gatsby";
import Item from "../components/item";
import ContainerCard from "../components/container-card";
import * as styles from "./laureat.module.css";

const Laureat = () => {
  const onItemContainerClick = useCallback(() => {
    navigate("/login");
  }, []);

  const onItemContainer1Click = useCallback(() => {
    navigate("/sign-up");
  }, []);

  const onItemContainer3Click = useCallback(() => {
    navigate("/login");
  }, []);

  const onVoirLesDtails2Click = useCallback(() => {
    navigate("/details");
  }, []);

  const onVoirLesDtails5Click = useCallback(() => {
    navigate("/details");
  }, []);

  const onItemContainer2Click = useCallback(() => {
    navigate("/");
  }, []);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, []);

  const onVoirLesDtailsClick = useCallback(() => {
    navigate("/details");
  }, []);

  const onVoirLesDtails3Click = useCallback(() => {
    navigate("/details");
  }, []);

  return (
    <div className={styles.laureat}>
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
      <div className={styles.ellipseParent}>
        <img className={styles.frameChild} alt="" src="/ellipse-70@2x.png" />
        <div className={styles.maryemeBriki}>Maryeme Briki</div>
        <div className={styles.cleInfo}>CLE Info</div>
        <div
          className={styles.voirLesDtailsContainer}
          onClick={onVoirLesDtailsClick}
        >
          <p className={styles.voirLesDtails}>{`>voir les détails`}</p>
        </div>
      </div>
      <ContainerCard
        imageDimensions="/ellipse-70@2x.png"
        personName="Nisrine Aida"
        propTop="253px"
        onVoirLesDtails2Click={onVoirLesDtails2Click}
      />
      <div className={styles.ellipseGroup}>
        <img className={styles.frameItem} alt="" src="/ellipse-70@2x.png" />
        <div className={styles.chaimaeBenaoui}>Chaimae benaoui</div>
        <div className={styles.cleInfo1}>CLE Info</div>
        <div
          className={styles.voirLesDtailsContainer}
          onClick={onVoirLesDtails3Click}
        >
          <p className={styles.voirLesDtails}>{`>voir les détails`}</p>
        </div>
      </div>
      <ContainerCard
        imageDimensions="/ellipse-70@2x.png"
        personName="Oumaima ben.."
        propTop="512px"
        onVoirLesDtails2Click={onVoirLesDtails5Click}
      />
      <div className={styles.laureatChild} />
      <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
      <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
      <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
      <img className={styles.linkedinIcon} alt="" src="/linkedin.svg" />
      <div className={styles.contacterNous}>Contacter-nous</div>
      <img
        className={styles.messageFillIcon}
        alt=""
        src="/message-fill@2x.png"
      />
      <img className={styles.sendFillIcon} alt="" src="/send-fill@2x.png" />
      <div className={styles.cleInformatique}>CLE INFORMATIQUE</div>
      <img className={styles.removal5Icon} alt="" src="/removal-5@2x.png" />
    </div>
  );
};

export default Laureat;

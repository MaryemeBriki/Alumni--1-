import * as React from "react";
import { useCallback } from "react";
import { navigate } from "gatsby";
import Item from "../components/item";
import * as styles from "./details.module.css";

const Details = () => {
  const onItemContainerClick = useCallback(() => {
    navigate("/login");
  }, []);

  const onItemContainer1Click = useCallback(() => {
    navigate("/sign-up");
  }, []);

  const onItemContainer3Click = useCallback(() => {
    navigate("/login");
  }, []);

  const onItemContainer2Click = useCallback(() => {
    navigate("/");
  }, []);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, []);

  return (
    <div className={styles.details}>
      <img className={styles.detailsChild} alt="" src="/ellipse-70@2x.png" />
      <div className={styles.nomPrnom}>Nom Prénom</div>
      <div className={styles.spcialisationParent}>
        <div className={styles.spcialisation}>Spécialisation:</div>
        <div className={styles.anneDinscription}>Année d’inscription :</div>
        <div className={styles.anneDeDiplome}>Année de diplome :</div>
        <div className={styles.adresseEMail}>Adresse e-mail :</div>
        <div className={styles.ville}>ville :</div>
        <div className={styles.titreDePoste}>Titre de poste actuelle :</div>
        <div className={styles.profilLinkedln}>Profil Linkedln :</div>
        <div className={styles.nomDeLentreprise}>
          Nom de l’entreprise actuelel :
        </div>
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
      <div className={styles.detailsItem} />
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
      <img className={styles.removal5Icon} alt="" src="/removal-5@2x.png" />
    </div>
  );
};

export default Details;

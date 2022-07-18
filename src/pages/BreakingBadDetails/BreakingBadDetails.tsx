import './BreakingBadDetails.css';
import { useEffect } from "react";
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedCharacters, emptyCharacter } from "../../redux/slices/breakingbad";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonItem } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import BreakingDetails from "../../components/BreakingDetails";

const BreakingBadDetails: React.FC = () => {
  const maintitle = "Breaking Bad";
  const title = "Character";
  const { id } = useParams<{ id: string }>();
  const dispatch =  useDispatch();
  const character = useSelector((state: any) => state.breaking.character);

  useEffect(() => {
    if(id) {
      initUIData();
    }

    return () => {
      dispatch(emptyCharacter())
    }
  }, [])

  const initUIData = () => {
    dispatch(
      getSelectedCharacters({
        id
      })
    )
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle data-testid='maintitle'>{maintitle}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem class="header">
          <IonItem routerLink="/">
            <IonIcon data-testid='backicon' icon={arrowBack} class="pointer"></IonIcon>
          </IonItem>
          {character && (
              <IonTitle data-testid='charactertitle'>{`${title} > ${character.name}`}</IonTitle>
          )}
        </IonItem>
        {character && <BreakingDetails details={character} />}
      </IonContent>
    </IonPage>
  );
};

export default BreakingBadDetails;

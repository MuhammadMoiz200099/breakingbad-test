import './BreakingBadDetails.css';
import { useEffect } from "react";
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedCharacters } from "../../redux/slices/breakingbad";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonItem } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import BreakingDetails from "../../components/BreakingDetails";

const BreakingBadDetails: React.FC = () => {
  const title = "Character";
  const { id } = useParams<{ id: string }>();
  const dispatch =  useDispatch();
  const character = useSelector((state: any) => state.breaking.character);

  useEffect(() => {
    if(id) {
      initUIData();
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
          <IonTitle>Breaking Bad</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem class="header">
          <IonItem routerLink="/">
            <IonIcon icon={arrowBack} class="pointer"></IonIcon>
          </IonItem>
          {character && (
              <IonTitle>{`${title} > ${character.name}`}</IonTitle>
          )}
        </IonItem>
        {character && <BreakingDetails details={character} />}
      </IonContent>
    </IonPage>
  );
};

export default BreakingBadDetails;

import { 
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonThumbnail,
} from '@ionic/react';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';
import { getAllCharacters } from "../redux/slices/breakingbad";

const Home: React.FC = () => {
  const title = 'Breaking Bad';
  const subtitle = 'Breaking Bad Characters';
  const dispatch =  useDispatch();
  const characters = useSelector((state: any) => state.breaking.characters);

  useEffect(() => {
    initUIData();
  }, [])

  const initUIData = () => {
    dispatch(
      getAllCharacters()
    )
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle data-testid='classtitle'>Breaking Bad</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonListHeader>
            <IonLabel data-testid='classsubtitle'>Breaking Bad Characters</IonLabel>
          </IonListHeader>
          {characters && characters.length ? (
            <>
              {characters.map((item: any, idx: number) => (
                <IonItem key={idx} routerLink={`/details/${item.char_id}`} button>
                  <IonThumbnail slot="start">
                    <img src={item.img}/>
                  </IonThumbnail>
                  <IonLabel>
                    <h2>{item.name}</h2>
                    <p>{item.birthday}</p>
                  </IonLabel>
                </IonItem>
              ))}
            </>
          ) : null} 
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;

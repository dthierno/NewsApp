# Application de Traduction Yoda

Cette application permet de traduire du texte en utilisant l'API de traduction Yoda. Vous pouvez ajouter du texte à traduire, afficher les traductions précédentes et supprimer des traductions.

## Installation

1. Clonez le dépôt :
    ```sh
    git clone https://github.com/dthierno/YodaExpoApp.git
    cd YodaExpoApp
    ```
2. Installez les dépendances :
    ```sh
    npm install
    ```

## Utilisation

1. Lancez l'application :
    ```sh
    npx expo start
    ```
2. Ouvrez l'application sur votre émulateur ou appareil physique.

## Composants

### `AddTranslation`

Ce composant permet d'ajouter du texte à traduire. Il comprend un champ de saisie et un bouton de soumission.

```tsx
import { Text, TextInput } from 'react-native';
import styles from './styles';
import React from 'react';

type AddTranslationType = {
  translation: string,
  title?: string,
  description?: string,
  handleSubmit: () => void,
  setTranslation: (value: React.SetStateAction<string>) => void
}

const AddTranslation = ({ 
  translation: translation,
  title = "Your Yoda Application",
  description = "Add the text you wish to translate", 
  handleSubmit, 
  setTranslation: setTranslation 
} : AddTranslationType) => {
  return (
    <>
      <Text style={styles.title}>
        {title}
      </Text>

      <Text style={styles.description}>
        {description}
      </Text>
      
      <TextInput
        returnKeyType='done'
        style={styles.input}
        value={translation} 
        onChangeText={value => setTranslation(value)}  
        onSubmitEditing={handleSubmit} 
      />
    </>
  )
}

export default AddTranslation
```

### `DisplayTranslation`

Ce composant permet d'afficher les traductions précédentes. Il comprend une liste des traductions et un état vide si aucune traduction n'est disponible.

```tsx
import React from 'react';
import { FlatList } from 'react-native';
import { Translation } from "@/app/index";
import styles from './styles';
import TranslationCard from '../TranslationCard/TranslationCard';
import EmptyState from '../EmptyState/EmptyState';

type DisplayTranslationProps = {
    translationList: Translation[],
    handleDelete: (todoId: number) => void,
};

const DisplayTranslation = ({
    translationList: todoList,
    handleDelete
}: DisplayTranslationProps) => {
  return (
        <>
            { todoList.length > 0 ?
                <FlatList 
                    style={styles.list}
                    data={todoList}
                    showsVerticalScrollIndicator={false} 
                    keyExtractor={(item) => `${item._id}`}
                    renderItem={({ item }) => (
                        <TranslationCard handleDelete={handleDelete} data={item} />
                    )}
                />
            :
                <EmptyState>
                    You have no previous translations
                </EmptyState>
            }
        </>
    );
};

export default DisplayTranslation;
```

## Fonctions Principales

### `handleSubmit`
Cette fonction envoie le texte à traduire à l'API de traduction Yoda et ajoute la traduction à la liste des traductions.

```tsx
async function handleSubmit() {
    try {
      const response = await axios.post("https://api.funtranslations.com/translate/yoda", {
          text: translation,
      });

      const data = response.data.contents.translated;

      if (data.trim().length > 0) {
        const newTranslation: Translation = createNewTranslation(
          translationList,
          translation,
          data
        );
        addNewTranslation(translationList, newTranslation);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 429) {
        alert("Yoda translation API rate limit exceeded. Please try again later.");
      } else {
        alert("An error occurred. Please try again.");
      }
   }
}
```

### `handleDelete`

Cette fonction supprime une traduction de la liste des traductions.

```tsx
function handleDelete(todoId: number): void {
    const updatedTranslationList = translationList.filter(
      (todo) => todo._id != todoId
    );
    setTranslationList(updatedTranslationList);
}
```

### `createNewTranslation`
Cette fonction crée une nouvelle traduction avec un identifiant unique.

```tsx
function createNewTranslation(
    prevTranslationList: Translation[],
    newTranslationText: string,
    translation: string,
  ): Translation {
    return {
      _id:
        prevTranslationList.length > 0
          ? [...prevTranslationList].slice(-1)[0]._id + 1
          : 0,
      text: newTranslationText.trim(),
      translation: translation,
   };
}
```

### `addNewTranslation`
Cette fonction ajoute une nouvelle traduction à la liste des traductions.

```tsx
function addNewTranslation(
    prevTranslationList: Translation[],
    newTranslation: Translation
  ): void {
    setTranslationList([...prevTranslationList, newTranslation]);
    setTranslation("");
}
```

## Configuration

Assurez-vous de configurer correctement l'API de traduction Yoda dans votre projet. Vous pouvez modifier l'URL de l'API dans la fonction `handleSubmit`.

## Auteurs

- **Thierno Diallo**
- **Andy Nguema Luemba**
- **Flora Kang**
- **Kevin Guo**
- **Brice Bakoup Wafo**

## Licence
Ce projet est sous licence MIT - voir le fichier LICENSE pour plus de détails.

---

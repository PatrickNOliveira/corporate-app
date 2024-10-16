import React, { useState } from 'react';
import { TouchableOpacity, Modal, FlatList, TouchableWithoutFeedback } from 'react-native';
import * as S from './styles'

// Tipagem para os idiomas
interface Language {
    label: string;
    value: string;
    flag: any; // Você pode usar ImageSourcePropType ao invés de 'any' se quiser uma tipagem mais específica
}

// Lista de idiomas
const languages: Language[] = [
    { label: 'Português', value: 'pt', flag: require('../../../assets/brazil.png') },
    { label: 'English', value: 'en', flag: require('../../../assets/usa.png') },
    { label: 'Español', value: 'es', flag: require('../../../assets/spain.png') },
];

export const LanguageDropdown: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]); // Idioma padrão
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    const selectLanguage = (language: Language) => {
        setSelectedLanguage(language);
        setModalVisible(false);
    };

    return (
        <S.Container>
            {/* Botão que abre o modal */}
            <S.Button onPress={() => setModalVisible(true)}>
                <S.SelectedLanguageContainer>
                    <S.Flag source={selectedLanguage.flag} />
                    <S.SelectedText>{selectedLanguage.label}</S.SelectedText>
                </S.SelectedLanguageContainer>
            </S.Button>

            {/* Modal com a lista de opções */}
            <Modal visible={modalVisible} transparent={true} animationType="slide">
                <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                    <S.ModalBackground>
                        <S.ModalContainer>
                            <FlatList
                                data={languages}
                                keyExtractor={(item) => item.value}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => selectLanguage(item)}>
                                        <S.LanguageOption>
                                            <S.Flag source={item.flag} />
                                            <S.LanguageText>{item.label}</S.LanguageText>
                                        </S.LanguageOption>
                                    </TouchableOpacity>
                                )}
                            />
                        </S.ModalContainer>
                    </S.ModalBackground>
                </TouchableWithoutFeedback>
            </Modal>
        </S.Container>
    );
};
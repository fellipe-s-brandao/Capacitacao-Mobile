import React, { useState } from "react";
import {
  Card,
  Avatar,
  ViewModal,
  ButtonModal,
  TextModal,
  TextButtonModal,
  ContainerModal,
  TextCard,
  TextDescriptionModal,
  AvatarModal
} from "./styles";
import { FlatList } from "react-native";

export default function CarrouselItem({ data }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [configModal, setConfigModal] = useState("");

  const filmes = [
    {
      id: 1,
      name: "Homem Aranha",
      color: data[0],
      url_image:
        "https://www.mixadesivos.com.br/adesivos/2adesivo-de-parede-homem-aranha-modelo-2.jpg",
      description:
        "Poderes e habilidades: O Homem-Aranha tem força sobre-humana, proporcional à de uma aranha, pode fixar-se a paredes e tetos, incrível agilidade e possui um “sentido de aranha” que o avisa sobre o perigo.",
    },
    {
      id: 2,
      name: "Hulk",
      color: data[1],
      url_image:
        "https://www.dicaspraticas.com.br/wp-content/uploads/2020/07/desenho-do-hulk-1.jpg",
      description: "O Hulk possui grande resistência física, tornando-o próximo a invulnerabilidade. A pele dele suporta balas, explosões e altíssimas e baixíssimas temperaturas. Ele pode sobreviver no espaço e já sobreviveu a uma reentrada na atmosfera terrestre. O Hulk é imune a todas as doenças terrestres."
    },
    {
      id: 3,
      name: "Capitão America",
      color: data[2],
      url_image:
        "https://lh5.googleusercontent.com/proxy/iaZ6nhGKbtdMRVBHUO4rqr5MMwKm17YRrnAeca6tcN3FQdmZq04ZXyykWKx-MmSA3r2uYJFQIzaUc73TUEnZ5tb0d7HUZJHC9yxU1QUWQVfDGsZXiSjOLG_hD302dGmg=w1200-h630-p-k-no-nu",
        description: "Poderes e habilidades: Um dos melhores lutadores do mundo, Rogers conhece inúmeras técnicas de combate corpo-a-corpo, mesmo se não tem superpoderes. Porém, graças ao soro do Supersoldado, é dono de força, agilidade, resistência, reflexos e capacidade de cura superiores aos dos seres humanos normais."
    },
  ];

  function handleOpenModal(item) {
    setConfigModal([item.name, item.color, item.url_image, item.description]);
    setModalVisible(true);
  }

  return (
    <>
      <ContainerModal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
      >
        <ViewModal color={configModal[1]}>
          <TextModal>{configModal[0]}</TextModal>
          <AvatarModal source={{ uri: configModal[2] }} />
          <TextDescriptionModal>{configModal[3]}</TextDescriptionModal>
          <ButtonModal onPress={() => setModalVisible(false)}>
            <TextButtonModal>Fechar</TextButtonModal>
          </ButtonModal>
        </ViewModal>
      </ContainerModal>

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id}
        horizontal
        snapToAlignment={"start"}
        scrollEventThrottle={16}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card color={item.color} onPress={() => handleOpenModal(item)}>
            <Avatar source={{ uri: item.url_image }} />
            <TextCard>{item.name}</TextCard>
          </Card>
        )}
      />
    </>
  );
}

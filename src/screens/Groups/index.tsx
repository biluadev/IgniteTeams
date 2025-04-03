// import { Container, Title } from "./styles";
import * as S from "./styles";
import { Header } from "@components/Header";
import { useNavigation } from "@react-navigation/native";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("new");
  }

  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Ainda não foi cadastrada nenhuma turma!" />
        )}
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </S.Container>
  );
}

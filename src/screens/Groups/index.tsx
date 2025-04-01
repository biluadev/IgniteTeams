// import { Container, Title } from "./styles";
import * as S from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />
      <GroupCard title="Galera do ignite" />
    </S.Container>
  );
}

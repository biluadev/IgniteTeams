import { TouchableOpacityProps } from "react-native";
import { Container, FilterStyleProps, Tittle } from "./styles";

type Props = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <Container isActive={isActive} {...rest}>
      <Tittle>{title}</Tittle>
    </Container>
  );
}

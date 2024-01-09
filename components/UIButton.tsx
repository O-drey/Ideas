import { Button } from "react-native";
const UIButton = ({
  title,
  accessibilityLabel,
  color,
  handleClick,
}: {
  title: string;
  accessibilityLabel: string;
  color: string;
  handleClick: () => {};
}) => {
  return (
    <Button
      color={color}
      accessibilityLabel={accessibilityLabel}
      title={title}
      onPress={handleClick}
    />
  );
};

export default UIButton;

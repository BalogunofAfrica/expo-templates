import {
  ActivityIndicator,
  ActivityIndicatorProps,
  ScrollBox,
  ScrollBoxProps,
} from "@/components/base";

export type ListViewProps = ScrollBoxProps & {
  children: React.ReactNode;
  isLoading?: boolean;
  loadingProps?: ActivityIndicatorProps;
  loadingStyle?: "light" | "dark";
};

export function ListView({
  children,
  isLoading = false,
  loadingProps,
  loadingStyle = "dark",
  ...rest
}: ListViewProps) {
  return (
    <ScrollBox {...rest}>
      {children}
      {isLoading ? (
        <ActivityIndicator
          alignSelf="center"
          type={loadingStyle}
          {...loadingProps}
        />
      ) : null}
    </ScrollBox>
  );
}

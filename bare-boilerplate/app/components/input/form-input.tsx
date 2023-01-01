import {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
  UnPackAsyncDefaultValues,
  useController,
} from "react-hook-form";

import { RegularInput, RegularInputProps } from "./regular-input";

type TRule = Omit<
  RegisterOptions,
  "valueAsNumber" | "valueAsDate" | "setValueAs"
>;

export type RuleType<T> = { [name in keyof T]: TRule };
export type InputControllerType<T extends FieldValues> = {
  name: Path<UnPackAsyncDefaultValues<T>>;
  control: Control<T>;
  rules?: TRule;
};

export type FormInputProps<T extends FieldValues> = RegularInputProps &
  InputControllerType<T>;

/**
 * Custom `TextInput` component that supports `react-hook-form`.
 */
export function FormInput<T extends FieldValues>({
  control,
  name,
  rules,
  ...rest
}: FormInputProps<T>) {
  const { field, fieldState } = useController({
    control,
    name,
    rules,
  });

  return (
    <RegularInput
      footer={fieldState?.error?.message}
      onChangeText={field.onChange}
      onRightIconPress={() => field.onChange("")}
      // @ts-expect-error error from refs
      ref={field.ref}
      value={field.value as string}
      {...rest}
    />
  );
}

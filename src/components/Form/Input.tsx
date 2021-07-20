import { FormControl, FormLabel, Input as InputChakra, InputProps as InputChakraProps } from "@chakra-ui/react";

interface InputProps extends InputChakraProps {
  name: string;
  label?: string
}

export function Input({ name, label, ...res}: InputProps) {
  return (
    <FormControl>
      { !!label && <FormLabel htmlFor="email">{label}</FormLabel>}

      <InputChakra
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg"
        {...res}
      />
    </FormControl>
  )
}

import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ToggleDarkColor = () => {
    const {toggleColorMode, colorMode} = useColorMode();

    return (
      <HStack>
        <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
        {colorMode === 'dark' ? <Text>Dark Mode</Text> : <Text>Light Mode</Text>}
      </HStack>
  )
}

export default ToggleDarkColor;

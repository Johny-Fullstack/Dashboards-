import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'

import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile'
import { RiMenuLine } from 'react-icons/ri';
import { Text } from "@chakra-ui/react";
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      { !isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >

        </IconButton>
      ) }
      <Flex>
        <Logo />
      </Flex>
        { isWideVersion &&     
          <Text
          color="secondary.900"
            ml="480"
            fontSize="26"
            fontWeight="bold"
            letterSpacing="tight"
            
          >
            GUIDANCE 
            <Text as="span" fontWeight="bold" ml="2" color="gray.700">BB Consórcio</Text>
          </Text> 
        } 
        <Flex align="center" ml="auto" >
          <NotificationsNav />
          <Profile showProfileData={isWideVersion} />
        </Flex>
    </Flex>
  );
}
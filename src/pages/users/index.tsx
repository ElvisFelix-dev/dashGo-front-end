import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text
}
from '@chakra-ui/react'

import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Form/Sidebar'
import { Pagination } from '../../components/Pagination';

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} max="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={ RiAddLine } fontSize="20"/>}
            >
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorSchema="pink"/>
                </Th>
                <Th>Usuários</Th>
                <Th>Data de cadastro</Th>
                <Th w="8"></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px="6" >
                  <Checkbox colorSchema="pink"/>
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Elvis Felix</Text>
                    <Text fontSize="sm" color="gray.300">elvisjaspion@gmail.com</Text>
                  </Box>
                </Td>
                <Td>12 de Julho, 2021</Td>
                <Td>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="purple"
                  leftIcon={<Icon as={ RiPencilLine } fontSize="16"/>}
                >
                  Editar
                </Button>

                </Td>
              </Tr>

            </Tbody>

            <Tbody>
              <Tr>
                <Td px="6" >
                  <Checkbox colorSchema="pink"/>
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Ariane Gall</Text>
                    <Text fontSize="sm" color="gray.300">arianegall@gmail.com</Text>
                  </Box>
                </Td>
                <Td>15 de Julho, 2021</Td>
                <Td>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="purple"
                  leftIcon={<Icon as={ RiPencilLine } fontSize="16"/>}
                >
                  Editar
                </Button>

                </Td>
              </Tr>

            </Tbody>

            <Tbody>
              <Tr>
                <Td px="6" >
                  <Checkbox colorSchema="pink"/>
                </Td>

                <Td>
                  <Box>
                    <Text fontWeight="bold">Jessy Jay</Text>
                    <Text fontSize="sm" color="gray.300">jessyjay@gmail.com</Text>
                  </Box>
                </Td>
                <Td>20 de Julho, 2021</Td>
                <Td>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="purple"
                  leftIcon={<Icon as={ RiPencilLine } fontSize="16"/>}
                >
                  Editar
                </Button>

                </Td>
              </Tr>

            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}

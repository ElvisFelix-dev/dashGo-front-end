import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { RiGradienterFill } from 'react-icons/ri';
import { Sidebar } from '../components/Form/Sidebar';
import { Header } from "../components/Header";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.green[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-07-06T14:14:00.000Z',
      '2021-07-05T17:04:00.000Z',
      '2021-07-04T22:24:00.000Z',
      '2021-07-03T19:11:00.000Z',
      '2021-07-03T09:30:00.000Z',
      '2021-07-02T08:06:00.000Z',
      '2021-07-01T10:54:00.000Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }

}

const series = [
  { name: 'series1', data: [231, 433, 80, 300, 58, 209, 100] }
]

export default function Dashboard() {
  return(
    <Flex
      direction="column" h="100vh"
    >
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar/>

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex=start">
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Inscritos da semana</Text>
            <Chart options={options} series={series} type="area" height={160}/>
          </Box>

          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
            <Chart options={options} series={series} type="area" height={160}/>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}

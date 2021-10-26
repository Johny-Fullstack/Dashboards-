import { Box, Flex, SimpleGrid, Text, CloseButton } from "@chakra-ui/react";
import dynamic from 'next/dynamic';




const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})


const options = {
  chart: {
    type: "area",
    height: 230,
    foreColor: "#0388E5",
    toolbar: {
      autoSelected: "pan",
      show: false
    }
  },
  colors: ["#C70039", "#072AC0" ],
  stroke: {
    width: 3
  },
  grid: {
    borderColor: "#555",
    clipMarkers: false,
    yaxis: {
      lines: {
        show: false
      }
      
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    gradient: {
      enabled: true,
      opacityFrom: 0.70,
      opacityTo: 0
    }
  },
  markers: {
    size: 5,
    colors: ["#F5A9CD", "#50ABF9" ],
    strokeColor: ["#C70039", "#0388E5"],
    strokeWidth: 3
  },

  tooltip: {
    theme: "dark"
  },
  xaxis: {
    axisTicks: {
      color: "#C70039"
    },
    categories: [
      " Jan",
      " Fev",
      " Mar",
      " Abr",
      " Mai",
      " Jun",
      " Jul",
      " Ago",
      " Set",
      " Out",
      " Nov",
      " Dez"
      
    ],
  },
  yaxis: {
    min: 0,
    tickAmount: 4
  }
};
const series = [
  { name: 'Orçado', data: [1500, 12000, 7000, 3500, 6800, 5500, 1090, 8050, 9800, 7500, 9800, 5500] },
  { name: 'Realizado', data: [1900, 11000, 9000, 2500, 9800, 7500, 8090, 9050, 7800, 9500, 10800, 8500] }
]

export default function Graphic() {
  return(
    <Flex direction="column" h="80vh">
      <SimpleGrid flex="1" gap="6" minChildWidth="600px" align="flex-start">
            <Box
              cursor="pointer"
              p={["100"]}
              bg="gray.50" 
              borderRadius={8}
              pb="3"
            >
              <Text fontSize="lg" fontWeight="bold" textAlign="center" mb="4" color="secondary.900">Gráfico Mensal</Text>
             
              <Chart options={options} series={series} type="area" height={160}/>
            </Box>
      </SimpleGrid>
    </Flex>  
  )
}
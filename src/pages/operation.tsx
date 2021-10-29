import { Box, Flex, SimpleGrid, Text, theme, } from "@chakra-ui/react";
import React, {useState} from 'react'
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import Modal from "react-modal";
import dynamic from 'next/dynamic';
import Graphic from "../components/Graphic";


const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})




const state = {
          
  series: [76],
  options: {
    
    chart: {
      type: 'radialBar',
      offsetY: -20,
      sparkline: {
        enabled: true
        
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#E5E7EA",
          strokeWidth: '97%',
          margin: 5, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: '#9C9EA1 ',
            opacity: 1,
            blur: 2
            
          }
        },
        dataLabels: {
          name: {
            show: false
          },
          value: {
            offsetY: -2,
            fontSize: '22px'
          }
        }
      }
    },
    grid: {
      padding: {
        top: -10
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        shadeIntensity: 0.4,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91]
      },
    },
    labels: ['Average Results'],
  },


};




export default function Business() {

  const [isNewTransectionModalOpen, setIsNewTransectionModalOpen] = useState (false);

  function handleOpenNewTransectionModal() {
      setIsNewTransectionModalOpen(true);
  }

  function handleCloseNewTransectionModal() {
      setIsNewTransectionModalOpen(false);
  }        

  return (
    
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                              {/* Net Promoter Score */}
          <Box onClick={handleOpenNewTransectionModal}
            cursor="pointer"
            p={["6", "8"]}
            bg="gray.50"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" fontWeight="bold" mb="4" color="secondary.900">Net Promoter Score</Text>
            <Text fontSize="sm" fontWeight="bold" mb="2" color="gray.600">Orçado: R$ 1.400,00</Text>
            <Text fontSize="sm" fontWeight="bold" mb="2" color="gray.600">Realizado: R$ 1.050,00</Text>
            <Chart options={state.options} series={state.series} type="radialBar"  height={260} />
          </Box>
            <Modal 
              isOpen={isNewTransectionModalOpen}
              onRequestClose={handleCloseNewTransectionModal}
              p={["6", "8"]}
              bg="gray.50"
              borderRadius={8}
              pb="4"
              w="60"
              >
              <Graphic/>  
            </Modal>
                                {/*Devolução Fundo de Reserva */}
          <Box onClick={handleOpenNewTransectionModal}
            cursor="pointer"
            p={["6", "8"]}
            bg="gray.50"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="xl" fontWeight="bold" mb="5" color="secondary.900">Devolução Fundo de Reserva</Text>
            <Text fontSize="sm" fontWeight="bold" mb="2" color="gray.600">Orçado: R$ 1.400,00</Text>
            <Text fontSize="sm" fontWeight="bold" mb="2" color="gray.600">Realizado: R$ 1.050,00</Text>
            <Chart options={state.options} series={state.series} type="radialBar" height={260} />
          </Box>
            <Modal 
                isOpen={isNewTransectionModalOpen}
                onRequestClose={handleCloseNewTransectionModal}
                p={["6", "8"]}
                bg="gray.50"
                borderRadius={8}
                pb="4"
                w="60"
                >
                <Graphic/>  
              </Modal>
                                  {/* Funcionalidades Digitais */}
          <Box onClick={handleOpenNewTransectionModal}
            cursor="pointer"
            p={["6", "8"]}
            bg="gray.50"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="xl" fontWeight="bold" mb="4" color="secondary.900">Funcionalidades Digitais</Text>
            <Text fontSize="sm" fontWeight="bold" mb="2" color="gray.600">Orçado: R$ 1.400,00</Text>
            <Text fontSize="sm" fontWeight="bold" mb="2" color="gray.600">Realizado: R$ 1.050,00</Text>
            <Chart options={state.options} series={state.series} type="radialBar" height={260} />
            
          </Box>
            <Modal 
              isOpen={isNewTransectionModalOpen}
              onRequestClose={handleCloseNewTransectionModal}
              p={["6", "8"]}
              bg="gray.50"
              borderRadius={8}
              pb="4"
              w="60"
              >
              <Graphic/>  
            </Modal>
                                  {/*Processos Automatizados*/}
          <Box onClick={handleOpenNewTransectionModal}
            cursor="pointer"
            p={["6", "8"]}
            bg="gray.50"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="xl" fontWeight="bold" mb="4" color="secondary.900">Processos Automatizados</Text>
            <Text fontSize="sm" fontWeight="bold" mb="2" color="gray.600">Orçado: R$ 1.400,00</Text>
            <Text fontSize="sm" fontWeight="bold" mb="2" color="gray.600">Realizado: R$ 1.050,00</Text>
            <Chart options={state.options} series={state.series} type="radialBar" height={260} />
          </Box>
            <Modal 
              isOpen={isNewTransectionModalOpen}
              onRequestClose={handleCloseNewTransectionModal}
              p={["6", "8"]}
              bg="gray.50"
              borderRadius={8}
              pb="4"
              w="60"
              >
              <Graphic/>  
            </Modal>
                                {/*Processos Migrados*/}
          <Box onClick={handleOpenNewTransectionModal}
            cursor="pointer"
            p={["6", "8"]}
            bg="gray.50"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="xl" fontWeight="bold" mb="4" color="secondary.900">Processos Migrados</Text>
            <Text fontSize="sm" fontWeight="bold" mb="2" color="gray.600">Orçado: R$ 1.400,00</Text>
            <Text fontSize="sm" fontWeight="bold" mb="2" color="gray.600">Realizado: R$ 1.050,00</Text>
            <Chart options={state.options} series={state.series} type="radialBar" height={260} />
          </Box>
            <Modal 
              isOpen={isNewTransectionModalOpen}
              onRequestClose={handleCloseNewTransectionModal}
              p={["6", "8"]}
              bg="gray.50"
              borderRadius={8}
              pb="4"
              w="60"
              >
              <Graphic/>  
            </Modal>
                                  {/*Ações de Capital Humano*/}
          <Box onClick={handleOpenNewTransectionModal}
            cursor="pointer"
            p={["6", "8"]}
            bg="gray.50"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="xl" fontWeight="bold" mb="4" color="secondary.900">Ações de Capital Humano</Text>
            <Text fontSize="sm" fontWeight="bold" mb="2" color="gray.600">Orçado: R$ 1.400,00</Text>
            <Text fontSize="sm" fontWeight="bold" mb="2" color="gray.600">Realizado: R$ 1.050,00</Text>
            <Chart options={state.options} series={state.series} type="radialBar" height={260} />
          </Box>
            <Modal 
              isOpen={isNewTransectionModalOpen}
              onRequestClose={handleCloseNewTransectionModal}
              p={["6", "8"]}
              bg="gray.50"
              borderRadius={8}
              pb="4"
              w="60"
              >
              <Graphic/>  
            </Modal>
                                {/*Base Cotistas ( % )*/}
          <Box onClick={handleOpenNewTransectionModal}
            cursor="pointer"
            p={["6", "8"]}
            bg="gray.50"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="xl" fontWeight="bold" mb="4" color="secondary.900">Base Cotistas ( % )</Text>
            <Text fontSize="sm" fontWeight="bold" mb="2" color="gray.600">Orçado: R$ 1.400,00</Text>
            <Text fontSize="sm" fontWeight="bold" mb="2" color="gray.600">Realizado: R$ 1.050,00</Text>
            <Chart options={state.options} series={state.series} type="radialBar" height={260} />
          </Box>
            <Modal 
              isOpen={isNewTransectionModalOpen}
              onRequestClose={handleCloseNewTransectionModal}
              p={["6", "8"]}
              bg="gray.50"
              borderRadius={8}
              pb="4"
              w="60"
              >
              <Graphic/>  
            </Modal>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
import { Box, Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { Sparkle } from 'phosphor-react';
import { useDistribute } from '../../hooks/useDistribute';
import { useCreateNewFlow } from '../../hooks/useCreateFlow';
import { useLoading } from '../../hooks/useLoading';

export default function Subscribe({ dao }: { dao: any }) {
  const { createNewFlow } = useCreateNewFlow();
  const { distribute } = useDistribute();
  const { loading } = useLoading();

  const subscribe = async () => {
    console.log('subscribing to ', dao.name);
    const amount = 1e17;
    const flowRate = 1e14;
    await distribute(amount);
    await createNewFlow(flowRate.toString());
    await loading(5);
  };

  return (
    <Box
      px={4}
      py={8}
      rounded='xl'
      shadow='sm'
      borderWidth='1px'
      textAlign='center'
      w='full'
      borderColor={useColorModeValue('gray.300', 'gray.700')}
      _hover={{ borderColor: useColorModeValue('gray.400', 'gray.600') }}
      transition='all 0.1s ease-in-out'
    >
      <Text fontSize='xl' fontWeight='bold' mb={6}>
        Become a member of <b>{dao.name}</b>
      </Text>

      <Button rounded='3xl' onClick={subscribe}>
        <Flex alignItems='center'>
          <Text mr={2}>Subscribe now</Text>
          <Sparkle size={24} />
        </Flex>
      </Button>
    </Box>
  );
}


import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

import { useEffect } from 'react'

export const CustomModal = ({msg}) => {
 
  const [opened, { open, close }] = useDisclosure(false);


  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        asdfasdfasdf
      </Modal>
      {
        open
      }
    </>
  );
}
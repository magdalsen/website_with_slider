import {
  Button,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Checkbox } from '@chakra-ui/react';
import { FormValues, schemaContact } from '../../components/validations/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import style from './ContactForm.module.scss';

export function ContactForm() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      accept: false,
    },
    resolver: yupResolver(schemaContact),
    mode: 'onBlur',
  });
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <>
      <Button variant='solid' size='sm' onClick={onOpen}>
        Kontakt
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody pb={6}>
              <FormControl>
                <div>
                  IMIĘ <span className={style.star}>*</span>
                </div>
                <Controller
                  name='name'
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type='text'
                      placeholder='- wpisz -'
                      htmlSize={20}
                      width='auto'
                    />
                  )}
                />
              </FormControl>

              <FormControl mt={4}>
                <div>
                  NAZWISKO <span className={style.star}>*</span>
                </div>
                <Controller
                  name='surname'
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type='text'
                      placeholder='- wpisz -'
                      htmlSize={20}
                      width='auto'
                    />
                  )}
                />
              </FormControl>

              <FormControl mt={4}>
                <div>
                  ADRES E-MAIL <span className={style.star}>*</span>
                </div>
                <Controller
                  name='email'
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type='email'
                      placeholder='- wpisz -'
                      htmlSize={20}
                      width='auto'
                    />
                  )}
                />
              </FormControl>

              <div className={style.reqFields}>* - pola wymagane</div>

              <FormControl mt={4}>
                <Controller
                  control={control}
                  name='accept'
                  key='accept'
                  defaultValue={false}
                  render={({ field: { onChange, value, ref } }) => (
                    <Checkbox
                      onChange={onChange}
                      textTransform='capitalize'
                      ref={ref}
                      isChecked={value}
                      variant='circular'
                    >
                      <p className={style.reqFields}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                      </p>
                    </Checkbox>
                  )}
                />
              </FormControl>
            </ModalBody>
            <ModalFooter className={style.footer}>
              <Button variant='filled' type='submit' mr={3}>
                WYŚLIJ
              </Button>
              <div className={style.errorBox}>
                <p>
                  {errors.name?.message ||
                    errors.surname?.message ||
                    errors.email?.message ||
                    errors.accept?.message}
                </p>
              </div>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

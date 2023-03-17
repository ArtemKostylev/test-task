import React, {useRef} from 'react';
import {useClickAway} from 'react-use';
import {PrimaryButton, SecondaryButton} from '../Button';
import {useFormik} from 'formik';
import {IStockItem} from '../StockTable';
import {CloseOutlined} from '@ant-design/icons';
import {Background, Content, FormItem, ModalFooter, ModalHeader, Title} from './styled';

interface ModalFormProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  onSubmit: (values: IStockItem) => void;
}

export const ModalForm = ({visible, onClose, onSubmit, title}: ModalFormProps) => {
  const ref = useRef(null);

  useClickAway(ref, onClose);

  const formik = useFormik({
    initialValues: {
      title: '',
      price: 0,
      creationDate: ''
    },
    onSubmit: values => {
      onSubmit(values);
      formik.resetForm()
      onClose();
    },
    onReset: () => {
      onClose();
    }
  });

  if (!visible) return null;

  return (
    <Background>
      <Content ref={ref}>
        <ModalHeader>
          <Title>{title}</Title>
          <CloseOutlined onClick={onClose}/>
        </ModalHeader>
        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <FormItem>
          <label htmlFor='title'>Title</label>
          <input id='title' name='title' type='text' required value={formik.values.title} onChange={formik.handleChange}/>
        </FormItem>
        <FormItem>
          <label htmlFor='price'>Price</label>
          <input id='price' name='price' type='number' required min={1} value={formik.values.price} onChange={formik.handleChange}/>
        </FormItem>
        <FormItem>
          <label htmlFor='creationDate'>Date</label>
          <input id='creationDate' name='creationDate' required type='datetime-local' value={formik.values.creationDate} onChange={formik.handleChange}/>
        </FormItem>
        <ModalFooter>
          <SecondaryButton type='reset'>Close</SecondaryButton>
          <PrimaryButton type='submit'>Add</PrimaryButton>
        </ModalFooter>
        </form>
      </Content>
  </Background>
  );
}
import {useCallback, useEffect, useState} from 'react';
import styled from 'styled-components';
import {PrimaryButton} from './Button';
import {ModalForm} from './ModalForm';

export interface IStockItem {
  id?: number;
  title: string;
  price: number;
  creationDate: string;
}

const LIST = 'list';
const DEFAULT_LIST = '[]';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - 80px); 
  overflow: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  tr {
    border-top: 1px solid #c0c0c0;
    height: 50px;
  }
  
  td {
    text-align: center;
  }
  
  th {
    top: 0;
    height: 50px;
    background-color: white;
    position: sticky;
    border-bottom: 1px solid #c0c0c0;
  }
`;

const AddButton = styled(PrimaryButton)`
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  position: absolute;
  color: white;
  width: 250px;
  height: 40px;
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
`;

export const StockTable = () => {
  const [items, setItems] = useState<IStockItem[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    try {
      const storageItems = localStorage.getItem(LIST) || DEFAULT_LIST;
      const parsedStorageItems = JSON.parse(storageItems) as IStockItem[];

      setItems(parsedStorageItems);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const onButtonClick = useCallback(() => {
    setModalVisible(true);
  }, []);

  const onClose = useCallback(() => {
    setModalVisible(false);
  }, []);

  const onAddItem = useCallback((values: IStockItem) => {
    setItems(prev => {
      const lastId = prev[prev?.length - 1]?.id;
      const nextId = lastId ? lastId + 1 : 1;
      const newList =  [...prev, {...values, id: nextId, creationDate: values.creationDate.toString()}];
      localStorage.setItem(LIST, JSON.stringify(newList));
      return newList;
    })
  }, []);

  return (
    <Wrapper>
      {items?.length && <Table>
        <thead>
          <th>#</th>
          <th>Title</th>
          <th>Price, USD</th>
          <th>Date and time</th>
        </thead>
        <tbody>
        {items.map(it => (
          <tr>
            <td>{it.id}</td>
            <td>{it.title}</td>
            <td>{it.price}</td>
            <td>{it.creationDate}</td>
          </tr>
        ))}
        </tbody>
      </Table>}
      <AddButton onClick={onButtonClick}>New item</AddButton>
      <ModalForm onClose={onClose} title='New item' onSubmit={onAddItem} visible={modalVisible}/>
    </Wrapper>
  )
}



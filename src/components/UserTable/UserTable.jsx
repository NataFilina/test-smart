import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers  } from '../../app/thunks';
import { selectorItems, selectorName, selectorUserName, selectorEmail, selectorPhone, selectorFilterCategory } from '../../app/selectors';
import { useEffect } from 'react';
import Filter from '../Filter/Filter';
import css from "./UserTable.module.css"


const UserTable = () => {
  const selectorUsers = useSelector(selectorItems);
  const selectorFilteredName = useSelector(selectorName);
  const selectorFilteredUserName = useSelector(selectorUserName);
  const selectorFilteredEmail = useSelector(selectorEmail);
  const selectorFilteredPhone = useSelector(selectorPhone);
  const selectorFilteredCategory = useSelector(selectorFilterCategory);

  const dispatch = useDispatch();

  const newContact = (colName) => {
    switch (colName) {
      case "Name":
        return selectorFilteredName.map(({ id, name, username, email, phone }) => {
          return (
            <tr key={id} className={css.item}>
              <td className={css.tableLine}>{name}</td>
              <td className={css.tableLine}>{username}</td>
              <td className={css.tableLine}>{email}</td>
              <td className={css.tableLine}>{phone}</td>
            </tr>
          );
        });
        
      case "Username":
        return selectorFilteredUserName.map(({ id, name, username, email, phone }) => {
          return (
            <tr key={id} className={css.item}>
              <td className={css.tableLine}>{name}</td>
              <td className={css.tableLine}>{username}</td>
              <td className={css.tableLine}>{email}</td>
              <td className={css.tableLine}>{phone}</td>
            </tr>
          );
        });
        
      case "Email":
        return selectorFilteredEmail.map(({ id, name, username, email, phone }) => {
          return (
            <tr key={id} className={css.item}>
              <td className={css.tableLine}>{name}</td>
              <td className={css.tableLine}>{username}</td>
              <td className={css.tableLine}>{email}</td>
              <td className={css.tableLine}>{phone}</td>
            </tr>
          );
        });
      
      case "Phone":
        return selectorFilteredPhone.map(({ id, name, username, email, phone }) => {
          return (
            <tr key={id} className={css.item}>
              <td className={css.tableLine}>{name}</td>
              <td className={css.tableLine}>{username}</td>
              <td className={css.tableLine}>{email}</td>
              <td className={css.tableLine}>{phone}</td>
            </tr>
          );
      });
        
      default:
        return selectorUsers.map(({ id, name, username, email, phone }) => {
          return (
            <tr key={id} className={css.item}>
              <td className={css.tableLine}>{ name}</td>
              <td className={css.tableLine}>{ username}</td>
              <td className={css.tableLine}>{email}</td>
              <td className={css.tableLine}>{phone}</td>
            </tr>
          );
        });
    } 
  }

  
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);


  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th scope="col" className={css.tableLine}>Name </th>
          <th scope="col" className={css.tableLine}>Username</th>
          <th scope="col" className={css.tableLine}>Email</th>
          <th scope="col" className={css.tableLine}>Phone</th>
        </tr>
      </thead>
      <Filter />
      <tbody>
        {newContact(selectorFilteredCategory)}
      </tbody>
    </table>
  )  
}

export default UserTable

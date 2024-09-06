import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectorFilterName, selectorFilterUserName, selectorFilterEmail, selectorFilterPhone } from '../../app/selectors'
import { filterActionName,
  filterActionUserName,
  filterActionEmail,
  filterActionPhone, } from '../../app/filterSlice';



const Filter = () => {
    const filterName = useSelector(selectorFilterName);
    const filterUserName = useSelector(selectorFilterUserName);
    const filterEmail = useSelector(selectorFilterEmail);
    const filterPhone = useSelector(selectorFilterPhone);
  const dispatch = useDispatch();

    const changeFilterName = event => {
    dispatch(filterActionName(event.target.value));
    };
    const changeFilterUserName = event => {
    dispatch(filterActionUserName(event.target.value));
    };
    const changeFilterEmail = event => {
    dispatch(filterActionEmail(event.target.value));
    };
    const changeFilterPhone = event => {
    dispatch(filterActionPhone(event.target.value));
  }; 
  
    return (
      <tr>
        <th className={css.tableLine} scope="col" name="Name" >
          Find user by name
          <input
            className={css.input}
          type="text"
          value={filterName}
          onChange={changeFilterName}
          />
        </th>
        <th className={css.tableLine} scope="col" name="Username">
          Find user by userName
          <input
          className={css.input}
          type="text"
          value={filterUserName}
          onChange={changeFilterUserName}
          />
        </th>
        <th className={css.tableLine} scope="col" name="Email">
          Find user by email
          <input
          className={css.input}
          type="text"
          value={filterEmail}
          onChange={changeFilterEmail}
          />
        </th>
        <th className={css.tableLine} scope="col" name="Phone">
          Find user by phone
          <input
          className={css.input}
          type="text"
          value={filterPhone}
          onChange={changeFilterPhone}
          />
        </th>
    </tr>

  );
};

export default Filter;
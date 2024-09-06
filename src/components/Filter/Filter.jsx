import React from 'react';
// import css from './Filter.module.css';
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
  const cleanInput = event => {
    
    dispatch(filterActionName(event.target.value = ''));
    dispatch(filterActionUserName(event.target.value = ''));
    dispatch(filterActionEmail(event.target.value = ''));
    dispatch(filterActionPhone(event.target.value = ''));
    
    };
  
  
    return (
      <tr>
        <th scope="col" name="Name" >
          Find user by name
                <input
        type="text"
        value={filterName}
            onChange={changeFilterName}
            onBlur={cleanInput}
          />
        </th>
        <th scope="col" name="Username">
          Find user by userName
          <input
    
        type="text"
        value={filterUserName}
            onChange={changeFilterUserName}
            onBlur={cleanInput}
          />
        </th>
        <th scope="col" name="Email">
          Find user by email
          <input
    
        type="text"
        value={filterEmail}
            onChange={changeFilterEmail}
            onBlur={cleanInput}
          />
        </th>
        <th scope="col" name="Phone">
          Find user by phone
          <input
    
        type="text"
        value={filterPhone}
            onChange={changeFilterPhone}
            onBlur={cleanInput}
      /> </th>
    </tr>

  );
};

export default Filter;
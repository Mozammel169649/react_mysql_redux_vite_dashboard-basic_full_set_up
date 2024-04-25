
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get_all_user } from '../../../../redux/features/user/userSlice';
function All() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.users.users);

  useEffect(() => {
    dispatch(get_all_user());
  }, []);

     console.log(user)
  return (
      <div>
          {user.map((e)=>{
            return(
              <p>{e.name}</p>
            )
          })}
      </div>
  )
}

export default All
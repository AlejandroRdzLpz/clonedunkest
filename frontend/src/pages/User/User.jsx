import React, {useContext, useEffect, useState} from 'react';
import decode from 'jwt-decode'
import {Redirect, useParams} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {Grid, Button, Paper} from '@material-ui/core'
import Add from '@material-ui/icons/Add';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle } from '@mui-treasury/components/info';
import { useTutorInfoStyles } from '@mui-treasury/styles/info/tutor';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { AuthContext } from '../../context/AuthContext.js'
import { auth } from '../../api/api.js'

const useStyles = makeStyles(() => ({
  action: {
    backgroundColor: '#fff',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.12)',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#000',
    },
  },
}));

export const User = () => {
  const styles = useStyles();
  const iconBtnStyles = useSizedIconButtonStyles({ padding: 6 });
  const avatarStyles = useDynamicAvatarStyles({ radius: 12, size: 100 });

  const [firstName, getFirstName] = useState('');
  const [lastName, getLastName] = useState('');
  const [profileImg, getProfileImg] = useState('')

  const { isAuth } = useContext(AuthContext)
  const {id} = useParams();
  const token = localStorage.getItem('clonedunkest-token')
  const decoded = decode(token)
  const userId = id || decoded.id

  useEffect(() => {
    const getUserData = async (userID) => {
      const user = await auth.get(userID);
      getFirstName(user.data.payload.first_name);
      getLastName(user.data.payload.last_name);
      getProfileImg(user.data.payload.profile_img);
    }
    getUserData(userId)
  }, [])


  return (
    <Grid container style={{marginTop: '10px'}} >
    {!isAuth && !id && <Redirect to='/login' /> }
      <Grid item xs={1} sm={3} />
      <Grid item container xs={10} sm={6} >
        <Paper style={{width: '100%', borderRadius: '12%'}}>
        <Row p={1.5} gap={2} bgcolor={'#f5f5f5'} borderRadius={16} >
          <Item>
            <Avatar
              classes={avatarStyles}
              src={profileImg}
            />
          </Item>
          <Info position={'middle'} useStyles={useTutorInfoStyles} style={{flexGrow: '1'}} >
            <InfoTitle>{firstName} {lastName}</InfoTitle>
            <InfoSubtitle>ID: {userId}</InfoSubtitle>
          </Info>
          <Item ml={1} position={'middle'} >
            <Button className={styles.action} classes={iconBtnStyles}>
              Add user to league <Add />
            </Button>
          </Item>
        </Row>
        </Paper>
      </Grid>
      <Grid item xs={1} sm={3} />
    </Grid>
  )
};
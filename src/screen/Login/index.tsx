import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CustomizedCardHeader } from './styles';

const Login = () => {
  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Card sx={{ maxWidth: 480 }}>
        <CustomizedCardHeader
          title="TaFeito!"
          subheader="Transforme suas tarefas em ações"
        />
        <CardContent>
          <Box py={1}>
            <TextField fullWidth id="username" label="Usuário" variant="filled"/>
          </Box>
          <Box py={1}>
            <TextField fullWidth id="password" label="Senha" variant="filled"/>
          </Box>
        </CardContent>
        <CardActions>
          <Button fullWidth variant="contained">Entrar</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
export default Login;
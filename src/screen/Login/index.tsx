import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CustomizedCardHeader } from "./styles";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  InputLabel,
  InputAdornment,
  IconButton,
  FilledInput,
  Typography,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useAuth } from "../../provider/authProvider";

const Login = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>("");
  const { token, setToken } = useAuth();

  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (token) {
      navigate("/tarefas", { replace: true });
    }
  }, [token]);

  useEffect(() => {
    if (
      userName !== null &&
      userName !== "" &&
      password !== null &&
      password !== ""
    ) {
      setIsButtonActive(false);
    } else {
      setIsButtonActive(true);
    }
  }, [userName, password]);

  const postLogin = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        login: userName,
        senha: password,
      }),
    };
    try {
      const response = await fetch(
        "http://localhost:3000/usuarios/login",
        requestOptions
      );
      const data = await response.json();
      if (data.extra?.codigo === "CREDENCIAIS_INVALIDAS") {
        setErrorMessage(data.mensagem);
      } else {
        if (data?.token) {
          setToken(data?.token as string);
        }
        setErrorMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ maxWidth: 480 }}>
        <CustomizedCardHeader
          title="TaFeito!"
          subheader="Transforme suas tarefas em ações"
        />
        <CardContent>
          <Box py={1}>
            <TextField
              fullWidth
              id="username"
              label="Usuário"
              variant="filled"
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </Box>
          <Box py={1}>
            <FormControl sx={{ width: "100%" }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
        </CardContent>
        {errorMessage && (
          <Box>
            <Typography color={"red"}>{errorMessage}</Typography>
          </Box>
        )}
        <CardActions>
          <Button
            onClick={() => {
              postLogin();
            }}
            disabled={isButtonActive}
            fullWidth
            variant="contained"
          >
            Entrar
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
export default Login;

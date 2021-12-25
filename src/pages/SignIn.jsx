import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function SignIn() {
  const [isValid, setIsValid] = useState({
    email: true,
    password: true,
  });

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const reg = "/S+@S+.S+/".test(FormData.email);

    // if (!reg)
    //   setIsValid((prev) => {
    //     return { ...prev, email: false };
    //   });
    if (formData.password.length < 7)
      return setIsValid((prev) => {
        return { ...prev, password: false };
      });

    console.log(formData);
  };
  return (
    // <main>
    //   <h1>Instagram</h1>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       placeholder="email"
    //       type="email"
    //       name="email"
    //       onChange={handleInput}
    //       value={formData.email}
    //     />
    //     <input
    //       placeholder="password"
    //       type="password"
    //       name="password"
    //       onChange={handleInput}
    //       value={formData.password}
    //     />
    //     <button type="sumbit">submit</button>
    //     <h2>Forgot password?</h2>
    //   </form>
    //   <section>
    //     <h4>Don't have an account? </h4>
    //     <button>Sign up</button>
    //   </section>

    //   <section>
    //     <h1>Het the app</h1>
    //     <a
    //       className=""
    //       href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo"
    //     >
    //       <img
    //         alt="Available on the App Store"
    //         className=""
    //         src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png"
    //       />
    //     </a>
    //     <a
    //       className=""
    //       href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D7ED1DF97-A81D-4917-9DB1-5EC015DE79A6%26utm_content%3Dlo%26utm_medium%3Dbadge"
    //     >
    //       <img
    //         className=""
    //         alt="Available on Google Play"
    //         src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
    //       />
    //     </a>
    //   </section>
    // </main>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoFocus
            type="email"
            onFocus={() =>
              setIsValid((prev) => {
                return { ...prev, password: true };
              })
            }
            helperText={!isValid.email && "Email is valid"}
            error={!isValid.email}
            value={formData.email}
            onChange={handleInput}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            helperText={!isValid.password && "Password too short!"}
            error={!isValid.password}
            value={formData.password}
            onFocus={() =>
              setIsValid((prev) => {
                return { ...prev, password: true };
              })
            }
            onChange={handleInput}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

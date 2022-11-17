import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const pages= ["About Us", "Gallery", "Contact","Price List", "Contact"]


const Nav = ()=>{
    return(
        <AppBar position="static" sx={{bgcolor:"#67C9CB"}}>
      <Container maxWidth="xl" sx={{ml:0}} >
        <Toolbar disableGutters>
          <LocalLibraryIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 ,height:60}} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Quicksand',
              fontWeight: 600,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize:25, 
            }}
          >
            toothless 
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <LocalLibraryIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 ,height: 30}} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Quicksand',
              fontWeight: 600,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: 18
            }}
          >
            toothless
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml:10,gap:4 }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: 16 ,fontFamily:"Quicksand", "&:hover" : {
                  bgcolor: "rgba(255,255,255,0.2)"
                }} }
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{display:"flex", mr: {md:-40,xs:0}}}>
              <Typography sx={{display: { xs: 'none', md: 'inline' }, mr: 10, fontWeight: 600, lineHeight:2}} fontSize = "18px" component="div" fontFamily="Quicksand" letterSpacing="3px"> +91 765 777 282</Typography>
              <Button sx={{display: { xs: 'none', md: 'block'}, fontSize: 15, color: "white", border: "1px solid white", "&:hover" : {
                  bgcolor: "#516363", border: "1px solid #516363"
                }}} variant="outlined">Make an appointment</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    )
}

export default Nav
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import AdbIcon from '@mui/icons-material/Adb';
import './Home.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

const pages = ['Servicos', 'Vendas', 'Contato'];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                
              }}
            >
              Mochila TI
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={() => navigate(`/${page.toLowerCase()}`)}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Mochila TECH
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => navigate(`/${page.toLowerCase()}`)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

       
          </Toolbar>
        </Container>
      </AppBar>

      {/* Conteúdo do Body da Home */}
      <Container className='container'>
      <Box className='box' sx={{ my: 4, p: 3, backgroundColor: 'white', borderRadius: '8px', boxShadow: 3, textAlign: 'center' }}>
  <Typography variant="h4" component="h1" gutterBottom color='black' fontWeight='bold'>
    Bem-vindo à Mochila TECH!
  </Typography>
  <Typography variant="body1" color='black' fontSize='18px' marginTop={1} mx={{ xs: 2, md: 6 }}>
    Aqui você encontrará os melhores serviços de tecnologia e as peças ideais para o seu computador!
  </Typography>
  <Typography variant="body2" color='black' fontSize='16px' marginTop={2} mx={{ xs: 2, md: 6 }}>
    Explore nossa página de serviços e vendas e descubra tudo o que oferecemos para otimizar o seu setup.
  </Typography>
</Box>
<Box className="card-container" sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, justifyContent: 'center', mt: 4 }}>
  
  {/* Card 1 - Manutenção e Upgrade */}
  <Link to="Manutencao" style={{ textDecoration: 'none' }}>
    <Card className="card" sx={{ maxWidth: 300, boxShadow: 4, borderRadius: '12px', overflow: 'hidden' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="./manutencao.jpg"
          alt="Manutenção e Upgrade"
          sx={{ filter: 'brightness(0.9)', transition: '0.3s', '&:hover': { filter: 'brightness(1)' } }}
        />
        <CardContent sx={{ backgroundColor: '#f4f6f8', padding: 2 }}>
          <Typography gutterBottom variant="h6" component="div" fontWeight="bold" color="#1976D2">
            Manutenção e Upgrade
          </Typography>
          <Typography variant="body2" color="text.secondary" lineHeight={1.5}>
            Garanta a <b>vida útil</b> prolongada do seu computador com manutenção regular. <br />
            Ideal para <b>trabalho</b> e <b>estudos</b>.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Link>

  {/* Card 2 - Diagnóstico Completo */}
  <Card className="card" sx={{ maxWidth: 300, boxShadow: 4, borderRadius: '12px', overflow: 'hidden' }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="200"
        image="./Diagnostico.jpg"
        alt="Diagnóstico Completo"
      />
      <CardContent sx={{ padding: 2, backgroundColor: '#f4f6f8' }}>
        <Typography gutterBottom variant="h6" component="div" fontWeight="bold" color="#1976D2">
          Diagnóstico Completo
        </Typography>
        <Typography variant="body2" color="text.secondary" lineHeight={1.5}>
          Identificamos problemas como <b>lentidão</b> e <b>vírus</b>. 
          <a href="https://canaltech.com.br/hardware/pasta-termica-o-que-e-pra-que-serve-e-como-troca-la/" style={{ color: '#1976D2', fontWeight: 'bold' }}>
            SAIBA MAIS
          </a>
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

  {/* Card 3 - Redes e Roteadores Wi-Fi 6 */}
  <Card className="card" sx={{ maxWidth: 300, boxShadow: 4, borderRadius: '12px', overflow: 'hidden' }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="200"
        image="./redes.jpg"
        alt="Redes e Roteadores Wi-Fi 6"
      />
      <CardContent sx={{ padding: 2, backgroundColor: '#f4f6f8' }}>
        <Typography gutterBottom variant="h6" component="div" fontWeight="bold" color="#1976D2">
          Redes e Roteadores Wi-Fi 6
        </Typography>
        <Typography variant="body2" color="text.secondary" lineHeight={1.5}>
          Configuração e segurança de <b>redes</b> e <b>servidores</b>.
          <a href="https://canaltech.com.br/hardware/pasta-termica-o-que-e-pra-que-serve-e-como-troca-la/" style={{ color: '#1976D2', fontWeight: 'bold' }}>
            SAIBA MAIS
          </a>
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

  {/* Card 4 - Instalações de Programas */}
  <Card className="card" sx={{ maxWidth: 300, boxShadow: 4, borderRadius: '12px', overflow: 'hidden' }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="200"
        image="./instalacoes.png"
        alt="Instalações de Programas"
      />
      <CardContent sx={{ padding: 2, backgroundColor: '#f4f6f8' }}>
        <Typography gutterBottom variant="h6" component="div" fontWeight="bold" color="#1976D2">
          Instalações de Programas
        </Typography>
        <Typography variant="body2" color="text.secondary" lineHeight={1.5}>
          <b>Instalação de softwares</b> e formatação para Windows, Linux, e Mac.
          <a href="https://canaltech.com.br/hardware/pasta-termica-o-que-e-pra-que-serve-e-como-troca-la/" style={{ color: '#1976D2', fontWeight: 'bold' }}>
            SAIBA MAIS
          </a>
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>

</Box>


      </Container>
      <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>© 2024 Muchila TECH. Todos os direitos reservados.</p>
        <div style={styles.links}>
          <a href="#services" style={styles.link}>Serviços</a>
          <a href="#sales" style={styles.link}>Vendas</a>
          <a href="#contact" style={styles.link}>Contato</a>
        </div>
      </div>
    </footer>
    </>
    
  );
  
}

export default ResponsiveAppBar;

const styles = {
  footer: {
    backgroundColor: '#1976D2',
    padding: '20px 0',
    color: '#fff',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  text: {
    margin: '0',
    fontSize: '16px',
  },
  links: {
    marginTop: '10px',
  },
  link: {
    color: '#fff',
    margin: '0 10px',
    textDecoration: 'none',
    fontSize: '14px',
  },
};